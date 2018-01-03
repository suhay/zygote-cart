import React, { Component } from 'react'
import { observer } from 'mobx-react'

import Container from './container'
import CartState from '../stores/cart-state'
import CartTabs from './cart-tabs'
import ProductList from './product-list'
import ShippingForm from './shipping-address-form'

export default @observer class Cart extends React.Component {
	render() {
		return (
			<div className='zygoteRoot'>
				{CartState.isOpen &&
					<Container>
						{CartState.step !== 'cart' &&
							<div className="zygoteTabs">
								<CartTabs />
							</div>
						}
						<div>
							{CartState.step === 'cart' &&
								<ProductList />
							}
							{CartState.step === 'shipping' &&
								<ShippingForm />
							}
						</div>
					</Container>
				}
				<style jsx global>{`
					.zygoteRoot,
					.zygoteRoot:before,
					.zygoteRooter:after,
					.zygoteRoot *,
					.zygoteRoot *:before,
					.zygoteRoot *:after {
						box-sizing: inherit;
					}
					.zygoteRoot{
						font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
						text-rendering: optimizeLegibility;
					}
					.zygoteRoot a{
						-webkit-tap-highlight-color: rgba(0,0,0,0);
					}
				`}</style>
			</div>
		)
	}
}