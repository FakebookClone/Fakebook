import React from 'react';

require('../../../stylesheets/components/profile/ProfileCover.scss');

export default class ProfileCover extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div>
        <h1>Profile Name</h1>
        <img src="/images/profile/white-camera.png" />
      </div>
    )
  }
}
