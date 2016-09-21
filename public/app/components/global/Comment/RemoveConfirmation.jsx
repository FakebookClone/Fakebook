import React from 'react';
import Axios from 'axios';

export default class RemoveConfirmation extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props.comment);
    return (
      <div className="remove-post-container">
        <div className="remove-post-top">
          <p className="remove-post-header">Delete Comment</p>
        <div onClick={this.props.cancelRemove} className="remove-post-x-button"></div>
        </div>
        <p className="remove-post-middle">Are you sure you want to delete this comment?</p>
        <div className="remove-post-bottom">
          <div onClick={this.props.cancelRemove} className="remove-post-cancel-button">Cancel</div>
          <div onClick={this.removeComment.bind(this)} className="remove-post-delete-button">Delete</div>
        </div>
      </div>
    )
  }

  removeComment() {
    Axios.delete(`/api/comment/${this.props.comment.comment_id}/${this.props.comment.post_id}`).then(r => {
      this.props.refreshComments(r.data);
    })
  }
}
