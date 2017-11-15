import React, { Component } from 'react'

import CartState from '../stores/cart-state'

function closeCart(){
	CartState.isOpen = false
}

export default class Container extends React.Component {
	render() {
		return (
			<div className='zygoteContainer' onClick={closeCart}>
				<div className='zygoteModal' onClick={e => e.stopPropagation()}>
					<div className='zygoteClose' onClick={closeCart}>×</div>
					<div className='zygoteHeader'>
						<h1>Your Cart</h1>
					</div>
					{this.props.children}
				</div>
				<style jsx>{`
					.zygoteContainer{
						position: fixed;
						top: 0;
						right: 0;
						bottom: 0;
						left: 0;
						background-color: rgba(0, 0, 0, .5);
						overfloow-x: auto;
					}
					.zygoteModal{
						background-color: #fff;
						max-width: 900px;
						margin: 0 auto;
						position: relative;
					}
					.zygoteClose{
						user-select: none;
						position: absolute;
						top: 15px;
						right: 20px;
						cursor: pointer;
						font-size: 2em;
					}
					.zygoteHeader{
						padding: 20px;
						background-color: #f7f7f7;
						text-transform: uppercase;

					}
					.zygoteHeader h1{
						font-size: 26px;
						margin: 0;
					}
					@media(min-width: 900px){
						.zygoteModal{
							top: 30px;
							margin-bottom: 30px;
						}
					}
				`}</style>
			</div>
		)
	}
}