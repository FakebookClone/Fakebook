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

require('../../../stylesheets/components/profile/profile.scss');

export default class Profile extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			currentUser: JSON.parse(localStorage.getItem('fakebook_user')),
			profileInfo: props.params.profile_id,
			sameUser: false,
			requestSent: false,
			posts: []
		}
	}

	componentWillMount() {
			Axios.get(`/api/profile/${this.state.currentUser.userID}`).then(r => {
				var user = r.data[0];
				var sameUser = false;
				var profileInfo = null;
				var requestSent = null;
				Axios.get(`/api/profile/${this.state.profileInfo}`).then(r => {
					profileInfo = r.data[0];
					if (user.facebook_id === r.data[0].facebook_id) {
						var sameUser = true;
					}
					Axios.post('/api/sent/friend-requests', {
						request_sender_id: user.facebook_id,
						requested_id: profileInfo.facebook_id
					}).then(r => {
						requestSent = false;
						if (r.data.length !== 0) {
							requestSent = true;
						}
					})
					console.log('GETTING POSTS FOR PROFILE', profileInfo);
					Axios.post(`/api/posts/${profileInfo.facebook_id}`).then(r => {
						console.log('POSTS FOR PROFILE', r);
						this.setState({currentUser: user, profileInfo: profileInfo, sameUser: sameUser, requestSent: requestSent, posts: r.data})
					})
				})
			})
		}

		render() {
			return (
				<div className="profile-view">
					<GlobalHeader user={this.state.currentUser}/>

					<div className="profile-body-wrapper">
						<div className="profile-master-body">
							<div className="profile-body-container">
								<div className="profile-body-header">
									<ProfileCover profile={this.state.profileInfo} currentUser={this.state.currentUser} sameUser={this.state.sameUser} requestSent={this.state.requestSent} updateRequest={this.updateRequest.bind(this)}/>
									<ProfileAddPhoto user={this.state.profileInfo}/>
									<ProfileNav user={this.state.profileInfo}/>
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
									{this.state.profileInfo.facebook_id
										? <div className="profile-right-content-div">
												<ProfilePostStatus user={this.state.profileInfo}/>
												<ProfilePosted user={this.state.profileInfo} posts={this.state.posts} updatePosts={this.updatePosts.bind(this)}/>
												<ProfileStatusBox/>
												<ProfileOldPosts/>
												<ProfileBirthdayBox/>
												<div className="profile-gray-dot-endpage">
												<img src="/images/profile/gray-dot.png"/>
												</div>
											</div>
										: null
									}
								</div>
								<GlobalChat/>
							</div>
						</div>
					</div>
				</div>
			)
		}

		updateRequest() {
			this.setState({requestSent: true});
		}
		updatePosts(posts) {
			this.setState({posts: posts});
		}
	}
