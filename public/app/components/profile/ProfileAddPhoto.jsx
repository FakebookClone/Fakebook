import React from 'react';

require('../../../stylesheets/components/profile/ProfileAddPhoto.scss');

export default class ProfilePhoto extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div>
      <img src="/images/profile/gray-camera.png" />
        <p>Add Photo</p>
      </div>
    )
  }
}
