import React from 'react'
import { render } from 'react-dom'

import CartState from '../stores/cart-state'
import productListStore from '../stores/product-list'
import TotalQuantity from '../components/total-quantity'

function onClick(){
	console.log('Add to cart click...')
	const obj = Object.assign({}, this.dataset)
	const qty = obj.quantity
	let openCart = false
	if ('openCart' in obj){
		openCart = true
		delete obj.openCart
	}
	delete obj.quantity
	productListStore.addProduct(obj, qty)
	if(openCart){
		CartState.isOpen = true
	}
}

function openCart(){
	CartState.isOpen = true
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

	// Open buttons
	processElement('open', el => {
		el.addEventListener('click', openCart)
	})
}

function processElement(dataValue, fn){
	const els = document.querySelectorAll(`[data-zygote="${dataValue}"]`)
	for(let i = els.length; i--;){
		els[i].dataset.zygote = 'processed'
		fn(els[i])
	}
}