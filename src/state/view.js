import { Container } from 'unstated'

const steps = [
	'cart',
	'shipping',
	'billing',
	'confirmation',
	'complete'
]

class ViewContainer extends Container{
	state = {
		step: steps[0],
		isOpen: false,
	}
	toggle(){
		this.setState({ isOpen: !this.state.isOpen })
	}
	close(){
		this.setState({ isOpen: false })
	}
	open(){
		this.setState({ isOpen: true })
	}

	nextStep() {
		const currentIndex = steps.indexOf(this.step)
		const maxIndex = steps.length - 1
		let nextIndex
		if (currentIndex > -1 && currentIndex < maxIndex) {
			nextIndex = currentIndex + 1
		}
		else {
			nextIndex = 0
		}
		this.setState({ step: steps[nextIndex] })
	}

	prevStep() {
		const currentIndex = steps.indexOf(this.step)
		let prevIndex = 0
		if (currentIndex > 0) {
			prevIndex = currentIndex - 1
		}
		this.setState({ step: steps[prevIndex] })
	}

	goToStep(step) {
		if (steps.indexOf(step) !== -1) {
			this.setState({ step: steps[step] })
		}
	}
}

export default ViewContainer