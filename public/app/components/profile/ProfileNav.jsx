import React from 'react';

require('../../../stylesheets/components/profile/profileNav.scss');

export default class ProfileNav extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div>
        <h1>Profile Nav</h1>
        <div>
          <button>Update Info</button>
          <button>View Activity Log</button>
          <button>add ... image. Also, tooltip</button>

        </div>
        <div>
          <div>Timeline</div>
          <div>About</div>
          <div>Friends</div>
          <div>Photos</div>
          <div>More</div>
        </div>
      </div>
    )
  }
}
