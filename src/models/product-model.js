import { observable, computed } from "mobx"

export default class ProductModel {
	id = Math.random()
	@observable obj
	@observable qty

	@computed
	get formattedPrice(){
		return `$${this.obj.price.toFixed(2)}`
	}

	constructor(obj, qty) {
		if(!obj.price) obj.price = 0
		obj.price = Number(obj.price)
		this.obj = obj
		this.qty = typeof qty === 'number' ? qty : 1
	}
}
