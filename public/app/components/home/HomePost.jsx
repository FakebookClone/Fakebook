import React from 'react';
import Axios from 'axios';
import ToggleDisplay from 'react-toggle-display';

var imageshome = './images/home/';
var images = './images/main/';

require('../../../stylesheets/components/home/HomePost.scss');

export default class HomePost extends React.Component {

	constructor() {
		super();
		this.state = {
			post: "",
			dimmerVisible: false,
			closeVisible: false,
			iconVisible: false
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
							<img className="camera-icon" src={imageshome + 'photo-video.png'}/>
							<p>Photo/Video</p>
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
							<img src={this.props.user.picture.data.url}/>
						</div>
						<div onClick={this.toggleDimmer.bind(this, false)} className="inputStatusDiv">
							<textarea placeholder="What's on your mind?" className="home-post-textarea" onChange={this.postCatcher.bind(this)} value={this.state.post} />
						</div>
					</div>

					<div className="post-container-bottom">

						{this.state.iconVisible === true
							? <div className="lower-post-icon-container">
									<div>
										<img src={imageshome + 'tag-people.png'} />
									</div>
									<div>
										<img src={imageshome + 'smiley2.png'} />
									</div>
									<div>
										<img src={imageshome + 'check-in2.png'} />
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

				{
					$('document').ready(function() {
						autosize($('.home-post-textarea'));
					})
				}
			</div>
		)
	}

	postCatcher(e) {this.setState({post: e.target.value});}

	post() {
		this.setState({ post: '', dimmerVisible: !this.state.dimmerVisible, closeVisible: !this.state.closeVisible })
		Axios.post(`/api/post/${this.props.user.id}`, {post_text: this.state.post, post_image: null, profile_id: this.props.user.id}).then( r => {
			Axios.get(`/api/friends/${this.props.user.id}`).then( r => {
				Axios.post(`/api/posts/${this.props.user.id}`, { friends: r.data }).then( r => {
					this.props.updatePosted(r.data);
				})
			})
		})
	}

	toggleDimmer(override) {
		if(this.state.post == "") {
			this.setState({ dimmerVisible: !this.state.dimmerVisible, closeVisible: !this.state.closeVisible, iconVisible: !this.state.iconVisible })
		} else if(this.state.post !== "") {
			this.setState({ dimmerVisible: true, closeVisible: true, iconVisible: true });
		}

		if(override) {
			this.setState({ dimmerVisible: !this.state.dimmerVisible, closeVisible: !this.state.closeVisible, iconVisible: !this.state.iconVisible })
		}
	}
}
