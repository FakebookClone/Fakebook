import React from 'react';
import {Link, browserHistory} from 'react-router';

var images = '	/images/main/';
require('../../../stylesheets/components/global/main.scss');

export default class GlobalHeader extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="global-header-wrapper">
				<div className="global-header-container">
					<div className="header-left-div">
						<div>
							<img onClick={this.logout} className="same-line" src={images + 'facebook_logo.jpg'}/>
						</div>
						<input className="global-header-find-friends-input" placeholder="Search Facebook"/>
						<button className="global-search-button">
							<i className="fa fa-search"></i>
						</button>
					</div>

					<div className="header-right-div">
						<div className="header-profile-container">
							<div>
								<img src={this.props.user.profile_pic}/>
								<Link className="headerProfileName" to={`/profile/${this.props.user.facebook_id}`}>
									<p>{this.props.user.first_name}</p>
								</Link>
							</div>
						</div>

						<div className="header-home-redirect">
							<div>
								<Link className="header-home-link" to="/home">
									<p>Home</p>
								</Link>
							</div>
						</div>

						<div className="header-friends-redirect">
							<Link className="header-friends-link" to="/find_friends">
								<p>Find Friends</p>
							</Link>
						</div>

						<div className="header-nav-section">
							<div className="friend-request-tooltip tooltip">
								<img className="friend-request-img" src={images + 'friend_request_not_selected.png'}/>
								<span className="tooltiptext">Friend Requests</span>
							</div>
							<div className="messages-tooltip tooltip">
								<img className="messages-img" src={images + 'messages_not_selected.png'}/>
								<span className="tooltiptext">Messages</span>
							</div>
							<div className="notifications-tooltip tooltip">
								<img className="notifications-img" src={images + 'notifications_not_selected.png'}/>
								<span className="tooltiptext">Notifications</span>
							</div>
						</div>
						<div className="header-lock-down-section">
							<div className="header-lock-down-img">
								<div className="privacy-tooltip tooltip">
									<img className="lock" src={images + 'lock_not_selected.png'}/>
									<span className="tooltiptext">Privacy Shortcuts</span>
								</div>
								<div>
									<img className="down-arrow" src={images + 'down_arrow_not_selected.png'}/>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		)
	}

	logout() {
		localStorage.clear();
		browserHistory.push('/loggedout');
	}
}
