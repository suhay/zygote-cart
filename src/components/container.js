import React, { Component } from 'react'

import CartState from '../stores/cart-state'

function closeCart(){
	CartState.isOpen = false
}

export default class Container extends React.Component {
	constructor(props){
		super(props)
		this.state = { ssl: false }
	}
	componentDidMount(){
		if(document.location.protocol.indexOf('https') === 0){
			this.setState({ ssl: true })
		}
	}
	render() {
		return (
			<div className='zygoteContainer' onClick={closeCart}>
				<div className='zygoteModal' onClick={e => e.stopPropagation()}>
					<div className='zygoteClose' onClick={closeCart}>×</div>
					<div className='zygoteHeader'>
						<h1>Your Cart</h1>
					</div>
					{this.props.children}
					{this.state.ssl &&
						<div className='zygoteSecurity'>
							<div className='zygoteSecurityLock'>
								<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 486.733 486.733"><g><path d="M403.88,196.563h-9.484v-44.388c0-82.099-65.151-150.681-146.582-152.145c-2.225-0.04-6.671-0.04-8.895,0 C157.486,1.494,92.336,70.076,92.336,152.175v44.388h-9.485c-14.616,0-26.538,15.082-26.538,33.709v222.632 c0,18.606,11.922,33.829,26.539,33.829h321.028c14.616,0,26.539-15.223,26.539-33.829V230.272 C430.419,211.646,418.497,196.563,403.88,196.563z M273.442,341.362v67.271c0,7.703-6.449,14.222-14.158,14.222H227.45 c-7.71,0-14.159-6.519-14.159-14.222v-67.271c-7.477-7.36-11.83-17.537-11.83-28.795c0-21.334,16.491-39.666,37.459-40.513 c2.222-0.09,6.673-0.09,8.895,0c20.968,0.847,37.459,19.179,37.459,40.513C285.272,323.825,280.919,334.002,273.442,341.362z M331.886,196.563h-84.072h-8.895h-84.072v-44.388c0-48.905,39.744-89.342,88.519-89.342c48.775,0,88.521,40.437,88.521,89.342 V196.563z"></path></g></svg>
							</div>
							<div className='zygoteSecurityMsg'>SSL Secure</div>
						</div>
					}
				</div>
				<style jsx global>{`
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
					.zygoteSecurity{
						background-color: #f7f7f7;
						text-align: center;
						padding: 10px 0;
						font-size: .8em;
						text-transform: uppercase;
						font-weight: bold;
					}
					.zygoteSecurityMsg{
						position: relative;
						top: -3px;
					}
					.zygoteSecurityLock{
						margin-right: 5px;
					}
					.zygoteSecurityLock svg{
						width: 18px;
						height: 18px;
					}
					.zygoteSecurityLock, .zygoteSecurityMsg{
						display: inline-block;
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