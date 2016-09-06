import React from 'react';
import GlobalHeader from '../global/GlobalHeader.jsx';
import HomeLeft from './HomeLeft.jsx';
import HomeCenter from './HomeCenter.jsx';
import HomeRight from './HomeRight.jsx';

require('../../../stylesheets/components/Home.scss');

export default class Home extends React.Component {
  constructor() {
    super()
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
