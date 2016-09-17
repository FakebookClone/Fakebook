import React from 'react';

export default class CommentProfilePicture extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="user-comment-profile-picture">
        <img src={this.props.comment.profile_pic}/>
      </div>
    )
  }
}
