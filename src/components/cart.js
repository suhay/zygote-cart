import React, { Component } from 'react'
import { observer } from 'mobx-react'

import Container from './container'
import CartState from '../stores/cart-state'
import ProductList from './product-list'

export default @observer class Cart extends React.Component {
	render() {
		return (
			<div className='zygoteRoot'>
				{CartState.isOpen &&
					<Container>
						<div>
							{CartState.step === 'cart' &&
								<ProductList />
							}
						</div>
					</Container>
				}
				<style jsx>{`
					.zygoteRoot{
						font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
						text-rendering: optimizeLegibility;
					}
				`}</style>
				<style jsx global>{`
					.zygoteRoot,
					.zygoteRoot:before,
					.zygoteRooter:after,
					.zygoteRoot *,
					.zygoteRoot *:before,
					.zygoteRoot *:after {
						box-sizing: inherit;
					}
					.zygoteRoot a{
						-webkit-tap-highlight-color: rgba(0,0,0,0);
					}
				`}</style>
			</div>
		)
	}
}