import React from 'react';
import HomePost from './HomePost.jsx';
import HomePosted from './HomePosted.jsx';

require('../../../stylesheets/components/HomeCenter.scss');

export default class HomeCenter extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <HomePost user={this.props.user} />
        <HomePosted />
      </div>
    )
  }
}
