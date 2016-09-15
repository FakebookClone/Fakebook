import React from 'react';

export default class PostEditButton extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="post-edit-button">
        {this.state.myPost
          ? <ul className="post-menu">
              <li onClick={this.deletePost.bind(this)} className="post-menu-item">Delete</li>
              <li className="post-menu-item">Turn off translations</li>
              <div className="post-menu-seperator"></div>
              <li className="post-menu-item">Save Post</li>
              <li onClick={this.editPost.bind(this)} className="post-menu-item">Edit Post</li>
              <li className="post-menu-item">Turn off notifications for this post</li>
            </ul>
          :	<ul className="post-menu-small">
              <li className="post-menu-item">Save Post</li>
              <div className="post-menu-seperator"></div>
              <li className="post-menu-item">Turn on notifications for this item</li>
              <div className="post-menu-seperator"></div>
              <li className="post-menu-item">Report Post</li>
           </ul>
        }
      </div>
    )
  }
}
