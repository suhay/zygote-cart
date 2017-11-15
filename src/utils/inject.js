import React from 'react'
import { render } from 'react-dom'

import Cart from '../components/cart'

export default function inject(){
	console.log('Injecting Zygote...')
	const containerEl = document.createElement('div')
	document.body.appendChild(containerEl)
	render(
		<Cart />,
		containerEl
	)
}