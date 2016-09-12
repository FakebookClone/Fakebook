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
			toggleClose: false,
			iconClose: false
		}
	}
	render() {
		return (
			<div>
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
						<ToggleDisplay show={this.state.toggleClose}>
							<div onClick={this.toggleDimmer.bind(this, true)} className="closeDiv"><img src={imageshome + 'gray-x.png'}/></div>
						</ToggleDisplay>
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

						<div className="lower-post-icon-container">
							<ToggleDisplay show={this.state.iconClose}>
								<div>
									<img src={imageshome + 'tag-people.png'}/>
								</div>
							</ToggleDisplay>
							<ToggleDisplay show={this.state.iconClose}>
								<div>
									<img src={imageshome + 'smiley2.png'}/>
								</div>
							</ToggleDisplay>
							<ToggleDisplay show={this.state.iconClose}>
								<div>
									<img src={imageshome + 'check-in2.png'}/>
								</div>
							</ToggleDisplay>

						</div>

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
		this.setState({ post: '', dimmerVisible: !this.state.dimmerVisible, toggleClose: !this.state.toggleClose })
		Axios.post(`/api/post/${this.props.user.id}`, {post_text: this.state.post, post_image: null, profile_id: this.props.user.id}).then( r => {
			Axios.get(`/api/friends/${this.props.user.id}`).then( r => {
				Axios.post(`/api/posts/${this.props.user.id}`, { friends: r.data }).then( r => {
					this.props.updatePosted(r.data);
				})
			})
		})
	}

	toggleDimmer(override) {
		console.log(override);
		if(this.state.post == "") {
			this.setState({ dimmerVisible: !this.state.dimmerVisible, toggleClose: !this.state.toggleClose })
		} else if(this.state.post !== "") {
			this.setState({ dimmerVisible: true, toggleClose: true });
		}

		if(override) {
			this.setState({ dimmerVisible: !this.state.dimmerVisible, toggleClose: !this.state.toggleClose })
		}
	}
}
