import React from 'react';
import Axios from 'axios';
import Comment from './Comment.jsx';
import ToggleDisplay from 'react-toggle-display';
var imageshome = './images/home/';

require('../../../stylesheets/components/global/Post.scss');

export default class Posts extends React.Component {
	constructor() {
		super()
		this.state = {
			postedComments: [],
			comment: '',
			likes: []
		};
	}

	componentWillMount() {
		Axios.get(`/api/comments/${this.props.post.post_id}`).then(r => {
			this.setState({postedComments: r.data});
		});
		Axios.get(`/api/likes/post/${this.props.post.post_id}`).then(r => {
			this.setState({likes: r.data})
		})
	}

	render() {
		return (
			<div className="global-post-container">

				<div className="upper-posted-div">
					<div className="user-profile-posted-div">
						<img src={this.props.post.profile_pic}/>
						<p>{this.props.post.name}</p>
					</div>
					<p className="posted-text">{this.props.post.post_text}</p>
				</div>
				<div className="mid-posted-icon-div">
					<div className="likePost" onClick={this.likePost.bind(this)}>
						{this.state.likes.length !== 0
							? <img src={imageshome + 'blue-like.png'}/>
							: <img src={imageshome + 'gray-like.png'}/>
						}
						{this.state.likes.length !== 0
							? <p>Likes</p>
							: <div className="blueLikes">Likes</div>
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

				{this.state.postedComments.map((value) => {
					return (<Comment user={this.props.user} key={'comment_container_' + value.comment_id} comment={value}/>)
				})}

				<div className="comment-input-section">
					<div className="comment-profile-pic">
						<img src={this.props.user.picture.data.url}/>
					</div>

					<div className="input-name">
						<input onChange={this.commentCatcher.bind(this)} placeholder="Write a comment..." value={this.state.comment} onKeyDown={this.postComment.bind(this)}/>

						<div className="camera-img">
							<div ></div>
						</div>

						<div className="smiley-2">
							<div></div>
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
			this.setState({likes: r.data});
		})
	}
}
