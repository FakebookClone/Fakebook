import React from 'react';
import Axios from 'axios';

var imageshome = '/images/home/';

export default class CommentLikeSection extends React.Component {
  constructor() {
    super();
  }

  render() {
    if(this.props.hidden) {
      return (
        <div className="user-comment-like-container">
          <p onClick={this.unHideComment.bind(this)} className="user-comment-like-text">Unhide</p>
        </div>
      )
    } else {
      return (
        <div className="user-comment-like-container">
          {this.props.iLiked
            ? <p className="user-comment-like-text" onClick={this.props.likeComment}>Unlike</p>
            : <p className="user-comment-like-text" onClick={this.props.likeComment}>Like</p>
          }
          {this.props.likes.length !== 0
            ? <div className="user-comment-like-indicator">
                ·&nbsp;<img src={imageshome + 'normal-like.png'} /><p>{this.props.likes.length}</p>
              </div>
              : null
            }
        </div>
      )
    }
  }

  unHideComment() {
    // console.log('Unhide comment fired for comment', this.props.comment.comment_id, 'on post', this.props.comment.post_id);
    Axios({
      method: 'PUT',
      url: '/api/comment/unhide',
      data: { comment_id: this.props.comment.comment_id, post_id: this.props.comment.post_id, profile_id: this.props.user.facebook_id }
    }).then(r => {
      // console.log('UPDATED COMMENTS', r.data);
      this.props.refreshComments(r.data);
    })
  }
}
