import React from 'react';
import Axios from 'axios';

require('../../../stylesheets/base/Comment.scss');

export default class Comment extends React.Component {
  constructor() {
    super()
    this.state = { likes: [] }
  }

  componentWillMount() {
    Axios.get(`/api/likes/comment/${this.props.comment.comment_id}`).then( r => {
      this.setState({ likes: r.data });
    })
  }

  render() {
    console.log(this.state.likes);
    return (
      <div className="userPosted">
        <img src={this.props.comment.profile_pic} />
        <p className="postedName">{this.props.comment.name}</p>
        <p>{this.props.comment.comment_text}</p>
        <p onClick={this.likeComment.bind(this)}>Like</p>
        {this.state.likes.length !== 0
          ? <div><img src="broken-link" /><p>{this.state.likes.length}</p></div>
          : null
        }
      </div>
    )
  }

  likeComment() {
    Axios.post(`api/like/comment/${this.props.comment.comment_id}`, { profile_id: this.props.user.id }).then( r => {
      this.setState({ likes: r.data });
    })
  }
}
