import React from 'react';
import Link from 'react-router';
import FacebookLogin from 'react-facebook-login';
import { browserHistory } from 'react-router';
import Axios from 'axios';

var config = require('./config.js');

export default class LoginHeaderForm extends React.Component {
	constructor() {
		super()
		if(localStorage.getItem('fakebook_user')) {
			browserHistory.push('/home');
		}
	}

  responseFacebook(response) {
    localStorage.setItem('fakebook_user', JSON.stringify(response));
		Axios.post(`/api/user/create/${response.id}`).then( r => {
			Axios.post(`/api/profile/create/${response.id}`, {name: response.name, first_name: response.first_name, last_name: response.last_name, email: response.email, profile_pic: response.picture.data.url});
			browserHistory.push('/home');
		});
	}

	render() {
		return (
			<div className="login-input-wrapper">
				<div className="email-input-wrapper">
					<label htmlFor="email">Email or Phone</label>
					<input className="login-header-input-text" type="text" name="email" tabIndex="1"/>
				</div>
				<div className="password-input-wrapper">
					<label htmlFor="pass">Password</label>
					<input className="login-header-input-text" type="password" name="pass" tabIndex="2"/>
					<a href="#">Forgot account?</a>
				</div>
        <FacebookLogin appId={config.appID} autoLoad={false} fields="name,first_name,last_name,email,picture,cover" cssClass="login-button" textButton="Log in" callback={this.responseFacebook.bind(this)}/>
			</div>
		)
	}
}
