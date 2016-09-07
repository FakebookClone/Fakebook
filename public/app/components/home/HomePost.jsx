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
					? <div className="dimmer"></div>
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
							<div onClick={this.toggleDimmer.bind(this)} className="closeDiv"><img src={imageshome + 'gray-x.png'}/></div>
						</ToggleDisplay>
					</div>

					<div className="post-container-middle">
						<div className="imgStatusDiv">
							<img src={this.props.user.picture.data.url}/>
						</div>
						<div onClick={this.toggleDimmer.bind(this)} className="inputStatusDiv">
							<textarea rows="2" cols="80" onChange={this.postCatcher.bind(this)} value={this.state.post} placeholder="What's on your mind?" type="text"/>
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
				< /div>


					) } postCatcher(e) {this.setState({post: e.target.value});

}
					post() {Axios.get(`/api / profile / $ {this.props.user.id}`).then(r => {
						Axios.post(` / api / post / $ {this.props.user.id}`, {
							post_text: this.state.post,
							post_image: null
						}).then(r => {
							this.props.updatePosted(r.data);
						})
					})
}
					toggleDimmer() {this.setState({
						dimmerVisible: !this.state.dimmerVisible,
						toggleClose: !this.state.toggleClose,
						iconClose: this.state.Icon
					});
}
}
