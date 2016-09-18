import React from 'react';
import Axios from 'axios';

import GlobalHeader from '../global/GlobalHeader.jsx';

import ProfileCover from '../profile/ProfileCover.jsx';
import ProfileAddPhoto from '../profile/ProfileAddPhoto.jsx';
import ProfileNav from '../profile/ProfileNav.jsx';

require('../../../stylesheets/components/about/AboutProfilePage.scss');

export default class About extends React.Component {

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
			<div className="about-view">
				<GlobalHeader user={this.state.currentUser}/>
				<div className="about-profile-page-wrapper">
					<div className="about-profile-page-container">
						<div className="about-profile-page-header">
							<ProfileCover profile={this.state.profileInfo} currentUser={this.state.currentUser}/>
							<ProfileAddPhoto user={this.state.profileInfo}/>
							<ProfileNav user={this.state.profileInfo} selected='about'/>
						</div>
						<div className="profile-gallery-wrapper">
							<p>Hello From The About Page</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
