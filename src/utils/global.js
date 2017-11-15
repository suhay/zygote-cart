import React from 'react'
import { render } from 'react-dom'
import DevTools from 'mobx-react-devtools'

import ProductListStore from '../stores/product-list'
import inject from './inject'

function Zygote(){
	console.log('Zygote constructor...')
}
Zygote.prototype = {
	addProduct: function(product){
		ProductListStore.addProduct(product)
		return this
	},
	inject: function(){
		inject()
		return this
	}
}

export default Zygote