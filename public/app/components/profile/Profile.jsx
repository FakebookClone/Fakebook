import React from 'react';
import GlobalHeader from '../global/GlobalHeader.jsx';
import GlobalFooter from '../global/GlobalFooter.jsx';
import GlobalChat from '../global/GlobalChat.jsx';
import ProfileCover from './ProfileCover.jsx';
import ProfileAddPhoto from './ProfileAddPhoto.jsx';
import ProfileNav from './ProfileNav.jsx';
import ProfileIntro from './ProfileIntro.jsx';
import ProfilePhotos from './ProfilePhotos.jsx';
import ProfileFriends from './ProfileFriends.jsx';
import ProfilePostStatus from './ProfilePostStatus.jsx';
import ProfileStatusBox from './ProfileStatusBox.jsx';
import ProfileOldPosts from './ProfileOldPosts.jsx';
import ProfileBirthdayBox from './ProfileBirthdayBox.jsx';

import ProfilePhotosGallery from './ProfilePhotosGallery.jsx';
import ProfileFriendsGallery from './ProfileFriendsGallery.jsx';

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
					<ProfileCover/>
					<ProfileAddPhoto/>
					<ProfileNav/>
					<ProfileIntro/>
					<ProfilePhotos/>
					<ProfileFriends/>
					<GlobalFooter/>
					<ProfilePostStatus/>
					<ProfileStatusBox/>
					<ProfileOldPosts/>
					<ProfileBirthdayBox/>
					<img src="/images/profile/gray-dot.png"/>

					<GlobalChat/>
				</div>
				<div>
					<p>The ProfilePhotosGallery is what shows when Photos is clicked, hiding most others.</p>
					<ProfilePhotosGallery />
				</div>
				<div>
					<p>The ProfileFriendsGallery is what shows when Friends is clicked, hiding most others.</p>
					<ProfileFriendsGallery />
				</div>
			</div>
		)
	}
}
