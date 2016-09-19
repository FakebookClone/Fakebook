import React from 'react';

require('../../../stylesheets/components/profile/ProfileBirthdayBox.scss');

export default class ProfileBirthdayBox extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div className="profile-birthday-box-wrapper">
				<div className="profile-birthday-top-row-wrapper">
					<div>
						<img className="profile-user-image" src={this.props.user.profile_pic} />

					</div>
					<div className="profile-birthday-name-icons-wrapper">
          <div>
            <p className="profile-birthday-user">{this.props.user.name}</p>
          </div>

						<div>
							<img src="/images/profile/clock-small-gray.png"/>
							<span className="profile-gray-dot">
								·
							</span>
							<img src="/images/profile/gray-people.png"/>
						</div>
					</div>

					<div>
						<img className="profile-gray-arrow" src="/images/profile/down-carat-profile-light-gray.png" />
					</div>
				</div>

				<div>
					<img className="profile-baby-blue" src="/images/profile/baby-blue-profile.png"/>
				</div>
				<div>
					<p className="profile-birthday-header">Born on January 1, 1990</p>
				</div>
			</div>
		)
	}
}
