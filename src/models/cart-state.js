import { observable, action } from 'mobx'

const steps = [
	'cart',
	'shipping',
	'billing',
	'confirmation',
	'complete'
]

export default class ProductModel {
	@observable isOpen
	@observable step

	@action nextStep() {
		const currentIndex = steps.indexOf(this.step);
		const maxIndex = steps.length - 1;
		let nextIndex;
		if (currentIndex > -1 && currentIndex < maxIndex) {
			nextIndex = currentIndex + 1;
		}
		else {
			nextIndex = 0;
		}
		this.step = steps[nextIndex];
	}

	constructor() {
		this.isOpen = false
		this.step = steps[0]
	}
}
