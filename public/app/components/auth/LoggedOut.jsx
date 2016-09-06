import React from 'react';
import LoginHeaderForm from './LoginHeaderForm.jsx';
import LoggedOutMainSection from './LoggedOutMainSection.jsx';
import LoggedOutFooter from './LoggedOutFooter.jsx';

require('../../../stylesheets/components/auth/login.scss');
require('../../../stylesheets/components/auth/loggedOut.scss');

export default class LoggedOut extends React.Component {
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
          <div className="logged-out-main-section">
            <LoggedOutMainSection />
          </div>
					<div>
						<LoggedOutFooter />
					</div>
			</div>
		)
	}
}
