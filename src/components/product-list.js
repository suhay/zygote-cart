import React, { Component } from 'react'
import { observer } from 'mobx-react'

import productListStore from '../stores/product-list'
import Product from './product'

@observer class ProductList extends React.Component {
	render() {
		return (
			<div className='zygoteTable'>
				<ul className='zygoteList'>
					{productListStore.products.map(product => (
						<li className='zygoteProd' key={product.obj.id}>
							<Product product={product} />
						</li>
					))}
				</ul>
				<style jsx>{`
					.zygoteTable{
						margin: 20px;
					}
					.zygoteList{
						list-style-type: none;
						margin: 0;
						padding: 0;
					}
					.zygoteProd{
						position: relative;
						padding-bottom: 30px;
						margin-bottom: 30px;
						border-bottom: 1px solid #ccc;
					}
					.zygoteProd:last-of-type{
						margin-bottom: 0;
						border-bottom: 0;
					}
				`}</style>
			</div>
		)
	}
}

export default ProductList
