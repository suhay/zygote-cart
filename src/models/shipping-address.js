import { observable, action, autorun } from 'mobx'

export default class ShippingAddressModel {
	@observable firstName = ''
	@observable lastName = ''
	@observable streetAddress = ''
	@observable streetAddressTwo = ''
	@observable city = ''
	@observable state = ''
	@observable zip = ''
	@observable phone = ''
	@observable email = ''

	@action setFirstName(firstName) {
		this.firstName = firstName;
	}
	@action setLastName(lastName) {
		this.lastName = lastName;
	}
	@action setStreetAddress(streetAddress) {
		this.streetAddress = streetAddress;
	}
	@action setStreetAddressTwo(streetAddressTwo) {
		this.streetAddressTwo = streetAddressTwo;
	}
	@action setCity(city) {
		this.city = city;
	}
	@action setState(state) {
		this.state = state;
	}
	@action setZip(zip) {
		this.zip = zip;
	}
	@action setPhone(phone) {
		this.phone = phone;
	}
	@action setEmail(email) {
		this.email = email;
	}
	constructor() {
		this.setFirstName = this.setFirstName.bind(this);
		this.setLastName = this.setLastName.bind(this);
		this.setStreetAddress = this.setStreetAddress.bind(this);
		this.setStreetAddressTwo = this.setStreetAddressTwo.bind(this);
		this.setCity = this.setCity.bind(this);
		this.setState = this.setState.bind(this);
		this.setZip = this.setZip.bind(this);
		this.setPhone = this.setPhone.bind(this);
		this.setEmail = this.setEmail.bind(this);
	}
}