import React, { Component } from "react"
import { observable, action } from "mobx"
import { observer } from "mobx-react"

import productListStore from '../stores/product-list'
import Product from "./product"

@observer class ProductList extends React.Component {
	render() {
		return (
			<ul>
				{productListStore.products.map(product => (
					<Product todo={product} key={product.id} />
				))}
			</ul>
		)
	}
}

export default ProductList
