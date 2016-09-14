import React from 'react';
import Axios from 'axios';

require('../../../stylesheets/components/profile/ProfileCover.scss');

export default class ProfileCover extends React.Component {
	constructor(props) {
		super(props)
		this.state = { sameUser: false, requestSent: false }
	}

	componentWillMount() {
		if(this.props.user.facebook_id === this.props.currentUser.facebook_id) {
			this.setState({ sameUser: true })
		}
		Axios.get('/api/sent/friend-requests', { request_sender_id: this.props.currentUser.facebook_id, requested_id: this.props.user.facebook_id}).then(r => {
			if(r.data.length !== 0) {
				this.setState({ requestSent: false });
			}
		})
	}

	render() {
		return (
			<div className="profile-main-cover-wrapper">
				<div className="add-cover-wrapper">
					<div className="cover-camera-pic">
						<img src="/images/profile/white-camera.png"/>
					</div>
					<p className="add-cover-text">Add Cover Photo</p>
				</div>

				<div className="name-wrapper">
					<div>
						<h1 className="profile-name">{this.props.user.name}</h1>
					</div>
					{this.state.sameUser
						? <div className="profile-name-buttons">
								<button className="profile-update-info">Update Info</button>
								<button className="profile-activity-log">View Activity Log</button>
								<button className="profile-cover-elipsis"><img src="/images/profile/gray-elipsis.png"/></button>
							</div>
						: <div className="profile-name-buttons">
								{this.state.requestSent
									? <button className="profile-friend-request-sent">Friend Request Sent</button>
								: <button onClick={this.addFriend.bind(this)} className="profile-update-info">Add Friend</button>

								}
								<button className="profile-send-message">Send Message</button>
								<button className="profile-cover-elipsis"><img src="/images/profile/gray-elipsis.png"/></button>
							</div>
					}
				</div>
			</div>
		)
	}

	addFriend() {
		Axios.post('/api/friend-request', { request_sender_id: this.state.currentUser.userID, requested_id: this.props.user.facebook_id }).then(r => {
			this.setState({ requestSent: true });
		})
	}
}
