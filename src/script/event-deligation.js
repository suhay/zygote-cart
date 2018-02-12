import { getAll as getData } from './data-set'

// Finds and activates "Add to Cart" buttons
module.exports = function(){

	document.addEventListener('click', e => {
		// Add to cart buttons
		let data = getData(e.target)
		if(data && data.price && data.id){
			e.preventDefault()
			this.add(data)
		}

		// Open cart icons
		if (e.target.matches('.zygoteIco')) {
			e.preventDefault()
			this.open()
		}
	})

	return this
}
