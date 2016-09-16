import React from 'react';

export default class DeleteConfirmation extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="delete-confirmation-container">
          <div className="delete-confirmation-top">
            <p className="delete-confirmation-header">Delete Post</p>
            <div onClick={this.props.cancelDelete} className="delete-confirmation-x-button"></div>
          </div>
          <div className="delete-confirmation-middle">
            <p>This post will be deleted and you won't be able to find it anymore.<br />You can also edit this post, if you just want to change something.</p>
          </div>
          <div className="delete-confirmation-bottom">
            <button onClick={this.props.cancelDelete} className="delete-confirmation-cancel-button">Cancel</button>
            <button onClick={this.props.deletePostConfirmed} className="delete-confirmation-delete-button">Delete Post</button>
            <button onClick={this.props.editPost} className="delete-confirmation-edit-button">Edit Post</button>
          </div>
        </div>
    )
  }
}
