import React from 'react';

require('../../../stylesheets/components/profile/ProfilePhotos.scss');

export default class ProfilePhotos extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div className="profile-photos-wrapper">
				<div className="profile-photos-icon">
					<a href="#"><img src="/images/profile/green-photos.png" /></a>
				</div>
				<div className="profile-photos-link">
					<a href="#">Photos</a><span className="profile-photos-text">&nbsp;·&nbsp;Nothing to show</span>
				</div>
			</div>
    )
  }
}
