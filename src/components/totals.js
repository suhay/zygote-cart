import React, { Component } from 'react'
import { observer } from 'mobx-react'
import settings from './_settings'

import CartState from '../stores/cart-state'
import productListStore from '../stores/product-list'

@observer class ProductList extends React.Component {
	render() {
		const editable = CartState.step !== 'confirmation' && CartState.step !== 'complete'
		let totals = editable ? [productListStore.formattedTotals[0]] : productListStore.formattedTotals
		return (
			<ul className='zygoteTotals'>
				{totals.map((total, key) => {
					return <li key={key}>
						<div>{total.label}</div>
						<div>{total.amount}</div>
					</li>
				})}
				<style jsx global>{`
					.zygoteTotals{
						list-style-type: none;
						padding: 0;
						margin: 0;
						text-align: center;
						color: ${settings.darkGray};
						font-size: .9em;
					}
					.zygoteTotals li{
						border-top: 1px solid ${settings.gray};
						padding: 10px 0;
					}
					.zygoteTotals li:last-of-type {
						border-bottom: 1px solid ${settings.gray};
					}
					.zygoteTotals li div:first-of-type{
						text-transform: uppercase;
					}
					@media(min-width:${settings.breakpoint}px){
						.zygoteTotals li:after{
							content: '';
							display: block;
							clear: both;
						}
						.zygoteTotals li div:first-of-type{
							float: left;
						}
						.zygoteTotals li div:last-of-type{
							float: right;
						}
					}

				`}</style>
			</ul>
		)
	}
}

export default ProductList
