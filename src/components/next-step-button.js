import React from 'react'
import settings from './_settings'

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
						box-sizing: border-box;
						display: inline-block;
						border: 0;
						outline: 0;
						padding: 13px 20px;
						width: 100%;
						min-width: 130px;
						text-align: center;
						text-transform: uppercase;
						font-size: 0.8em;
						font-weight: 700;
						color: ${settings.white};
						background: ${settings.black};
						cursor: pointer;
						user-select: none;
					}

					@media (min-width: ${settings.breakpoint}px) {
						.zygoteNextButton {
							max-width: 200px;
						}
					}
				`}</style>
			</button>
		)
	}
}