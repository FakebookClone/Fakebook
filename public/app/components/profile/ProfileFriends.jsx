import React from 'react';

require('../../../stylesheets/components/profile/ProfileFriends.scss');

export default class ProfileFriends extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div className="profile-friends-wrapper">
				<div className="profile-friends-icon">
					<a href="#"><img src="/images/profile/red-friends.png"/></a>
				</div>
				<div className="profile-friends-link">
					<a href="#">Friends</a>
				</div>
			</div>
		)
	}
}
