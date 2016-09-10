import React from 'react';

require('../../../stylesheets/components/profile/ProfileIntro.scss');

export default class ProfileIntro extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div className="profile-intro-wrapper">
				<div className="profile-globe-wrapper">
					<div className="profile-intro-icon">
						<img src="/images/profile/intro-globe.png"/>
					</div>
					<div className="profile-intro-header">Intro</div>
				</div>
				<div className="profile-describe-wrapper">
					<div><img src="/images/profile/blue-plus.png"/></div>
					<div>Describe Who You Are</div>
				</div>
				<div>
					<div><img src="/images/profile/suitcase-gray.png"/></div>
					<div>Shameless Yes Man at <a href="#">DevMountain</a></div>
				</div>
				<div>
					<div><img src="/images/profile/house-gray.png"/></div>
					<div>Lives in Provo, Utah</div>
				</div>
				<div>
					<div><a href="#"><img src="/images/profile/add-photo.png"/></a></div>
					<div><a href="#">Add Featured Photos</a></div>
				</div>
			</div>

		)
	}
}
