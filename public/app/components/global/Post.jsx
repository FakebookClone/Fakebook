import React from 'react';

require('../../../stylesheets/components/post/Post.scss');

export default class Posts extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="global-post-container">
        <img src={this.props.post.profile_pic} />
        <p>{this.props.post.name}</p>
        <p>{this.props.post.post_text}</p>
        <img src="broken-link" /><p>Like</p>
        <img src="broken-link" /><p>Comment</p>
        <img src="broken-link" /><p>Share</p>
        <img src={this.props.post.profile_pic} /><input placeholder="Write a comment..." />
        <img src="broken-link" />
        <img src="broken-link" />
        <p>Press Enter to post.</p>
      </div>
    )
  }
}
