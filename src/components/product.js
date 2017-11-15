import React, { Component } from 'react'
import { observer } from 'mobx-react'

import CartState from '../stores/cart-state'

export default class Product extends React.Component {
	render() {
		const editable = CartState.step !== 'confirmation' && CartState.step !== 'complete'
		return <div className={`zygoteProduct ${editable ? 'zygoteEditable' : ''}`}>

			<div className='zygoteInfo'>
				{this.props.product.obj.image &&
					<a href={this.props.product.obj.url}>
						<img className='zygoteImg' src={this.props.product.obj.image} alt={this.props.product.obj.image} />
					</a>
				}
				<div className='zygoteCopy'>
					<strong>{this.props.product.obj.name}</strong>
					<span>{this.props.product.obj.description}</span>
				</div>
			</div>

			<div className='zygoteQty'>{this.props.product.qty}</div>
			<div className='zygotePrice'>{this.props.product.formattedPrice}</div>

			{editable &&
				<div className='zygoteRemove'>×</div>
			}

			<style jsx>{`
				.zygoteProduct:after{
					content: '';
					display: block;
					clear: both;
				}
				strong, span{
					display: block;
				}
				.zygoteRemove{
					cursor: pointer;
				}

				.zygoteImg{
					display: none;
				}
				.zygoteImg a{
					display: block;
					width: 150px;
					height: 150px;
					overflow: hidden;
				}
				.zygoteImg img{
					width: 150px;
				}
				.zygoteCopy{
					margin-bottom: 15px;
				}

				.zygoteQty{
					user-select: none;
					float: left;
				}
				.zygotePrice{
					font-weight: 700;
					float: right;
				}
				.zygoteRemove{
					user-select: none;
					font-size: 1.5em;
					text-align: right;
					position: absolute;
					top: 0;
					right: 0;
				}

				@media(min-width: 900px){
					.zygoteImg{
						display: block;
					}
				}

			`}</style>
		</div>
	}
}