import { observable, computed, action } from 'mobx'
import ProductModel from './product'

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
			this.products.push(new ProductModel(obj, qty))
		}
		else {
			this.products[index].qty += qty
		}
		this.cartToCookie()
	}

	@action
	removeProduct(id){
		let index = this.findProductIndex(id)
		if(index !== false){
			this.products.splice(index, 1)
			this.cartToCookie()
		}
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
	cartToCookie() {
		try {
			let date = new Date()
			date.setTime(date.getTime() + (5 * 24 * 60 * 60 * 1000))
			let str = JSON.stringify(this.products)
			str = encodeURIComponent(str)
			document.cookie = `products=${str}; expires=${date.toUTCString()}; path=/`
		}
		catch (e) {
			console.error(e)
		}
	}
	cookieToCart(){
		try {
			let nameEQ = 'products='
			let ca = document.cookie.split(';')
			for(let i = ca.length; i--;){
				let c = ca[i]
				while (c.charAt(0) == ' ') c = c.substring(1, c.length)
				if (c.indexOf(nameEQ) == 0) {
					let str = c.substring(nameEQ.length, c.length)
					str = decodeURIComponent(str)
					let arr = JSON.parse(str)
					arr.forEach(prod => {
						this.addProduct(prod.obj, prod.qty)
					})

				}
			}
		}
		catch (e) {
			console.error(e)
		}
	}
}
