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
					<div className="profile-blue-plus"><img src="/images/profile/blue-plus.png"/></div>
					<div className="profile-who"><a href="#">Describe Who You Are</a></div>
				</div>
				<div className="profile-suitcase-wrapper">
					<div className="profile-suitcase"><img src="/images/profile/suitcase-gray.png"/></div>
					<div className="profile-job">Shameless Yes Man at <a href="https://www.facebook.com/DevMountain/?ref=br_rs">DevMountain</a></div>
				</div>
				<div className="profile-home-wrapper">
					<div className="profile-house"><img src="/images/profile/house-gray.png"/></div>
					<div className="profile-lives">Lives in <a href="https://www.facebook.com/pages/Provo-Utah/106066949424984?ref=br_rs">Provo, Utah</a></div>
				</div>
				<div className="profile-featured-photos-wrapper">
					<div className="profile-featured-photos"><a href="#"><img src="/images/profile/add-photo.png"/></a></div>
					<div className="profile-add-photos"><a href="#">Add Featured Photos</a></div>
				</div>
			</div>

		)
	}
}
