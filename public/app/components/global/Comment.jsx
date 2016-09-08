import React from 'react';

export default class Comment extends React.Component {
  constructor() {
    super()
    this.state = { likes: [] }
  }

  render() {
    console.log(this.props.comment);
    return (
      <div>
        <img src={this.props.comment.profile_pic} />
        <p>{this.props.comment.name}</p>
        <p>{this.props.comment.comment_text}</p>
        <p onClick={this.likeComment}>Like</p>
        {this.state.likes.length !== 0
          ? <div><img src="broken-link" /><p>{this.state.likes.length}</p></div>
          : null
        }
      </div>
    )
  }
}
