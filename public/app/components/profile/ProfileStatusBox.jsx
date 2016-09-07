import React from 'react';

require('../../../stylesheets/components/profile/ProfileStatusBox.scss');

export default class ProfileStatusBox extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div>
        <h1>Use the same one from the home page</h1>
        <i className="fa fa-angle-down gray"></i>
      </div>
    )
  }
}
