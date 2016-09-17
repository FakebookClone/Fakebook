import React from 'react';

export default class TopPosted extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log('Mapped post', this.props.post);
    return (
      <div className="upper-posted-div">
        <div className="user-profile-posted-div">
          <img src={this.props.post.profile_pic}/>
          <a href="#"><p>{this.props.post.name}</p></a>
        </div>

        <div className="posted-text-container">
          <p className="posted-text">{this.props.post.post_text}</p>
        </div>

        {this.props.post.post_image
          ?	<div className="posted-image-container">
              <img className="posted-image" src={this.props.post.post_image} />
            </div>
          : null
        }
      </div>
    )
  }
}
