import React from 'react';
import Axios from 'axios';
import Comment from './Comment.jsx';
import ToggleDisplay from 'react-toggle-display';
var imageshome = './images/home/';

require('../../../stylesheets/components/global/Post.scss');
require('../../../stylesheets/components/global/main.scss');

export default class Posts extends React.Component {
	constructor() {
		super()
		this.state = {
			postedComments: [],
			comment: '',
			likes: [],
			iLiked: false,
			postMenuVisible: false
		};
	}

	componentWillMount() {
		Axios.get(`/api/comments/${this.props.post.post_id}`).then(r => {
			this.setState({postedComments: r.data});
		});
		Axios.get(`/api/likes/post/${this.props.post.post_id}`).then(r => {
			var temp = false;
			for(var i in r.data) {
				if(r.data[i].profile_id == this.props.user.id) {
					temp = true;
				}
			}
			this.setState({likes: r.data, iLiked: temp})
		})
	}

	render() {
		return (
			<div className="global-post-container">

				<div onClick={this.toggleMenu.bind(this)} className="post-edit-button"></div>

				{this.state.postMenuVisible
					? <ul className="post-menu">
							<li className="post-menu-item">Delete</li>
							<li className="post-menu-item">Turn off translations</li>
							<div className="post-menu-seperator"></div>
							<li className="post-menu-item">Save Post</li>
							<li className="post-menu-item">Edit Post</li>
							<li className="post-menu-item">Turn off notifications for this post</li>
						</ul>
					: null
				}

				<div className="upper-posted-div">
					<div className="user-profile-posted-div">
						<img src={this.props.post.profile_pic}/>
						<a href="#"><p>{this.props.post.name}</p></a>
					</div>

					<div className="posted-text-container">
						<p className="posted-text">{this.props.post.post_text}</p>
					</div>
				</div>
				<div className="mid-posted-icon-div">
					<div className="likePost" onClick={this.likePost.bind(this)}>
						{this.state.iLiked
							? <img src={imageshome + 'blue-like.png'}/>
							: <img src={imageshome + 'gray-like.png'}/>
						}
						{this.state.iLiked
							? <p className="blueLikes">Like</p>
							: <p>Like</p>
						}
					</div>

					<div className="commentPost">
						<img src={imageshome + 'gray-comment-small.png'}/>
						<p>Comment</p>
					</div>

					<div className="sharePost">
						<img id="likeImg" src={imageshome + 'gray-share-small.png'}/>
						<p>Share</p>
					</div>

				</div>

				{this.state.likes.length !== 0
					? <div className="likesDiv">
							<img src={imageshome + 'blue-like.png'}/>
							<p>{this.state.likes.length}</p>
						</div>
					: null
				}

				{this.state.likes.length !== 0
					? <div className="likes-seperator-wrapper">
							<div></div>
						</div>
					: null
				}

				{this.state.postedComments.map((value) => {
					return (<Comment user={this.props.user} key={'comment_container_' + value.comment_id} comment={value}/>)
				})}


				<div className="lower-posted-div">
					<div className="comment-input-section">
						<div className="comment-profile-pic">
							<img src={this.props.user.picture.data.url}/>
						</div>

						<div className="input-name">
							<input className="new-comment-input" onChange={this.commentCatcher.bind(this)} placeholder="Write a comment..." value={this.state.comment} onKeyDown={this.postComment.bind(this)}/>

							<div className="camera-img tooltip">
								<span className="tooltiptext">Attach a Photo or Video</span>
							</div>

							<div className="smiley-2 tooltip">
								<span className="tooltiptext">Post a sticker</span>
							</div>

						</div>
					</div>
				</div>
			</div>
		)
	}

	commentCatcher(e) {
		this.setState({comment: e.target.value})
	}

	postComment(e) {
		if (e.keyCode === 13) {
			Axios.post(`/api/comment/${this.props.post.post_id}`, {
				comment: this.state.comment,
				profile_id: this.props.user.id
			}).then(r => {
				this.setState({postedComments: r.data, comment: ''})
			})
		}
	}

	likePost() {
		Axios.post(`/api/like/post/${this.props.post.post_id}`, {profile_id: this.props.user.id}).then(r => {
			this.setState({likes: r.data, iLiked: !this.state.iLiked});
		})
	}

	toggleMenu() {
		this.setState({ postMenuVisible: !this.state.postMenuVisible })
	}
}
