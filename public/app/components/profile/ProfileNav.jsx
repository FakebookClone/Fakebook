import React from 'react';
import { Link } from 'react-router';

require('../../../stylesheets/components/profile/ProfileNav.scss');

export default class ProfileNav extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div className="profile-main-nav-wrapper">

				<div className="profile-nav-wrapper">
					<div className="profile-nav-first"></div>
					<Link to={`/profile/${this.props.user.facebook_id}`}><div className="profile-nav-timeline">Timeline</div></Link>
					<Link to={`/about/${this.props.user.facebook_id}`}><div className="profile-nav-about">About</div></Link>
					<Link to={`/friends/${this.props.user.facebook_id}`}><div className="profile-nav-friends">Friends</div></Link>
					<Link to={`/photos/${this.props.user.facebook_id}`}><div className="profile-nav-photos">Photos</div></Link>
					<div className="profile-nav-more">More&nbsp;&nbsp;<i className="fa fa-caret-down"></i>
					</div>
					<div className="profile-nav-last"></div>
				</div>
				{/* <img src="/images/profile/select-indicator-arrow.png" /> */}
			</div>
		)
	}
}
