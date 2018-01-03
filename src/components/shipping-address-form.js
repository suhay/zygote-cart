import React from 'react'
import { observer } from 'mobx-react'

import Section from './section'
import Input from './input'

import ShippingAddress from '../stores/shipping-address'

export default @observer class extends React.Component {
	render() {
		return (
			<div className="zygoteShipping">
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
				<style jsx global>{`
					.zygoteShipping {
						display: table;
					}
					.zygoteShippingInput {
						margin-bottom: 20px;
					}
				`}</style>
			</div>
		)
	}
}