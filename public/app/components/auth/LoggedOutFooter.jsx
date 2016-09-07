import React from 'react';

export default class LoggedOutFooter extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div>
				<img className="bottom-footer-image" src="../images/login/lower-login.png"/>
			</div>
		)
	}

}
