import React from 'react';
import GlobalHeader from '../global/GlobalHeader.jsx';

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
          <div className="home-left-column">

          </div>

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
