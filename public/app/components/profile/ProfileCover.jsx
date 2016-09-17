import React from 'react';
import Axios from 'axios';

require('../../../stylesheets/components/profile/ProfileCover.scss');

export default class ProfileCover extends React.Component {
	constructor(props) {
		super(props)
		this.state = { coverPhoto: null};
	}

	componentWillMount() {
		Axios.get(`/api/cover/${this.props.profile}`).then(r => {
			this.setState({ coverPhoto: r.data[0].cover });
		});
	}

	render() {
		return (
			<div className="profile-main-cover-wrapper">
			<img className="profile-cover-photo" src={this.state.coverPhoto} />
				<div className="add-cover-wrapper">
				<input type="file" accept="image/*" onChange={this.addPhoto.bind(this)} className="add-cover-input" />
					<div className="cover-camera-pic">
						<img src="/images/profile/white-camera.png"/>
					</div>
					<p className="add-cover-text">Add Cover Photo</p>
				</div>

				<div className="name-wrapper">
					<div>
						<h1 className="profile-name">{this.props.profile.name}</h1>
					</div>
					{this.props.sameUser
						? <div className="profile-name-buttons">
								<button className="profile-update-info">Update Info</button>
								<button className="profile-activity-log">View Activity Log</button>
								<button className="profile-cover-elipsis"><img src="/images/profile/gray-elipsis.png"/></button>
							</div>
						: <div className="profile-name-buttons">
								{this.props.requestSent
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
		Axios.post('/api/friend-request', { request_sender_id: this.props.currentUser.facebook_id, requested_id: this.props.profile.facebook_id }).then(r => {
			this.props.updateRequest();
		})
	}
	addPhoto(e) {
		const reader = new FileReader();
    const file = e.target.files[0];
		var fileUpload = {};
    reader.onload = (upload) => {
			fileUpload = {
        imageBody: upload.target.result,
        imageName: file.name,
        imageExtension: file.type,
        userEmail: this.props.profile.email
      }
			Axios.post(`/api/aws/upload/${this.props.profile.facebook_id}`, {file: fileUpload}).then(r => {
				console.log("data", r);
				this.setState({ coverPhoto: r.data });
			});
		}
		reader.readAsDataURL(file);
	}
}
