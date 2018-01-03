import React from 'react'

import CartState from '../stores/cart-state'

export default class extends React.Component {
	nextStep() {
		CartState.nextStep();
	}
	render() {
		return (
			<button className="zygoteNextButton" onClick={this.nextStep}>
				{this.props.value || 'Next Step'}
				<style jsx global>{`
					.zygoteNextButton {
						display: inline-block;
						border: 0;
						outline: 0;
						padding: 13px 20px;
						min-width: 130px;
						text-align: center;
						text-transform: uppercase;
						font-size: 0.8em;
						font-weight: 700;
						color: #fff;
						background: #000;
						cursor: pointer;
						user-select: none;
					}
				`}</style>
			</button>
		)
	}
}