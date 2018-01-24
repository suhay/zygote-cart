import React from 'react'
import settings from './_settings'

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		if (this.props.type === 'checkbox') {
			this.props.handleChange(e.target.checked);
		}
		else {
			this.props.handleChange(e.target.value);
		}
	}
	render() {
		return (
			<label className="zygoteInput">
				<label for={this.props.name} className="zygoteInputLabel">{this.props.label}</label>
				<input className="zygoteInputField" type={this.props.type || 'text'} name={this.props.name} maxLength={this.props.maxLength} onChange={this.handleChange} value={this.props.value} checked={this.props.checked} />
				<style jsx global>{`
					.zygoteInput {
						display: block;
						text-transform: uppercase;
						font-size: 0.8em;
						color: ${settings.black};
						cursor: pointer;
						user-select: none;
					}

					.zygoteInputLabel {
						font-size: 0.8rem;
					}

					.zygoteInputField {
						box-sizing: border-box;
						border: 1px solid ${settings.gray};
						outline: none;
						margin-top: 3px;
						padding: 10px;
						width: 100%;
						height: 40px;
						font-size: 1em;
					}

					.zygoteInputField[type="checkbox"] {
						display: inline-block;
						float: left;
						margin-right: 0.5rem;
						width: auto;
						height: auto;
					}
				`}</style>
			</label>
		)
	}
}