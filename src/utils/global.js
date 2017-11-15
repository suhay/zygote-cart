import React from 'react'
import { render } from 'react-dom'
import DevTools from 'mobx-react-devtools'

import CartState from '../stores/cart-state'
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
	},
	open: function(){
		CartState.isOpen = true
	},
	close: function(){
		CartState.isOpen = false
	},
	toggle: function(){
		CartState.isOpen = !CartState.isOpen
	}
}

export default Zygote