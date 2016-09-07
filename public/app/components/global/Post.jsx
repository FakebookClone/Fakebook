import React from 'react';

export default class Posts extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="home-posted-post-container">
        <img src={this.props.post.profile_pic} />
        <p>{this.props.post.name}</p>
        <p>{this.props.post.post_text}</p>
      </div>
    )
  }
}
