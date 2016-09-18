import React from 'react';
import Axios from 'axios';

var imageshome = '/images/home/';
var images = '/images/main/';

require('../../../stylesheets/components/home/HomePost.scss');

export default class HomePost extends React.Component {

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
			<div className="home-post-wrapper">
				{this.state.dimmerVisible
					? <div onClick={this.toggleDimmer.bind(this, false)} className="dimmer"></div>
					: null
}
				<div className="home-center-post-container">

					<div className="post-container-top">
						<div className="insert-photo-div">
							<input className="insert-photo-input" onChange={this.addPhoto.bind(this)} type="file" accept="image/*"/>
							<img className="camera-icon" src={imageshome + 'photo-video.png'}/>
							<p className="home-post-photo-video">Photo/Video</p>
						</div>
						<div className="album-div">
							<img src={imageshome + 'photo-video-album.png'}/>
							<p>Photo/Video Album</p>
						</div>

						{this.state.closeVisible
							? <div onClick={this.toggleDimmer.bind(this, true)} className="closeDiv"><img src={imageshome + 'gray-x.png'}/></div>
							: null
}
					</div>

					<div className="post-container-middle">
						<div className="imgStatusDiv">
							<img src={this.props.user.profile_pic}/>
						</div>
						<div onClick={this.toggleDimmer.bind(this, false)} className="inputStatusDiv">
							<textarea placeholder="What's on your mind?" className="home-post-textarea" onChange={this.postCatcher.bind(this)} value={this.state.post}/>
							<div className="home-post-image-upload-container">
								{this.state.file
									? <img className="home-post-image-upload" src={this.state.file.imageBody}/>
									: null
}
							</div>
						</div>
					</div>

					<div className="post-container-bottom">

						{this.state.iconVisible === true
							? <div className="lower-post-icon-container">
									<div>
										<img src={imageshome + 'tag-people.png'}/>
									</div>
									<div>
										<img src={imageshome + 'smiley2.png'}/>
									</div>
									<div>
										<img src={imageshome + 'check-in2.png'}/>
									</div>
								</div>
							: null
}

						<div className="lower-post-button-container">
							<button className="fb-bttn"><img src={images + 'friendsbttn.png'}/></button>
							<button className="post-bttn" onClick={this.post.bind(this)}>Post</button>
						</div>

					</div>

				</div>

				{$('document').ready(function() {
					autosize($('.home-post-textarea'));
				})
}
			</div>
		)
	}

	postCatcher(e) {
		this.setState({post: e.target.value})
	}

	addPhoto(e) {
		const reader = new FileReader();
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

	post() {
		if (this.state.file) {
			Axios.post(`/api/aws/upload`, { file: this.state.file }).then(r => {
				Axios.post(`/api/post/${this.props.user.facebook_id}`, {post_text: this.state.post, post_image: r.data, profile_id: this.props.user.facebook_id}).then( r => {
					Axios.get(`/api/friends/${this.props.user.facebook_id}`).then( r => {
						Axios.post(`/api/posts/${this.props.user.facebook_id}`, { friends: r.data }).then( r => {
							this.setState({ post: '', dimmerVisible: !this.state.dimmerVisible, closeVisible: !this.state.closeVisible, file: null })
							this.props.updatePosted(r.data);
						})
					})
				})
			})
		} else {
			if(this.state.post.length !== 0) {
				Axios.post(`/api/post/${this.props.user.facebook_id}`, {post_text: this.state.post, post_image: null, profile_id: this.props.user.facebook_id}).then( r => {
					Axios.get(`/api/friends/${this.props.user.facebook_id}`).then( r => {
						Axios.post(`/api/posts/${this.props.user.facebook_id}`, { friends: r.data }).then( r => {
							this.setState({ post: '', dimmerVisible: !this.state.dimmerVisible, closeVisible: !this.state.closeVisible })
							this.props.updatePosted(r.data);
						})
					})
				})
			}
		}
	}

	toggleDimmer(override) {
		if (this.state.post == "" && !(this.state.file)) {
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
