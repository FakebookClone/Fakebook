import React from 'react';
import GlobalHeader from '../global/GlobalHeader.jsx';
import HomeLeft from './HomeLeft.jsx';

var images = './images/home/';
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
          <div className="home-center-column">

          </div>

          <div className="home-right-column">

          </div>
        </div>
      </div>
    )
  }

  toggleDimmer() {
    this.setState({ dimmerVisible: !this.state.dimmerVisible });
  }
}
