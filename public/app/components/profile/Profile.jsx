import React from 'react';
import GlobalHeader from '../global/GlobalHeader.jsx';
import ProfileCover from './ProfileCover.jsx';
import ProfileAddPhoto from './ProfileAddPhoto.jsx';
import ProfileNav from './ProfileNav.jsx';
import ProfileIntro from './ProfileIntro.jsx';
import ProfileStatusBox from './ProfileStatusBox.jsx';
import ProfilePhotos from './ProfilePhotos.jsx';
import ProfileFriends from './ProfileFriends.jsx';
import ProfileFooter from './ProfileFooter.jsx';

require('../../../stylesheets/components/profile/Profile.scss');

export default class Profile extends React.Component {
	constructor() {
		super()
	}
	render() {
		return (
			<div>
				<div>
					{/* <GlobalHeader/> */}
          <ProfileCover />
          <ProfileAddPhoto />
          <ProfileNav />
          <ProfileIntro />
					<ProfilePhotos />
					<ProfileFriends />
					<ProfileFooter />
				</div>
			</div>
		)
	}
}
