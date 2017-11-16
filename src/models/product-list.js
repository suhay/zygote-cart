import { observable, computed, action } from 'mobx'
import ProductModel from './product'

export default class ProductListModel {
	@observable products = []
	@observable totals = []

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

	@action
	modifyQuantity(id, qty){
		let index = this.findProductIndex(id)
		if(index !== false){
			this.products[index].qty += qty
			if (this.products[index].qty <= 0){
				this.products[index].qty = 1
			}
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

	@computed
	get subTotal(){
		let price = 0
		for(let i = this.products.length; i--;){
			price += this.products[i].price
		}
		return price
	}

	@computed
	get formattedSubTotal(){
		return `$${this.subTotal.toFixed(2)}`
	}

	@computed
	get formattedTotals(){
		let totals = [{
			label: 'Subtotal',
			amount: this.formattedSubTotal
		}]
		let grandTotal = this.subTotal
		this.totals.forEach(total => {
			totals.push(Object.assign({}, {
				label: total.label,
				amount: `$${total.amount.toFixed(2)}`
			}))
			grandTotal += total.amount
		})
		totals.push({
			label: 'Grand Total',
			amount: `$${grandTotal.toFixed(2)}`
		})
		return totals
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
