import React from 'react';

require('../../../stylesheets/components/profile/ProfileFriendsGallery.scss');

export default class ProfileFriendsGallery extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div className="main-container">
			  <div className="upper-photos-section-wrapper">
			    <div className="friends-image-wrapper">
			      <h1><img src="/images/profile/friends_24.png"/>Friends</h1>
			    </div>

			    <div className="create-requests-find-and-edit-buttons">
			      <button className="friend-requests-button"><p className="text-friend-requests">Friend Requests</p> <span className="red-counter">1</span></button>
			      <button className="find-friends-button"><img className="gray-plus-image" src="/images/profile/gray-plus.png"/>Find Friends</button>
			      <button className="edit-privacy-button">Edit Privacy</button>
			    </div>
			  </div>
			  <div className="lower-section-wrapper">
			    <h1 className="no-friends-to-show">No friends to Show</h1>
			  </div>
			</div>
		)
	}
}
