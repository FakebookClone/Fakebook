import React from 'react';
import Axios from 'axios';
var imageshome = './images/home/';

require('../../../stylesheets/base/Comment.scss');

export default class Comment extends React.Component {

	constructor() {
		super()
		this.state = {
			likes: []
		}
	}

	componentWillMount() {
		Axios.get(`/api/likes/comment/${this.props.comment.comment_id}`).then(r => {
			this.setState({likes: r.data});
		})
	}

	render() {
		console.log(this.state.likes);
		return (
			<div className="userPosted">

				<img src={this.props.comment.profile_pic}/>

				<div className="user-content-section">

					<div className="user-posted-upper">

						<div className="userProfileContent">
							<p>{this.props.comment.name}</p>
						</div>

						<div className="postContent">
							<p>{this.props.comment.comment_text}</p>
						</div>

						<img src="broken-link" />

					</div>

<div className= "like-comment-div">
  <p onClick={this.likeComment.bind(this)}>Like</p>
  {this.state.likes.length !== 0
    ? <div>&nbsp;·&nbsp;<img src={imageshome + 'normal-like.png'}/>
        <p>{this.state.likes.length}</p>
      </div>
    : null
}
</div>


				</div>

			</div>
		)
	}

	likeComment() {
		Axios.post(`api/like/comment/${this.props.comment.comment_id}`, {profile_id: this.props.user.id}).then(r => {
			this.setState({likes: r.data});
		})
	}
}
