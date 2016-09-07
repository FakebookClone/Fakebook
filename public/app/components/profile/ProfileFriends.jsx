import React from 'react';

require('../../../stylesheets/components/profile/ProfileFriends.scss');

export default class ProfileFriends extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div>
        <img src="/images/profile/red-friends.png" />
        <h1>Friends</h1>

      </div>
    )
  }
}
