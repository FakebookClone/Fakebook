import React from 'react';

export default class HomePost extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="home-center-post-container">
        <div className="post-container-top">
          <img src="#" /><p>Photo/Video</p>
          <img src="#" /><p>Photo Album</p>
        </div>
        <div className="post-container-middle">
          <img src={this.props.user.picture.data.url} />
          <input placeholder="What's on your mind?" />
        </div>
        <div className="post-container-bottom">
          <img src="#" />
          <img src="#" />
          <img src="#" />
          <button><img src="#" />Friends</button>
          <button>Post</button>
        </div>
      </div>
    )
  }
}
