import React from 'react';
import CommentLikeSection from './CommentLikeSection.jsx';

export default class CommentTextContainer extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="user-comment-text-container">
        <div className="user-comment">
          <p><span className="user-comment-profile-name">{this.props.comment.name}</span><span className="user-comment-text"> {this.props.comment.comment_text}</span></p>
        </div>

        <CommentLikeSection comment={this.props.comment} iLiked={this.props.iLiked} likes={this.props.likes} likeComment={this.props.likeComment} hidden={this.props.hidden} refreshComments={this.props.refreshComments} />
      </div>
    )
  }
}
