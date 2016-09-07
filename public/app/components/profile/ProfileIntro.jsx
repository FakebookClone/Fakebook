import React from 'react';

require('../../../stylesheets/components/profile/ProfileIntro.scss');

export default class ProfileIntro extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div>
        <img src="/images/profile/blue-plus.png" />
        <img src="/images/profile/intro-globe.png" />
        <img src="/images/profile/add-photo.png" />
        <h1>Intro</h1>
      </div>
    )
  }
}
