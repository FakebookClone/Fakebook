import React from 'react';
import FacebookLogin from 'react-facebook-login';

require('../../../stylesheets/login.scss');

export default class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			user: JSON.parse(localStorage.getItem('fakebook_user'))
		}
	}

	responseFacebook(response) {
		console.log(response);
		localStorage.setItem('fakebook_user', JSON.stringify(response));
		this.setState({
			user: JSON.parse(localStorage.getItem('fakebook_user'))
		});
	}

	render() {
		return (
			<div className="login-main-wrapper">
				<div>
					<div className="login-header-container">
          <img src="" alt="facebook logo"/>
          <FacebookLogin appId="145051979269944" autoLoad={false} fields="name,first_name,last_name,email,picture,cover" cssClass="login-button" textButton="Log in" callback={this.responseFacebook.bind(this)}/>
						<div>
							<label htmlFor="email">Email or Phone</label>
							<input className="inputtext" type="text" name="email" tabIndex="1"/>
						</div>
						<div>
							<label htmlFor="pass">Password</label>
							<input className="inputtext" type="password" name="pass" tabIndex="2"/>
						</div>
						<a href="#">Forgot account?</a>
					</div>
				</div>
			</div>
		)
	}
}
