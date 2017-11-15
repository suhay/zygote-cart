import { observable } from "mobx"

export default class ProductModel {
	id = Math.random()
	@observable title

	constructor(title) {
		this.title = title
	}
}
