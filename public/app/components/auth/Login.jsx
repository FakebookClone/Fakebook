import React from 'react';
import LoginHeaderForm from './LoginHeaderForm.jsx';
import LoginMainSection from './LoginMainSection.jsx';

require('../../../stylesheets/components/auth/login.scss');

export default class Login extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="login-main-wrapper">
					<div className="login-header-container">
          <img className="login-logo" src="../../../images/login/login-logo.png" alt="facebook logo"/>
          <LoginHeaderForm />
					</div>
          <div className="login-main-section">
            <LoginMainSection />
          </div>
			</div>
		)
	}
}
