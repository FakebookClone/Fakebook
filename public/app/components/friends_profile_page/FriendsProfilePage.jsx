import React from 'react';
import Axios from 'axios';

import GlobalHeader from '../global/GlobalHeader.jsx';

import ProfileCover from '../profile/ProfileCover.jsx';
import ProfileAddPhoto from '../profile/ProfileAddPhoto.jsx';
import ProfileNav from '../profile/ProfileNav.jsx';
import ProfilePhotosGallery from '../profile/ProfilePhotosGallery.jsx';
import ProfileFriendsGallery from '../profile/ProfileFriendsGallery.jsx';

require('../../../stylesheets/components/friends_profile_page/FriendsProfilePage.scss');

export default class Friends extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			currentUser: JSON.parse(localStorage.getItem('fakebook_user')),
			profileInfo: props.params.profile_id,
			sameUser: false,
			requestSent: false
		}
	}

	componentWillMount() {
		console.log('log current user', this.state.currentUser);
		Axios.get(`/api/profile/${this.state.currentUser.userID}`).then(r => {
			var currentUser = r.data[0];
			Axios.get(`/api/profile/${this.state.profileInfo}`).then(r => {
				this.setState({currentUser: currentUser, profileInfo: r.data[0]})
			})
		});
	}

	render() {
		return (
			<div className="friends-view">
				<GlobalHeader user={this.state.currentUser}/>
				<div className="friends-profile-page-wrapper">
					<div className="friends-profile-page-container">
						<div className="friends-profile-page-header">
							<ProfileCover profile={this.state.profileInfo} currentUser={this.state.currentUser}/>
							<ProfileAddPhoto user={this.state.profileInfo}/>
							<ProfileNav user={this.state.profileInfo} selected="friends" />
						</div>

						<div>
							<div className="profile-gallery-wrapper">
								<ProfileFriendsGallery/>
							</div>
							<div className="profile-gallery-wrapper">
								<ProfilePhotosGallery/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
