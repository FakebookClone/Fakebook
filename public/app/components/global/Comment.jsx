import React from 'react';

export default class Comment extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <p>{this.props.comment.comment_text}</p>
      </div>
    )
  }
}
