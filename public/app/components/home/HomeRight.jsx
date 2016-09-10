import React from 'react';
import GlobalFooter from '../global/GlobalFooter.jsx';

var images = '../../../images/home/';
require('../../../stylesheets/components/home/HomeRight.scss');

export default class HomeRight extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="home-right-container">
        <img src={images + 'home-right-container.png'} />
        <GlobalFooter />
      </div>
    )
  }
}
