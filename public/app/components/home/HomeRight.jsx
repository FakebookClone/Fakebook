import React from 'react';

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
        <img className="home-right-middle" src={images + 'home-right-container-2.png'} />
      </div>
    )
  }
}
