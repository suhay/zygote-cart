import React, { Component } from "react"
import { observable, action } from "mobx"
import { observer } from "mobx-react"

import Product from "./product"

@observer class ProductList extends React.Component {
	render() {
		return (
			<ul>
				{this.props.store.products.map(product => (
					<Product todo={product} key={product.id} />
				))}
			</ul>
		)
	}
}

export default ProductList
