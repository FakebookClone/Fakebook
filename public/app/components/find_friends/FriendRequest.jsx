import React from 'react';
import Axios from 'axios';

export default class FriendRequest extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="friend-request-container">
        <div className="friend-request-top">
          <p>Respond to Your Friend Request</p>
          <a href="#">View Send Requests</a>
        </div>
        <div className="friend-request-bottom">
          <img className="friend-request-sender-picture" src={this.props.friendRequest.profile_pic} />
            <p className="friend-request-sender-name">{this.props.friendRequest.name}</p>
            <div className="friend-request-button-container">
              <button className="confirm-button">Confirm</button>
              <button onClick={this.deleteFriendRequest.bind(this)} className="delete-request-button">Delete Request</button>
            </div>
        </div>
      </div>
    )
  }

  deleteFriendRequest() {
    Axios.post('/api/friend-request', { request_sender_id: this.props.friendRequest.request_sender_id, requested_id: this.props.friendRequest.requested_id }).then(r => {
      Axios.get(`/api/friend-requests/${this.props.user.userID}`).then(r => {
        this.props.updateFriendRequests(r.data);
      })
    })
  }
}
