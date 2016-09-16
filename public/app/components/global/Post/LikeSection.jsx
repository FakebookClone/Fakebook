import React from 'react';

var imageshome = '/images/home/';
var images = '/images/main/';

export default class LikeSection extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="likesDiv">
        <img src={imageshome + 'blue-like.png'}/>
        <p>{this.props.likes.length}</p>
      </div>
    )
  }
}
