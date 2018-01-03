import React from 'react'

export default class extends React.Component {
	render() {
		const width = (parseInt(this.props.rowLength) ? (100/parseInt(this.props.rowLength)) : (100/3)) + '%';
		return (
			<div className={"zygoteSection" + (this.props.isLast ? ' zygoteSectionLast' : '')} style={{width}}>
				{this.props.children}
				<style jsx global>{`
					.zygoteSection {
						display: table-cell;
						border-right: 1px solid #ccc;
						padding: 20px;
					}
					.zygoteSection.zygoteSectionLast {
						border-right: 0;
					}
				`}</style>
			</div>
		)
	}
}