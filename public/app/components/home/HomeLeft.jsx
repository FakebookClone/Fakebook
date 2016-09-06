import React from 'react';

export default class HomeLeft extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="home-left-column">
        <ul>
          <li><img src={this.props.user.picture.data.url} />{this.props.user.first_name}</li>
          <li><img src="#" />Edit Profile</li>
          <h4>FAVORITES</h4>
          <li><img src="#" />News Feed</li>
          <li><img src="#" />Welcome</li>
          <li><img src="#" />Messages</li>
          <li><img src="#" />Events</li>
          <h4>APPS</h4>
          <li><img src="#" />Live Video</li>
          <li><img src="#" />Games</li>
          <li><img src="#" />Find Friends</li>
          <li><img src="#" />Photos</li>
          <li><img src="#" />Suggest Edits</li>
          <li><img src="#" />Pokes</li>
          <h4>PAGES</h4>
          <li><img src="#" />Pages Feed</li>
          <li><img src="#" />Like Pages</li>
          <li><img src="#" />Create Pages</li>
          <h4>FUNDRAISERS</h4>
          <li><img src="#" />Create Fundraiser</li>
          <li><img src="#" />Find Fundraiser</li>
          <h4>GROUPS</h4>
          <li><img src="#" />Discover Groups</li>
          <li><img src="#" />Create Groups</li>
          <h4>EVENTS</h4>
          <li><img src="#" />Create Event</li>
        </ul>
      </div>
    )
  }
}
