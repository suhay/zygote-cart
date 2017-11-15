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
	addProduct(title) {
		this.products.push(new ProductModel(title))
	}
}
