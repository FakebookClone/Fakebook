import React from 'react';

require('../../../stylesheets/components/profile/ProfilePhotos.scss');

export default class ProfilePhotos extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div>
        <img src="/images/profile/green-photos.png" />
        <h1>Photos</h1>
        <p>Nothing to show</p>
      </div>
    )
  }
}
