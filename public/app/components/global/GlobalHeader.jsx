import React from 'react';
import {browserHistory} from 'react-router';

var images = './images/main/';
require('../../../stylesheets/components/global/main.scss');

export default class GlobalHeader extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div className="global-header-wrapper">
				<div className="global-header-container">
					<img onClick={this.logout} className="same-line" src={images + 'facebook_logo.jpg'}/>
					<input className="same-line-global-header-find-friends-input" placeholder="Search Facebook"/>
					<button className="same-line global-search-button">
						<i className="fa fa-search"></i>
					</button>
					<div className="header-profile-container">
						<img src={this.props.user.picture.data.url}/>
						<p>{this.props.user.first_name}</p>
					</div>
					<div className="header-home-redirect">
						<p>Home</p>
					</div>
					<div className="header-friends-redirect">
						<p>Find Friends</p>
					</div>
					<div className="header-nav-section">
						<img src={images + 'friend_request_not_selected.png'}/>
						<img src={images + 'messages_not_selected.png'}/>
						<img src={images + 'notifications_not_selected.png'}/>
					</div>
					<div className="header-lock-down-section">
						<div className="header-lock-down-img">
							<img className="lock" src={images + 'lock_not_selected.png'}/>
							<img className="down-arrow" src={images + 'down_arrow_not_selected.png'}/>
						</div>
					</div>
					<div className="false-right-header"></div>
				</div>
			</div>
		)
	}

	logout() {
		localStorage.clear();
		browserHistory.push('/');
	}
}
