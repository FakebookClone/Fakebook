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

require('../../../stylesheets/components/profile/Profile.scss');

export default class Profile extends React.Component {
	constructor(props) {
		super(props)
		this.state = { user: JSON.parse(localStorage.getItem('fakebook_user')) }
	}

	componentWillMount() {
		if (!(this.state.user)) {
			browserHistory.push('/')
		} else {
			Axios.get(`/api/profile/${this.state.user.userID}`).then(r => {
				this.setState({ user: r.data[0] })
			})
		}
	}

	render() {
		return (
			<div>
					<GlobalHeader user={this.state.user}/>

					<div className="profile-body-wrapper">
						<div className="profile-body-container">
							<div className="profile-body-header">
								<ProfileCover/>
								<ProfileAddPhoto/>
								<ProfileNav/>
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
									<ProfilePostStatus user={this.state.user} />
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
		)
	}
}
