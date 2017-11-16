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
				{productListStore.products.length ?
					<div>
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
					</div>
					:
					<div className='zygoteEmpty'>Your cart is currently empty.</div>
				}
				<style jsx>{`
					.zygoteTable{
						padding: 20px;
					}
					.zygoteEmpty{
						text-align: center;
						padding: 20px 0;
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
					@media(min-width: 900px){
						.zygoteTableHeader{
							display: block;
							width: 860px;
						}
						.zygoteTableHeader:after{
							content: '';
							display: block;
							clear: both;
						}
						.zygoteItemHeader{
							width: 510px;
						}
						.zygoteItemHeader, .zygoteQtyHeader, .zygotePriceHeader{
							float: left;
						}
						.zygoteQtyHeader, .zygotePriceHeader{
							width: 120px;
							text-align: right;
						}
						.zygoteDelHeader{
							float: right;
						}
					}
				`}</style>
			</div>
		)
	}
}

export default ProductList
