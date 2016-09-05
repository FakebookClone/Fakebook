import React from 'react';
import Link from 'react-router';
import FacebookLogin from 'react-facebook-login';

export default class LoginHeaderForm extends React.Component {
	constructor() {
		super()
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
			<div>
				<div>
					<label htmlFor="email">Email or Phone</label>
					<input className="login-header-input-text" type="text" name="email" tabIndex="1"/>
				</div>
				<div>
					<label htmlFor="pass">Password</label>
					<input className="login-header-input-text" type="password" name="pass" tabIndex="2"/>
				</div>
        <FacebookLogin appId="145051979269944" autoLoad={false} fields="name,first_name,last_name,email,picture,cover" cssClass="login-button" textButton="Log in" callback={this.responseFacebook.bind(this)}/>
				<a href="#">Forgot account?</a>
			</div>
		)
	}
}
