import React from 'react';

export default class LoginMainSection extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div className="login-body-wrapper">
				<div className="upper-login-body-container">
					<img src="../images/login/upper-login.png"/>
				</div>
				<div className="lower-login-body-container">
					<img src="../images/login/lower-login.png"/>
				</div>

			</div>
		)
	}

}
