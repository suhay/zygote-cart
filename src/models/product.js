import { observable, computed } from 'mobx'

export default class ProductModel {
	@observable obj
	@observable qty

	@computed
	get price(){
		return this.obj.price * this.qty
	}

	@computed
	get formattedPrice(){
		return `$${this.price.toFixed(2)}`
	}

	constructor(obj, qty) {
		if(!obj.price) obj.price = 0
		obj.price = Number(obj.price)
		this.obj = obj
		this.qty = typeof qty === 'number' ? qty : 1
	}
}
