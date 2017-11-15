import { observable } from "mobx"

export default class ProductModel {
	id = Math.random()
	@observable obj
	@observable qty

	constructor(obj, qty) {
		this.obj = obj
		this.qty = typeof qty === 'number' ? qty : 1
	}
}
