import React from 'react'
import { observer } from 'mobx-react'
import settings from './_settings'

import CartState from '../stores/cart-state'

export default @observer class extends React.Component {
	activateCartTab() {
		CartState.goToStep('cart');
	}
	activateShippingTab() {
		CartState.goToStep('shipping');
	}
	activatePaymentTab() {
		CartState.goToStep('billing');
	}
	render() {
		const isCart = CartState.step === 'cart';
		const isShipping = CartState.step === 'shipping';
		const isPayment = CartState.step === 'billing';
		const isConfirm = CartState.step === 'confirmation';

		return (
			<div className="zygoteTabs">
				<ul className="zygoteTabsList">
					<li className={"zygoteTabCart" + (isCart ? ' zygoteTabActive' : '')} onClick={this.activateCartTab} role="button">Your Cart</li>
					<li className={"zygoteTabShipping" + (isShipping ? ' zygoteTabActive' : '')} onClick={this.activateShippingTab} role="button">Shipping Address</li>
					<li className={"zygoteTabPayment" + (isPayment ? ' zygoteTabActive' : '')} onClick={this.activatePaymentTab} role="button">Payment Method</li>
					<li className={"zygoteTabConfirm" + (isConfirm ? ' zygoteTabActive' : '')}>Confirm Order</li>
				</ul>
				<style jsx global>{`
					.zygoteTabsList {
						box-sizing: border-box;
						list-style: none;
						margin: 0;
						padding: 0;
						font-size: 0.8em;
						text-transform: uppercase;
						user-select: none;
						color: ${settings.darkGray};
					}

					.zygoteTabCart, .zygoteTabShipping, .zygoteTabPayment, .zygoteTabConfirm {
						position: relative;
						box-sizing: inherit;
						display: inline-block;
						vertical-align: middle;
						border-bottom: 1px solid ${settings.midGray};
						border-right: 1px solid ${settings.midGray};
						padding: 20px 0;
						width: 25%;
						text-align: center;
						background: ${settings.gray};
						cursor: pointer;
					}

					.zygoteTabCart:before, .zygoteTabShipping:before, .zygoteTabPayment:before, .zygoteTabConfirm:before {
						content: '';
						position: relative;
						top: 10px;
						display: inline-block;
						vertical-align: inherit;
						margin-right: 1rem;
						width: 20px;
						height: 20px;
						background-size: 100%;
						background-repeat: no-repeat;
						transform: translateY(-50%);
					}

					.zygoteTabCart:before {
						background-image: url('/static/cart.png');
					}
					.zygoteTabShipping:before {
						background-image: url('/static/truck.png');
					}
					.zygoteTabPayment:before {
						background-image: url('/static/card.png');
					}
					.zygoteTabConfirm:before {
						background-image: url('/static/check.png');
					}

					.zygoteTabCart.zygoteTabActive, .zygoteTabShipping.zygoteTabActive, .zygoteTabPayment.zygoteTabActive, .zygoteTabConfirm.zygoteTabActive {
						border-bottom: 0;
						color: ${settings.black};
						background: ${settings.white};
						cursor: default;
					}
				`}</style>
			</div>
		)
	}
}