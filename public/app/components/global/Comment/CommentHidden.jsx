import React from 'react';
import Axios from 'axios';

export default class CommentHidden extends React.Component {
  constructor() {
    super();
    this.state = { user: {} }
  }

  componentWillMount() {
    Axios.get(`/api/profile/${this.props.comment.profile_id}`).then(r => {
      console.log(r.data);
      this.setState({ user: r.data[0] });
    })
  }

  render() {
    return (
      <div className="comment-hidden-wrapper">
        <div className="user-inform-hidden-container">
          <p>This comment has been hidden</p>
          <ul>
            <li onClick={this.props.toggleHideComment}>Unhide</li>
            <li> · </li>
            <li> Report </li>
            <li> · </li>
            <li> Block {this.state.user.first_name} </li>
            <li> · </li>
            <li> Give {this.state.user.first_name} Feedback </li>
          </ul>
        </div>
      </div>
    )
  }
}
