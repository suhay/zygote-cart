import React from 'react'
import { observer } from 'mobx-react'

import Section from './section'
import Input from './input'
import NextButton from './next-step-button'
import PrevButton from './previous-step-button'

import ShippingAddress from '../stores/shipping-address'

export default @observer class extends React.Component {
	render() {
		return (
			<div className="zygoteShipping">
				<div className="zygoteShippingForm">
					<Section rowLength="3">
						<div className="zygoteShippingInput">
							<Input label="First Name" handleChange={ShippingAddress.setFirstName} value={ShippingAddress.firstName} />
						</div>
						<div className="zygoteShippingInput">
							<Input label="Last Name" handleChange={ShippingAddress.setLastName} />
						</div>
						<div className="zygoteShippingInput">
							<Input label="Street Address" handleChange={ShippingAddress.setStreetAddress} />
						</div>
						<div className="zygoteShippingInput">
							<Input label="Street Address 2 (not required)" handleChange={ShippingAddress.setStreetAddressTwo} />
						</div>
					</Section>
					<Section rowLength="3">
						<div className="zygoteShippingInput">
							<Input label="City" handleChange={ShippingAddress.setCity} />
						</div>
						<div className="zygoteShippingInput">
							<Input label="State" handleChange={ShippingAddress.setState} />
						</div>
						<div className="zygoteShippingInput">
							<Input label="Zip / Postal Code" handleChange={ShippingAddress.setZip} />
						</div>
					</Section>
					<Section rowLength="3" isLast="true">
						<div className="zygoteShippingInput">
							<Input label="Phone" handleChange={ShippingAddress.setPhone} />
						</div>
						<div className="zygoteShippingInput">
							<Input label="Email" handleChange={ShippingAddress.setEmail} />
						</div>
					</Section>
				</div>
				<div className='zygoteShippingNextPrev'>
					<div className='zygoteShippingPrevious'><PrevButton /></div>
					<div className='zygoteShippingNext'><NextButton /></div>
				</div>
				<style jsx global>{`
					.zygoteShipping {
						display: table;
						padding: 20px 0;
					}
					.zygoteShippingInput {
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