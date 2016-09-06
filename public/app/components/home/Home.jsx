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
    }
  }

  render() {
    return (
      <div>
        <GlobalHeader />
        <div className="home-main-content-wrapper">
          <HomeLeft />
          <HomeCenter />
          <HomeRight />
        </div>
      </div>
    )
  }
}
