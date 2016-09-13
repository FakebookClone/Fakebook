import React from 'react';

require('../../../stylesheets/components/profile/ProfileCover.scss');

export default class ProfileCover extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div className="profile-main-cover-wrapper">
				<div className="add-cover-wrapper">
					<div className="cover-camera-pic">
						<img src="/images/profile/white-camera.png"/>
					</div>
					<p className="add-cover-text">Add Cover Photo</p>
				</div>

				<div className="name-wrapper">
					<div>
						<h1 className="profile-name">Facebook Clone</h1>
					</div>
					<div className="profile-name-buttons">
						<button className="profile-update-info">Update Info</button>
						<button className="profile-activity-log">View Activity Log</button>
						<button className="profile-cover-elipsis"><img src="/images/profile/gray-elipsis.png"/></button>
					</div>
				</div>
			</div>
		)
	}
}
