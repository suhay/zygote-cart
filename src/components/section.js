import React from 'react'
import settings from './_settings'

export default class extends React.Component {
	render() {
		const rowLength = parseInt(this.props.rowLength) ? parseInt(this.props.rowLength) : 3;
		const width = (100/rowLength);
		return (
			<div className={"zygoteSection" + (this.props.isLast ? ' zygoteSectionLast' : '')}>
				{this.props.children}
				<style jsx global>{`
					.zygoteSection {
						display: block;
						padding: 20px;
						width: 100%;
					}
					@media (min-width: ${settings.breakpoint}px) {
						.zygoteSection {
							display: table-cell;
							border-right: 1px solid ${settings.gray};
							width: ${width}%;
						}

						.zygoteSection.zygoteSectionLast {
							border-right: 0;
						}

					}
				`}</style>
			</div>
		)
	}
}