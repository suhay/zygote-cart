import React, { Component } from "react"

export default class Lock extends React.Component {
	render() {
		return (
			<div className="zygoteLock">
				<div className="zygoteLock-1"></div>
				<div className="zygoteLock-2"></div>
				<div className="zygoteLock-body"></div>
				<div className="zygoteLock-hole"></div>
				<style jsx>{`
					.zygoteLock {
						width: 24px;
						height: 23px;
						position: relative;
						overflow: hidden;
						font-size: 0;
					}
					.zygoteLock, .zygoteLock div{
						display: inline-block;
					}

					.zygoteLock-1 {
						width: 40%;
						height: 40%;
						position: absolute;
						left: 50%;
						margin-left: -20%;
						top: 14%;
						background-color: #000;
						border-radius: 40%;
					}

					.zygoteLock-2 {
						width: 24%;
						height: 40%;
						position: absolute;
						left: 50%;
						margin-left: -12%;
						top: 22%;
						background-color: #f7f7f7;
						border-radius: 25%;
					}

					.zygoteLock-body {
						width: 60%;
						height: 48%;
						position: absolute;
						left: 50%;
						margin-left: -30%;
						bottom: 11%;
						background-color: #000;
						border-radius: 15%;
					}

					.zygoteLock-hole {
						width: 16%;
						height: 16%;
						position: absolute;
						left: 50%;
						margin-left: -8%;
						top: 51%;
						border-radius: 100%;
						background-color: #f7f7f7;
					}

					.zygoteLock-hole:after {
						content: "";
						width: 43%;
						height: 78%;
						position: absolute;
						left: 50%;
						margin-left: -20%;
						top: 100%;
						background-color: inherit;
					}
				`}</style>
			</div>
		)
	}
}