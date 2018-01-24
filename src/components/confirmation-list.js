import React, { Component } from 'react'
import { observer } from 'mobx-react'

import settings from './_settings'

import productListStore from '../stores/product-list'
import paymentStore from '../stores/payment'
import Product from './product'
import Totals from './totals'
import PrevButton from './previous-step-button'

@observer class ProductList extends React.Component {
	render() {
		return (
			<div className={`zygoteTable`}>
				{productListStore.products.length ?
					<div>
						<div className='zygoteTableHeader'>
							<div className='zygoteItemHeader'>Item</div>
							<div className='zygoteQtyHeader'>Quantity</div>
							<div className='zygotePriceHeader'>Price</div>
						</div>
						<ul className='zygoteList'>
							{productListStore.products.map(product => (
								<li className='zygoteProd' key={product.obj.id}>
									<Product product={product} />
								</li>
							))}
						</ul>
						<Totals />
						<div className='zygotePrev'>
							<PrevButton />
						</div>
					</div>
					:
					<div className='zygoteEmpty'>Your cart is currently empty.</div>
				}
				<style jsx global>{`
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
					}
					.zygoteProd:last-of-type{
						margin-bottom: 0;
						border-bottom: 0;
					}
					.zygoteTableHeader{
						display: none;
					}
					.zygoteNext {
						padding: 20px 0;
						text-align: right;
					}
					@media(min-width: ${settings.breakpoint}px){
						.zygoteTableHeader{
							display: block;
							width: 860px;
							font-size: .8em;
							border-bottom: 1px solid ${settings.gray};
							margin-bottom: 15px;
							padding-bottom: 10px;
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
