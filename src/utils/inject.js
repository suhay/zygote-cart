import React from 'react'
import { render } from 'react-dom'
import DevTools from 'mobx-react-devtools'

import ProductList from '../components/product-list'

export default function inject(){
	console.log('Injecting Zygote...')
	const containerEl = document.createElement('div')
	document.body.appendChild(containerEl)
	render(
		<div>
			<DevTools />
			<ProductList />
		</div>,
		containerEl
	)
}