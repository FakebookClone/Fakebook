import React from 'react';

export default class LowPosted extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="lower-posted-div">
        <div className="comment-input-section">
          <div className="comment-profile-pic">
            <img src={this.props.user.profile_pic}/>
          </div>

          <div className="input-name" onClick={this.props.focusComment}>
            <input className="new-comment-input" onChange={this.props.commentCatcher} placeholder="Write a comment..." value={this.props.comment} onKeyDown={this.props.postComment}/>

            <div className="camera-img tooltip">
              <span className="tooltiptext">Attach a Photo or Video</span>
            </div>

            <div className="smiley-2 tooltip">
              <span className="tooltiptext">Post a sticker</span>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
