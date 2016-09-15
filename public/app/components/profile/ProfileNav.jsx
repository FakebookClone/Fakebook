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
					<div className="profile-nav-timeline">Timeline</div>
				<div className="profile-nav-about"><Link to="about">About</Link></div>
					<div className="profile-nav-friends">Friends</div>
					<div className="profile-nav-photos">Photos</div>
					<div className="profile-nav-more">More&nbsp;&nbsp;<i className="fa fa-caret-down"></i>
					</div>
					<div className="profile-nav-last"></div>
				</div>
				{/* <img src="/images/profile/select-indicator-arrow.png" /> */}
			</div>
		)
	}
}
