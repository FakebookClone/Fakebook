import React from 'react';
import Axios from 'axios';
import Comment from './Comment.jsx';

require('../../../stylesheets/components/post/Post.scss');

export default class Posts extends React.Component {
  constructor() {
    super()
    this.state = { postedComments: [], comment: '', likes: [] };
  }

  componentWillMount() {
    Axios.get(`/api/comments/${this.props.post.post_id}`).then( r => {
      this.setState({ postedComments: r.data });
    });
  }

  render() {
    return (
      <div className="global-post-container">
        <img src={this.props.post.profile_pic} />
        <p>{this.props.post.name}</p>
        <p>{this.props.post.post_text}</p>
        <img onClick={this.likePost.bind(this)} src="broken-link" />
        <p>Like</p>
        {this.state.likes.length !== 0
          ? <div><p>{this.state.likes.length}</p></div>
          : null
        }
        <img src="broken-link" /><p>Comment</p>
        <img src="broken-link" /><p>Share</p>
        {this.state.postedComments.map( (value) => {
          return (
            <Comment key={'comment_container_' + value.comment_id} comment={value} />
          )
        })}
        <img src={this.props.post.profile_pic} />
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
      Axios.post(`/api/comment/${this.props.post.post_id}`, { comment: this.state.comment }).then( r => {
        this.setState({ postedComments: r.data, comment: '' })
      })
    }
  }

  likePost() {
    Axios.post(`/api/like/${this.props.post.post_id}`, { profile_id: this.props.user.id, post_id: this.props.post.post_id, comment_id: null, photo_id: null }).then( r => {
      this.setState({ likes: r.data });
    })
  }
}
