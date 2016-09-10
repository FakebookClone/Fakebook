import React from 'react';

require('../../../stylesheets/components/profile/ProfileCover.scss');

export default class ProfileCover extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div className="main-cover-wrapper">
				<div className="add-cover-wrapper">
					<div className="cover-camera-pic">
						<img src="/images/profile/white-camera.png"/>
					</div>
					<div className="add-cover-text">
						<p>Add Cover Photo</p>
					</div>

				</div>
				<div>
					<h1 className="profile-name">Facebook Clone</h1>
				</div>
			</div>
		)
	}
}
