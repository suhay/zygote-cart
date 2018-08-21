import React, { Fragment } from 'react'
import { css } from 'emotion'
import { Subscribe } from 'statable'
import productsState from '../state/products'
import Item from './product-list-item'
import { borderColor } from '../styles'

export default class ProductList extends React.Component{
	render() {
		const { editable } = this.props
		return (
			<Subscribe to={productsState}>
				{({ products }) => (
					<Fragment>
						{!!products.length && (
							<ul className={productListStyles}>
								{products.map((product, key) => (
									<Item
										editable={editable}
										key={`cartProd${key}`}
										{...product}
									/>
								))}
							</ul>
						)}
					</Fragment>
				)}
			</Subscribe>
		)
	}
}

const productListStyles = css({
	listStyleType: `none`,
	margin: 0,
	padding: 0,
	paddingTop: 20,
	borderTop: `1px solid ${borderColor}`,
	'> li': {
		margin: `10px 0`,
		':first-of-type': {
			marginTop: 0,
		},
		':last-of-type': {
			marginBottom: 0,
		},
	},
	':after': {
		content: `""`,
		display: `block`,
		clear: `both`,
	},
})