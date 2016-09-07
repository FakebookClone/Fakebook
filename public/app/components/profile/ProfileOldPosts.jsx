import React from 'react';

require('../../../stylesheets/components/profile/ProfileOldPosts.scss');

export default class ProfileOldPosts extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div>
        <img src="/images/profile/posts-from-1990.png"/>
        <p>Posts from 1990</p>
      </div>
    )
  }
}
