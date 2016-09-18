import React from 'react';
import { Link } from 'react-router';

export default class TopPosted extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="upper-posted-div">
        <div className="user-profile-posted-div">
          <img src={this.props.post.profile_pic}/>
          <Link to={`/profile/${this.props.post.profile_id}`}><p>{this.props.post.name}</p></Link>
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
