import React, { Component } from "react";
import { observer } from "mobx-react";

const Product = observer(({ todo }) => (
	<li>
		{todo.title}
	</li>
))

export default Product
