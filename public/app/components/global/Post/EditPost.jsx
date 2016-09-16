import React from 'react';

var imageshome = '/images/home/';
var images = '/images/main/';

export default class EditPost extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="edit-post-container">
          <div className="edit-post-top">
            <p className="edit-post-header">Edit Post</p>
          <div onClick={this.props.cancelEdit} className="edit-post-x-button"></div>
          </div>
          <div className="edit-post-middle">
            <div className="post-container-middle">
              <div className="imgStatusDiv">
                <img src={this.props.user.profile_pic}/>
              </div>
              <div className="inputStatusDiv">
                <textarea placeholder="What's on your mind?" className="home-post-textarea" onChange={this.props.editPostCatcher} value={this.props.editPostText} />
                  <div className="home-post-image-upload-container">
                    {this.props.post.post_image
                      ? <img className="home-post-image-upload" src={this.props.post.post_image} />
                      : null
                    }
                  </div>
              </div>
            </div>

            <div className="post-container-bottom">

              <div className="lower-post-button-container">
                <button className="fb-bttn"><img src={images + 'friendsbttn.png'}/></button>
                <button className="post-bttn" onClick={this.props.editPostConfirmed}>Post</button>
              </div>

            </div>
          </div>
        </div>
    )
  }
}
