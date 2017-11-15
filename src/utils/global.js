import ProductListModel from '../models/product-list-model'
import ProductModel from '../models/product-model'
import React from 'react'
import { render } from 'react-dom'
import DevTools from 'mobx-react-devtools'
import ProductList from '../components/product-list'

function Zygote(){
	this.addBtns = document.querySelectorAll('.zygoteAdd')
	this.store = new ProductListModel()

	this.store.addProduct("Test 1")
	this.store.addProduct("Test 2")

	const containerEl = document.createElement('div')
	document.body.appendChild(containerEl)

	render(
		<div>
			<DevTools />
			<ProductList store={this.store} />
		</div>,
		containerEl
	)
}
Zygote.prototype = {
	hydrate: function(){

	}
}

export default Zygote