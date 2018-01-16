import React from 'react'
import settings from './_settings'

export default class extends React.Component {
	render() {
		const lengthClass = ` zygoteSection${this.props.rowLength || 1}`
		const lastClass = this.props.isLast ? ' zygoteSectionLast' : '';
		return (
			<div className={"zygoteSection" + lengthClass + lastClass}>
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
						}

						.zygoteSection.zygoteSectionLast {
							border-right: 0;
						}

						.zygoteSection.zygoteSection2 {
							width: 50%;
						}

						.zygoteSection.zygoteSection3 {
							width: 33%;
							width: calc(100% / 3);
						}
					}
				`}</style>
			</div>
		)
	}
}