import React from 'react';
import {Link} from 'react-router';

require('../../../stylesheets/components/profile/ProfileNav.scss');

export default class ProfileNav extends React.Component {
	constructor() {
		super()
	}

	render() {
		console.log('PROFILE NAV USER', this.props.user);
		return (
			<div className="profile-main-nav-wrapper">

				<div className="profile-nav-wrapper">
					<div className="profile-nav-first"></div>
					<Link className="profile-nav-timeline" to={`/profile/${this.props.user.facebook_id}`}>
						<div>Timeline</div>
					</Link>
					<Link className="profile-nav-about" to={`/about/${this.props.user.facebook_id}`}>
						<div>About</div>
					</Link>
					<Link className="profile-nav-friends" to={`/friends/${this.props.user.facebook_id}`}>
						<div>Friends</div>
					</Link>
					<Link className="profile-nav-photos" to={`/photos/${this.props.user.facebook_id}`}>
						<div>Photos</div>
					</Link>
					<div className="more-button-container">
						<div className="profile-nav-more">More&nbsp;&nbsp;<i className="fa fa-caret-down"></i>
						</div>
						<div className="more-button-hidden"><p>Manage Sections</p></div>
					</div>
					<div className="profile-nav-last"></div>
				</div>
				{/* <img src="/images/profile/select-indicator-arrow.png" /> */}
			</div>
		)
	}
}
