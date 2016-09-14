import React from 'react';
import Axios from 'axios';
import ToggleDisplay from 'react-toggle-display';

var imageshome = '/images/home/';
var images = '/images/main/';

require('../../../stylesheets/components/profile/ProfilePostStatus.scss');

export default class ProfilePostStatus extends React.Component {
	constructor() {
		super();
		this.state = {
			post: "",
			dimmerVisible: false,
			closeVisible: false,
			iconVisible: false,
			file: null,
			processing: false,
			uploaded_uri: null
		}
	}
	render() {
		return (
			<div className="profile-post-status-wrapper">
				{this.state.dimmerVisible
					? <div onClick={this.toggleDimmer.bind(this, false)} className="dimmer"></div>
					: null
}
				<h1>
					<span>
						<img src="/images/profile/status-pencil.png"/>
					</span>
					<p>Status</p>
					<span>
						<img src="/images/profile/photo-video.png"/>
					</span>
					<p>Photo / Video</p>
					<span>
						<img src="/images/profile/flag-blue-profile.png"/>
					</span>
					<p>Life Event</p>
					<div>
						{this.state.closeVisible
							? <div onClick={this.toggleDimmer.bind(this, true)} className="closeDiv"><img src={imageshome + 'gray-x.png'}/></div>
							: null
}
					</div>
				</h1>
				<div className="mid-post-profile">
					<div>
						<img src={this.props.user.profile_pic}/>
					</div>
					<div onClick={this.toggleDimmer.bind(this, false)} className="inputStatusDiv">
						<textarea className="profile-text-post" placeholder="What's on your mind?"/>
					</div>
					<div className="lower-profile-button-container">
						<button className="fb-bttn"><img src={images + 'friendsbttn.png'}/></button>
						<button className="post-bttn" onClick={this.post.bind(this)}>Post</button>
					</div>
					{$('document').ready(function() {
						autosize($('.home-post-textarea'));
					})
	}
				</div>
				)
			}
				 postCatcher(e) {this.setState({post: e.target.value})
}

				addPhoto(e) {const reader = new FileReader();
				const file = e.target.files[0];

				reader.onload = (upload) => {
					this.setState({
						file: {
							imageBody: upload.target.result,
							imageName: file.name,
							imageExtension: file.type,
							userEmail: this.props.user.email
						},
						dimmerVisible: true,
						closeVisible: true,
						iconVisible: true
					});
				};

				reader.readAsDataURL(file);
}

				post() {if (this.state.file) {
					console.log('Image upload logic here');
					Axios.post(`/api/aws/upload`, {file: this.state.file}).then(r => {
						Axios.post(`/api/post/${this.props.user.id}`, {
							post_text: this.state.post,
							post_image: r.data,
							profile_id: this.props.user.id
						}).then(r => {
							Axios.get(`/api/friends/${this.props.user.id}`).then(r => {
								Axios.post(`/api/posts/${this.props.user.id}`, {friends: r.data}).then(r => {
									this.setState({
										post: '',
										dimmerVisible: !this.state.dimmerVisible,
										closeVisible: !this.state.closeVisible,
										file: null
									})
									this.props.updatePosted(r.data);
								})
							})
						})
					})
				} else {
					Axios.post(`/api/post/${this.props.user.id}`, {
						post_text: this.state.post,
						post_image: null,
						profile_id: this.props.user.id
					}).then(r => {
						Axios.get(`/api/friends/${this.props.user.id}`).then(r => {
							Axios.post(`/api/posts/${this.props.user.id}`, {friends: r.data}).then(r => {
								this.setState({
									post: '',
									dimmerVisible: !this.state.dimmerVisible,
									closeVisible: !this.state.closeVisible
								})
								this.props.updatePosted(r.data);
							})
						})
					})
				}
      }

				toggleDimmer(override) {if (this.state.post == "" && !(this.state.file)) {
					this.setState({
						dimmerVisible: !this.state.dimmerVisible,
						closeVisible: !this.state.closeVisible,
						iconVisible: true
					})
				} else if (this.state.post !== "") {
					this.setState({dimmerVisible: true, closeVisible: true});
				}

				if (override) {
					this.setState({
						dimmerVisible: !this.state.dimmerVisible,
						closeVisible: !this.state.closeVisible
					})
				}
			}
    }
