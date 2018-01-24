import React from 'react'
import { observer } from 'mobx-react'

import Section from './section'
import Input from './input'
import NextButton from './next-step-button'
import PrevButton from './previous-step-button'

import Payment from '../stores/payment'

export default @observer class extends React.Component {
	render() {
		return (
			<div className="zygotePayment">
				<div className="zygotePaymentForm">
					<Section rowLength="3">
						<div className="zygotePaymentInput">
							<Input label="Card Number" handleChange={Payment.setCardNumber} value={Payment.cardNumber} />
						</div>
						<div className="zygotePaymentInput">
							<Input label="CVC" handleChange={Payment.setCvc} value={Payment.cvc} />
						</div>
					</Section>
					<Section rowLength="3">
						<div className="zygotePaymentInput">
							<Input label="Expiration Month" handleChange={Payment.setExpirationMonth} value={Payment.expirationMonth} />
						</div>
						<div className="zygotePaymentInput">
							<Input label="Expiration Year" handleChange={Payment.setExpirationYear} value={Payment.expirationYear} />
						</div>
					</Section>
					<Section rowLength="3">
						<div className="zygotePaymentInput">
							<Input type="checkbox" label="Billing address same as shipping" handleChange={Payment.setUseShippingAddress} checked={Payment.useShippingAddress} />
						</div>
					</Section>
				</div>
				{(!Payment.useShippingAddress) &&
					<div className="zygoteBillingAddressForm">
					<Section rowLength="2">
						<div className="zygotePaymentInput">
							<Input label="First Name" handleChange={Payment.setFirstName} value={Payment.firstName} />
						</div>
						<div className="zygotePaymentInput">
							<Input label="Last Name" handleChange={Payment.setLastName} />
						</div>
						<div className="zygotePaymentInput">
							<Input label="Street Address" handleChange={Payment.setStreetAddress} />
						</div>
						<div className="zygotePaymentInput">
							<Input label="Street Address 2 (not required)" handleChange={Payment.setStreetAddressTwo} />
						</div>
					</Section>
					<Section rowLength="2" >
						<div className="zygotePaymentInput">
							<Input label="City" handleChange={Payment.setCity} />
						</div>
						<div className="zygotePaymentInput">
							<Input label="State" handleChange={Payment.setState} />
						</div>
						<div className="zygotePaymentInput">
							<Input label="Zip / Postal Code" handleChange={Payment.setZip} />
						</div>
						<div className="zygotePaymentInput">
							<Input label="Phone" handleChange={Payment.setZip} />
						</div>
					</Section>
					</div>
				}
				<div className='zygoteShippingNextPrev'>
					<div className='zygoteShippingPrevious'><PrevButton /></div>
					<div className='zygoteShippingNext'><NextButton /></div>
				</div>
				<style jsx global>{`
					.zygotePaymentForm, .zygoteBillingAddressForm {
						box-sizing: border-box;
						display: table;
						width: 100%;
						padding: 20px 0;
					}
					.zygotePaymentInput {
						margin-bottom: 20px;
					}
					.zygoteShippingNextPrev {
						box-sizing: border-box;
						width: 100%;
						padding: 20px;
					}
					.zygoteShippingNext, .zygoteShippingPrevious {
						display: inline-block;
						vertical-align: middle;
						width: 50%;
					}
					.zygoteShippingPrevious {
						text-align: left;
					}
					.zygoteShippingNext {
						text-align: right;
					}
				`}</style>
			</div>
		)
	}
}