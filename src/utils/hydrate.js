import React from 'react'
import { render } from 'react-dom'

import productListStore from '../stores/product-list'
import TotalQuantity from '../components/total-quantity'

function onClick(){
	console.log('Add to cart click...')
	const obj = Object.assign({}, this.dataset)
	const qty = obj.qty
	delete obj.openCart
	delete obj.qty
	productListStore.addProduct(obj, qty)
}

export default function hydrate(zygote){
	// Add to cart buttons
	processElement('add', el => {
		el.addEventListener('click', onClick)
	})

	// Quantity buttons
	processElement('qty', el => {
		render(<TotalQuantity />, el)
	})
}

function processElement(dataValue, fn){
	const els = document.querySelectorAll(`[data-zygote="${dataValue}"]`)
	for(let i = els.length; i--;){
		els[i].dataset.zygote = 'processed'
		fn(els[i])
	}
}