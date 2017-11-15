import React from 'react'
import { render } from 'react-dom'
import DevTools from 'mobx-react-devtools'

import ProductListStore from '../stores/product-list'
import inject from './inject'
import hydrate from './hydrate'

function Zygote(){
	console.log('Zygote constructor...')
}
Zygote.prototype = {
	addProduct: function(product, qty){
		ProductListStore.addProduct(product, qty)
		return this
	},
	inject: function(){
		inject()
		return this
	},
	hydrate: function(){
		hydrate(this)
		return this
	}
}

export default Zygote