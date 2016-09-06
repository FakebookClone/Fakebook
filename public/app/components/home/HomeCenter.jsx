import React from 'react';

require('../../../stylesheets/components/HomeCenter.scss');

export default class HomeCenter extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <div className="home-center-post-container">
          <div className="post-container-top">
            <img src="#" /><p>Photo/Video</p>
            <img src="#" /><p>Photo Album</p>
          </div>
          <div className="post-container-middle">
            <img src="#" />
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

        <div className="home-center-posted-container">
          <img src="#" />
          <p>No posts to show</p>
          <button>Find Friends</button>
        </div>
      </div>
    )
  }
}
