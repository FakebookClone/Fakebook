import React from 'react';

require('../../../stylesheets/components/profile/ProfileNav.scss');

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
          <button><img src="/images/profile/gray-elipsis.png" /></button>

        </div>
        <div>
          <div>Timeline</div>
          <img src="/images/profile/select-indicator-arrow.png" />
          <div>About</div>
          <div>Friends</div>
          <div>Photos</div>
          <div>More<i className="fa fa-caret-down"></i></div>
        </div>
      </div>
    )
  }
}
