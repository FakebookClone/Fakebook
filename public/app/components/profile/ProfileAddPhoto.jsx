import React from 'react';

require('../../../stylesheets/components/profile/ProfileAddPhoto.scss');

export default class ProfilePhoto extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div className="add-photo-wrapper">

				<div className="silhouette-add-photo">
					<img className="profile-profile-picture" src={this.props.user.profile_pic} />
					<div className="add-photo-opaque">
						<div className="camera-pic">
							<img src="/images/profile/white-camera.png"/>
						</div>
						<p className="add-photo-text">Add Photo</p>
					</div>
				</div>

			</div>
		)
	}
}
