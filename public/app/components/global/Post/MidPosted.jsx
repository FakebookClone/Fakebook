import React from 'react';

var imageshome = '/images/home/';
var images = '/images/main/';

export default class MidPosted extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="mid-posted-icon-div">
        <div className="likePost" onClick={this.props.likePost}>
          {this.props.iLiked
            ? <img src={imageshome + 'blue-like.png'}/>
            : <img src={imageshome + 'gray-like.png'}/>
          }
          {this.props.iLiked
            ? <p className="blueLikes">Like</p>
            : <p>Like</p>
          }
        </div>

        <div className="commentPost">
          <img src={imageshome + 'gray-comment-small.png'}/>
          <p>Comment</p>
        </div>

        <div className="sharePost">
          <img id="likeImg" src={imageshome + 'gray-share-small.png'}/>
          <p>Share</p>
        </div>
      </div>
    )
  }
}
