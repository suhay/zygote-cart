import React, { Component } from "react"
import { observable, action } from "mobx"
import { observer } from "mobx-react"

import productListStore from '../stores/product-list'

export default @observer class TotalQuantity extends React.Component {
	render() {
		return (
			<span>{productListStore.totalQuantity}</span>
		)
	}
}