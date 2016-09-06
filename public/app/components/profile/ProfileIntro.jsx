import React from 'react';

require('../../../stylesheets/components/profile/ProfileIntro.scss');

export default class ProfileIntro extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div>
        <img src="../../../images/profile/profile-sprite1.png"  />
        <div className="profile-intro-icon"></div>
        <h1>Intro</h1>
      </div>
    )
  }
}
