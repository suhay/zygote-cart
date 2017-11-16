import React, { Component } from 'react'
import { observer } from 'mobx-react'

import CartState from '../stores/cart-state'
import ProductList from '../stores/product-list'

export default @observer class Product extends React.Component {
	constructor(props){
		super(props)
		this.removeProduct = this.removeProduct.bind(this)
		this.increaseProduct = this.increaseProduct.bind(this)
		this.decreaseProduct = this.decreaseProduct.bind(this)
	}
	removeProduct(){
		ProductList.removeProduct(this.props.product.obj.id)
	}
	increaseProduct(){
		ProductList.modifyQuantity(this.props.product.obj.id, 1)
	}
	decreaseProduct() {
		ProductList.modifyQuantity(this.props.product.obj.id, -1)
	}
	render() {
		const editable = CartState.step !== 'confirmation' && CartState.step !== 'complete'
		return <div className={`zygoteProduct ${editable ? 'zygoteListEditable' : ''}`}>

			<div className='zygoteInfo'>
				{this.props.product.obj.image &&
					<div className='zygoteImg'>
						<a href={this.props.product.obj.url}>
							<img src={this.props.product.obj.image} alt={this.props.product.obj.image} />
						</a>
					</div>
				}
				<div className='zygoteCopy'>
					<a href={this.props.product.obj.url}>
						<strong>{this.props.product.obj.name}</strong>
						<span>{this.props.product.obj.description}</span>
					</a>
				</div>
			</div>

			<div className='zygoteQty'>
				<div>
					{editable &&
						<div className='zygoteDecrease' onClick={this.decreaseProduct}>-</div>
					}
					<div>{this.props.product.qty}</div>
					{editable &&
						<div className='zygoteIncrease' onClick={this.increaseProduct}>+</div>
					}
				</div>
			</div>
			<div className='zygotePrice'>
				<div>{this.props.product.formattedPrice}</div>
			</div>

			{editable &&
				<div className='zygoteRemove' onClick={this.removeProduct}>
					<div>×</div>
				</div>
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
				.zygoteQty div div{
					line-height: 17px;
					width: 19px;
					height: 19px;
					text-align: center;
					display: inline-block;
				}
				.zygoteDecrease, .zygoteIncrease{
					font-weight: 400;
					cursor: pointer;
					background-color: #000;
					color: #fff;
					font-size: .9em;
					border-radius: 100%;
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
					line-height: .6em;
				}
				.zygoteCopy a{
					color: #000;
					text-decoration: none;
				}

				@media(min-width: 900px){
					.zygoteImg{
						display: block;
					}
					.zygoteInfo,
					.zygoteQty,
					.zygotePrice,
					.zygoteRemove,
					.zygoteImg,
					.zygoteCopy{
						float: left;
						height: 150px;
						position: relative;
					}
					.zygoteCopy{
						padding-left: 20px;
						position: relative;
					}
					.zygoteCopy a,
					.zygoteQty > div,
					.zygotePrice div,
					.zygoteRemove div{
						position: absolute;
						top: 50%;
						transform: translate(0, -50%);
					}
					.zygoteCopy a{
						width: 300px;
					}
					.zygoteInfo{
						width: 550px;
					}
					.zygoteQty{
						width: 120px;
					}
					.zygoteQty > div, .zygotePrice div, .zygoteRemove div{
						right: 0;
					}
					.zygotePrice{
						width: 120px;
					}
					.zygoteRemove{
						position: relative;
						float: right;
						width: 20px;
					}

				}

			`}</style>
		</div>
	}
}