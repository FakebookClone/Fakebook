import React from 'react';

require('../../../stylesheets/components/profile/profileIntro.scss');

export default class ProfileIntro extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div>
        <img src="#" className="profile-intro-icon" />
        <h1>Intro</h1>
      </div>
    )
  }
}
