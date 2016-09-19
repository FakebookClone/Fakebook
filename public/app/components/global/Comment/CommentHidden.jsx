import React from 'react';

export default class CommentHidden extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="comment-hidden-wrapper">
        <div className="user-comment-container">
          <p>This comment has been hidden</p>
          <ul>
            <li>Unhide</li>
            <li>·</li>
            <li>Report</li>
            <li>·</li>
            <li>Give PROFILE_NAME_HERE Feedback</li>
          </ul>
        </div>
      </div>
    )
  }
}
