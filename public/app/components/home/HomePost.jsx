import React from 'react';
import Axios from 'axios';

export default class HomePost extends React.Component {
  constructor() {
    super();
    this.state = { post: "" };
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
          <input onChange={this.postCatcher.bind(this)} value={this.state.post} placeholder="What's on your mind?" />
        </div>
        <div className="post-container-bottom">
          <img src="#" />
          <img src="#" />
          <img src="#" />
          <button><img src="#" />Friends</button>
          <button onClick={this.post.bind(this)}>Post</button>
        </div>
      </div>
    )
  }

  postCatcher(e) {
    this.setState({ post: e.target.value });
  }

  post() {
    Axios.get(`/api/profile/${this.props.user.id}`).then( r => {
      Axios.post(`/api/post/${this.props.user.id}`, {post_text: this.state.post, post_image: null, profile_picture: r.data.profile_pic}).then( r => {
        this.props.updatePosted(r.data);
      })
    })
  }
}
