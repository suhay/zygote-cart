import formatUsd from 'usd-formatter'
import classList from './class-list'

const expectedProperties = [
	'products',
	'tax',
	'shipping',
	'total',
	'succes',
	'errors'
]

// Validates an order and returns tax/shipping
module.exports = function(obj){

	// Client side validation
	const errors = this.validateInput()
	if(errors){
		let step
		for(let i in errors){
			if(i.indexOf('shipping') === 0){
				step = 'shipping'
			}
			// Style error
			const input = this.els.container.querySelector(`.zygote${cap(i)}`)
			if(input){
				classList.add(input, 'zygoteInputErr')
				let el = input.querySelector('.zygoteInputMsg')
				if(!el){
					el = document.createElement('div')
					el.className = 'zygoteInputMsg'
					input.appendChild(el)
				}
				el.textContent = errors[i]
			}
		}
		// Go back to step with errors
		if(step === 'shipping'){
			this.changeStep(2)
		}
		else{
			this.changeStep(3)
		}
		return this
	}

	if(!this.api) return this

	this.showLoader()

	const xhr = new XMLHttpRequest()
	xhr.open('POST', this.api, true)
	xhr.setRequestHeader('Content-type','application/json; charset=utf-8')
	xhr.onload = () => {
		if(xhr.readyState == 4 && xhr.status == '200'){
			const obj = JSON.parse(xhr.responseText)
			console.log('API response:')
			console.log(obj)
			// Set any custom variables
			for(let i in obj){
				if(expectedProperties.indexOf(i) === -1){
					this.custom[i] = obj[i]
				}
			}
			if(obj.errors && obj.errors.length){
				this.showMessages(obj.errors)
			}
			if(obj.products){
				// Change price/qty but not any other info
				for(let i = this.products.length; i--;){
					const prod = getProduct(obj.products, this.products[i].id)
					if(prod){
						// Change price/qty just in case
						this.products[i].price = prod.price
						this.products[i].qty = prod.qty
					}
					else{
						this.products.splice(i, 1)
					}
				}
				this.update()
			}
			// Change totals
			if(obj.tax){
				this.els.tax.textContent = formatUsd(obj.tax)
			}
			if(obj.shipping){
				this.els.ship.textContent = formatUsd(obj.shipping)
			}
			if(obj.total){
				obj.totalNoShipping = obj.total - obj.shipping
				this.els.total.textContent = formatUsd(obj.total)
			}
			// Add adjustments
			if(obj.adjustments){
				this.els.adjustments.innerHTML = `<li>${obj.adjustments.join(' Applied!</li><li>')} Applied!</li>`
				classList.add(this.els.adjustments, 'zygoteShow')
			}
			else{
				classList.remove(this.els.adjustments, 'zygoteShow')
			}
			// Add shipping options
			let foundShippingOptions = false
			if(this.shippingOptions) obj.shippingOptions = this.shippingOptions

			if (obj.shippingOptions) {
				this.shippingOptions = obj.shippingOptions
				let location = Object.keys(obj.shippingOptions)[0]
				if (location && obj.shippingOptions[location].length) {
					foundShippingOptions = true
					classList.add(this.els.shipOptionLine, 'zygoteShow')
					let shippingOptions = obj.shippingOptions[location]
					let els = []
					for (let i = 0; i < shippingOptions.length; i++) {
						let checked = ''
						if(this.shippingOption && this.shippingOption[location]){
							if (this.shippingOption[location] === i) checked = 'checked'
						}
						else if(!i){
							checked = 'checked'
						}
						els[i] = `
							<label>
								<input type="radio" name="shippingOption" value="${i}" data-location="${location}" data-price="${shippingOptions[i].amount}" ${checked} /> ${shippingOptions[i].name} ($${shippingOptions[i].amount})
							</label>
						`
					}
					console.log('Rendering shipping options...')
					this.els.shippingInputs.innerHTML = els.join('')
					els = this.els.shippingInputs.querySelectorAll('input')
					for (let i = els.length; i--;) {

						// On shipping option select
						els[i].addEventListener('change', e => {
							const location = e.target.getAttribute('data-location')
							const num = Number(e.target.getAttribute('value'))

							if(!this.shippingOption){
								this.shippingOption = {}
							}
							this.shippingOption[location] = num
							//let shippingPrice = Number(e.target.getAttribute('data-price'))
							//this.els.ship.textContent = formatUsd(shippingPrice)
							//this.els.total.textContent = formatUsd(obj.totalNoShipping + shippingPrice)
							this.changeStep(this.step)
						})

					}
				}
			}
			if (!foundShippingOptions) {
				console.log('Clearing rendered shipping options...')
				classList.remove(this.els.shipOptionLine, 'zygoteShow')
			}

			this.hideLoader()
		}
	}
	const input = this.getInput('billing')
	input.products = this.products
	console.log('CUSTOM:', this.custom)
	if (input.shippingOption && this.custom.cartId) {
		input.shippingOptions = input.shippingOption
		delete input.shippingOption
		input.products = []
		input.cartId = this.custom.cartId
	}
	const json = JSON.stringify(input)
	console.log('SENDING:', json)
	xhr.send(json)
}

function cap(string) {
	return string.charAt(0).toUpperCase() + string.slice(1)
}

function getProduct(arr, id){
	for(let i = arr.length; i--;){
		if(arr[i].id === id) return arr[i]
	}
	return false
}
