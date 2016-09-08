import React from 'react';
import Axios from 'axios';
import Comment from './Comment.jsx';

require('../../../stylesheets/components/global/Post.scss');

export default class Posts extends React.Component {
  constructor() {
    super()
    this.state = { postedComments: [], comment: '', likes: [] };
  }

  componentWillMount() {
  	Axios.get(`/api/comments/${this.props.post.post_id}`).then( r => {
  		this.setState({ postedComments: r.data });
  	});
    Axios.get(`/api/likes/post/${this.props.post.post_id}`).then( r => {
      this.setState({ likes: r.data })
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
					<img onClick={this.likePost.bind(this)} src="broken-link"/>
					<p>Like</p>
					<img src="broken-link"/>
					<p>Comment</p>
					<img src="broken-link"/>
					<p>Share</p>
				</div>

        {this.state.likes.length !== 0
          ? <div>
              <img src="broken-link" /><p>{this.state.likes.length}</p>
            </div>
          : null
        }

				{this.state.postedComments.map( (value) => {
          return (
            <Comment user={this.props.user} key={'comment_container_' + value.comment_id} comment={value} />
          )
        })}

        <input onChange={this.commentCatcher.bind(this)} placeholder="Write a comment..." value={this.state.comment} onKeyDown={this.postComment.bind(this)} />
        <img src="broken-link" />
        <img src="broken-link" />
        <p>Press Enter to post.</p>
      </div>
    )
  }

  commentCatcher(e) {
    this.setState({ comment: e.target.value })
  }

  postComment(e) {
    if( e.keyCode === 13 ) {
      Axios.post(`/api/comment/${this.props.post.post_id}`, { comment: this.state.comment, profile_id: this.props.user.id }).then( r => {
        this.setState({ postedComments: r.data, comment: '' })
      })
    }
  }

  likePost() {
    Axios.post(`/api/like/post/${this.props.post.post_id}`, { profile_id: this.props.user.id }).then( r => {
      this.setState({ likes: r.data });
    })
  }
}
