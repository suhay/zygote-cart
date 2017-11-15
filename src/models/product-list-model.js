import { observable, computed, action } from "mobx"
import ProductModel from "./product-model"

export default class ProductListModel {
	@observable products = []

	@computed
	get productCount() {
		let n = 0
		this.products.forEach(prod => {
			n += prod.qty
		})
		return n
	}

	@action
	addProduct(obj, qty = 1) {
		let index = this.findProductIndex(obj.id)
		if(index === false){
			return this.products.push(new ProductModel(obj, qty))
		}
		return this.products[index].qty += qty
	}

	@computed
	get totalQuantity() {
		let qty = 0
		this.products.forEach(product => {
			qty += product.qty
		})
		return qty
	}
	findProductIndex(id){
		for(let i = this.products.length; i--;){
			if(this.products[i].obj.id === id){
				return i
			}
		}
		return false
	}
}
