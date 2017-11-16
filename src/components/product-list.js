import React, { Component } from 'react'
import { observer } from 'mobx-react'

import CartState from '../stores/cart-state'
import productListStore from '../stores/product-list'
import Product from './product'
import Totals from './totals'

@observer class ProductList extends React.Component {
	render() {
		const editable = CartState.step !== 'confirmation' && CartState.step !== 'complete'
		return (
			<div className={`zygoteTable ${editable ? 'zygoteTableEditable' : ''}`}>
				<div className='zygoteTableHeader'>
					<div className='zygoteItemHeader'>Item</div>
					<div className='zygoteQtyHeader'>Quantity</div>
					<div className='zygotePriceHeader'>Price</div>
					{editable &&
						<div className='zygoteDelHeader'>Remove</div>
					}
				</div>
				<ul className='zygoteList'>
					{productListStore.products.map(product => (
						<li className='zygoteProd' key={product.obj.id}>
							<Product product={product} />
						</li>
					))}
				</ul>
				<Totals />
				<style jsx>{`
					.zygoteTable{
						padding: 20px;
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
					.zygoteTableHeader{
						display: none;
					}
					.zygoteTableHeader:after{
						content: '';
						display: block;
						clear: both;
					}
					.zygoteTableHeader div{
						float: left;
					}

				`}</style>
			</div>
		)
	}
}

export default ProductList
