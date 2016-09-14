import React from 'react';
import Axios from 'axios';
import GlobalHeader from '../global/GlobalHeader.jsx';
import ProfileFooter from '../profile/ProfileFooter.jsx';
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
import ProfilePosted from './ProfilePosted.jsx';
import ProfileBirthdayBox from './ProfileBirthdayBox.jsx';
import ProfilePhotosGallery from './ProfilePhotosGallery.jsx';
import ProfileFriendsGallery from './ProfileFriendsGallery.jsx';

require('../../../stylesheets/components/profile/profile.scss');

export default class Profile extends React.Component {
	constructor(props) {
		super(props)
		this.state = { currentUser: JSON.parse(localStorage.getItem('fakebook_user')), profileInfo: props.params.profile_id, sameUser: false, requestSent: false }
	}

	componentWillMount() {
		Axios.get(`/api/profile/${this.state.currentUser.userID}`).then(r => {
			var user = r.data[0];
			var sameUser = false;
			Axios.get(`/api/profile/${this.state.profileInfo}`).then(r => {
				var profileInfo = r.data[0];
				if(user.facebook_id === r.data[0].facebook_id) {
					var sameUser = true;
				}
				console.log(user.facebook_id);
				console.log(profileInfo.facebook_id);
				Axios.post('/api/sent/friend-requests', { request_sender_id: user.facebook_id, requested_id: profileInfo.facebook_id}).then(r => {
					var requestSent = false;
					if(r.data.length !== 0) {
						requestSent = true;
					}
					this.setState({ currentUser: user, profileInfo: profileInfo, sameUser: sameUser, requestSent: requestSent })
				})
			})
		})
	}

	render() {
		return (
			<div>
				<GlobalHeader user={this.state.currentUser}/>

				<div className="profile-body-wrapper">
					<div className="profile-master-body">
						<div className="profile-body-container">
							<div className="profile-body-header">
								<ProfileCover profile={this.state.profileInfo} currentUser={this.state.currentUser} sameUser={this.state.sameUser} requestSent={this.state.requestSent} updateRequest={this.updateRequest.bind(this)} />
								<ProfileAddPhoto user={this.state.profileInfo} />
								<ProfileNav />
							</div>
							<div className="profile-content-wrapper">
								<div className="profile-left-content-div">
									<div>
										<ProfileIntro/>
										<ProfilePhotos/>
										<ProfileFriends/>
										<ProfileFooter/>
									</div>
								</div>
								<div className="profile-right-content-div">
									<ProfilePostStatus user={this.state.profileInfo} />
									<ProfilePosted user={this.state.user} posts={this.state.posts} updatePosts={this.updatePosts.bind(this)} />
									<ProfileStatusBox/>
									<ProfileOldPosts/>
									<ProfileBirthdayBox/>
									<img src="/images/profile/gray-dot.png"/>
								</div>
							</div>
							<GlobalChat/>
						</div>
						<div>
							<p>The ProfilePhotosGallery is what shows when Photos is clicked, hiding most others.</p>
							<ProfilePhotosGallery/>
						</div>
						<div>
							<ProfileFriendsGallery/>
						</div>
					</div>
				</div>
			</div>
		)
	}

	updateRequest() {
		this.setState({ requestSent: true });
	}
}
