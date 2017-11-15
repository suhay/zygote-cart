import React, { Component } from "react";
import { observer } from "mobx-react";

const Product = observer(({ product }) => (
	<li>
		{product.obj.name} ({product.qty})
	</li>
))

export default Product
