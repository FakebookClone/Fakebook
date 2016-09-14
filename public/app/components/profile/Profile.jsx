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
import ProfileBirthdayBox from './ProfileBirthdayBox.jsx';
import ProfilePhotosGallery from './ProfilePhotosGallery.jsx';
import ProfileFriendsGallery from './ProfileFriendsGallery.jsx';

require('../../../stylesheets/components/profile/profile.scss');

export default class Profile extends React.Component {
	constructor(props) {
		super(props)
		console.log(props.params.profile_id);
		this.state = { user: JSON.parse(localStorage.getItem('fakebook_user')), profileInfo: props.params.profile_id }
	}

	componentWillMount() {
		if (!(this.state.user)) {
			browserHistory.push('/')
		} else {
			Axios.get(`/api/profile/${this.state.user.userID}`).then(r => {
				this.setState({ user: r.data[0] })
			})
			Axios.get(`/api/profile/${this.state.profileInfo}`).then(r => {
				this.setState({ profileInfo: r.data[0] })
			})
		}
	}

	render() {
		console.log('PROFILE INFO', this.state.profileInfo);
		return (
			<div>
				<GlobalHeader user={this.state.user}/>

				<div className="profile-body-wrapper">
					<div className="profile-master-body">
						<div className="profile-body-container">
							<div className="profile-body-header">
								<ProfileCover user={this.state.profileInfo} />
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
									<ProfilePostStatus user={this.state.profileInfo}/>
									<ProfileStatusBox/>
									<ProfileOldPosts/>
									<ProfileBirthdayBox/>
									<div className="profile-gray-dot-endpage">
									<img src="/images/profile/gray-dot.png"/>
									</div>
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
}
