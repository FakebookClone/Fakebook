import React from 'react';
import Axios from 'axios';

require('../../../stylesheets/components/profile/ProfileAddPhoto.scss');

export default class ProfilePhoto extends React.Component {
	constructor(props) {
		super(props)
		this.state = { profilePic: null };
	}

	componentWillMount() {
		console.log(this.props.user);
		Axios.get(`/api/profile-pic-lg/${this.props.user}`).then(r => {
			console.log("response profilepic", r);
			this.setState({ profilePic: r.data[0].profile_pic_lg });
		});
	}

	render() {
		return (
			<div className="add-photo-wrapper">

				<div className="silhouette-add-photo">
					<img className="profile-profile-picture" src={this.state.profilePic} />
					<div className="add-photo-opaque">
					<input type="file" accept="image/*" onChange={this.addPhoto.bind(this)} className="add-profile-pic" />
						<div className="camera-pic">
							<img src="/images/profile/white-camera.png"/>
						</div>
						<p className="add-photo-text">Add Photo</p>
					</div>
				</div>

			</div>
		)
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
				userEmail: this.props.user.email
			}
			Axios.post(`/api/aws/upload/${this.props.user.facebook_id}`, {file: fileUpload}).then(r => {
				console.log("data", r);
				this.setState({ profilePic: r.data });
			});
		}
		reader.readAsDataURL(file);
	}
}
