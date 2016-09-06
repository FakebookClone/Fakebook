import React from 'react';
import GlobalHeader from '../global/GlobalHeader.jsx';
import HomeLeft from './HomeLeft.jsx';
import HomeCenter from './HomeCenter.jsx';
import HomeRight from './HomeRight.jsx';
import { browserHistory } from 'react-router';

require('../../../stylesheets/components/Home.scss');

export default class Home extends React.Component {
  constructor() {
    super()
    if( !(localStorage.getItem('fakebook_user')) ) {
      browserHistory.push('/');
    } else {
      this.state = { user: JSON.parse(localStorage.getItem('fakebook_user')) }
    }
  }

  render() {
    return (
      <div>
        <GlobalHeader user={this.state.user} />
        <div className="home-main-content-wrapper">
          <HomeLeft user={this.state.user} />
          <HomeCenter />
          <HomeRight />
        </div>
      </div>
    )
  }
}
