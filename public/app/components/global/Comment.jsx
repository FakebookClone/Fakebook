import React from 'react';
import Axios from 'axios';
var imageshome = './images/home/';

require('../../../stylesheets/components/global/Comment.scss');
require('../../../stylesheets/components/global/main.scss');

export default class Comment extends React.Component {

	constructor() {
		super()
		this.state = { likes: [], iLiked: false }
	}

	componentWillMount() {
		Axios.get(`/api/likes/comment/${this.props.comment.comment_id}`).then(r => {
			var temp = false;
			for(var i in r.data) {
				if(r.data[i].profile_id == this.props.user.id) {
					temp = true;
				}
			}
			this.setState({likes: r.data, iLiked: temp});
		})
	}

	render() {
		return (
			<div className="user-comment-wrapper">

				<div className="user-comment-container">
					<div className="user-comment-edit-button tooltip">
						<span className="tooltiptext">Edit or delete this</span>
					</div>

					<div className="user-comment-profile-picture">
						<img src={this.props.comment.profile_pic}/>
					</div>

					<div className="user-comment-text-container">
						<div className="user-comment">
							<p><span className="user-comment-profile-name">{this.props.comment.name}</span><span className="user-comment-text"> {this.props.comment.comment_text}</span></p>
						</div>

						<div className="user-comment-like-container">
							{this.state.iLiked
								? <p className="user-comment-like-text" onClick={this.likeComment.bind(this)}>Unlike</p>
								: <p className="user-comment-like-text" onClick={this.likeComment.bind(this)}>Like</p>
							}
							{this.state.likes.length !== 0
								? <div className="user-comment-like-indicator">
										·&nbsp;<img src={imageshome + 'normal-like.png'} /><p>{this.state.likes.length}</p>
									</div>
								: null
							}
						</div>
					</div>

				</div>
			</div>
		)
	}

	likeComment() {
		Axios.post(`api/like/comment/${this.props.comment.comment_id}`, {profile_id: this.props.user.id}).then(r => {
			this.setState({likes: r.data, iLiked: !this.state.iLiked});
		})
	}
}
