// Validates an order and returns tax/shipping
module.exports = function(excludePrefix){
	const obj = {}
	for(let i = this.els.input.length; i--;){
		const name = this.els.input[i].getAttribute('name')
		if(name.indexOf(excludePrefix) === 0) continue
		if(this.els.input[i].getAttribute('type') === 'checkbox'){
			obj[name] = this.els.input[i].checked
		}
		else{
			obj[name] = this.els.input[i].value
		}
		if (this.els.input[i].getAttribute('type') === 'radio' && this.els.input[i] === 'checked'){
			obj[name] = this.els.input[i].value
		}
	}
	// Shipping hack
	let shipping = this.els.shippingInputs.querySelectorAll('input')
	console.log(shipping)
	console.log('Finding shipping input...')
	if (shipping.length){
		console.log('Found shipping input...')
		for(let i = shipping.length; i--;){
			if(shipping[i].checked){
				let location = shipping[i].getAttribute('data-location')
				if(location){
					if(!obj.shippingOption){
						obj.shippingOption = {}
					}
					obj.shippingOption[location] = shipping[i].value
					console.log(`Setting shipping option for ${location} to ${obj.shippingOption[location]}`)
				}
			}
		}
	}
	for (let i in this.properties) {
		obj[i] = this.properties[i]
	}
	console.log('INPUT', JSON.stringify(obj, null, 3))
	return obj
}
