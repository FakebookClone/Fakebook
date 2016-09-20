import React from 'react';

export default class RemoveConfirmation extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="remove-post-container">
        <div className="remove-post-top">
          <p className="remove-post-header">Delete Comment</p>
        <div className="remove-post-x-button"></div>
        </div>
        <p className="remove-post-middle">Are you sure you want to delete this comment?</p>
        <div className="remove-post-bottom">
          <div className="remove-post-cancel-button">Cancel</div>
          <div className="remove-post-delete-button">Delete</div>
        </div>
      </div>
    )
  }
}
