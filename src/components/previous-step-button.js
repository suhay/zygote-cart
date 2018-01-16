import React from 'react'
import settings from './_settings'

import CartState from '../stores/cart-state'


export default class extends React.Component {
	prevStep() {
		CartState.prevStep();
	}
	render() {
		return (
			<button className="zygotePrevButton" onClick={this.prevStep}>
				{this.props.value || 'Previous Step'}
				<style jsx global>{`
					.zygotePrevButton {
						box-sizing: border-box;
						display: inline-block;
						border: 0;
						outline: 0;
						padding: 13px 20px;
						min-width: 130px;
						text-align: center;
						text-transform: uppercase;
						font-size: 0.8em;
						font-weight: 700;
						color: ${settings.white};
						background: ${settings.midGray};
						cursor: pointer;
						user-select: none;
					}

					@media (min-width: ${settings.breakpoint}px) {
						.zygotePrevButton {
							max-width: 200px;
						}
					}
				`}</style>
			</button>
		)
	}
}