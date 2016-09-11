import React from 'react';
import ProfileFooter from '../profile/ProfileFooter.jsx';

var imageshome = '../../../images/home/';
require('../../../stylesheets/components/home/HomeRight.scss');

export default class HomeRight extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="home-right-container">
        <div className="trending-box">
          <div className="upper-trending-header">
            <div className="upper-trending-header-left">
              <h1>TRENDING</h1>
            </div>
            <div className="upper-trending-header-right">
              <div className="trend-circle-div">
                   <img className="trend-circle" src={imageshome + 'blue-trend-circle.png'}/>
              </div>
             <img className="politics" src={imageshome + 'politics-gray-dark.png'}/>
             <img className="science" src={imageshome + 'science-gray.png'}/>
             <img className="soccer" src={imageshome + 'soccer-gray-dark.png'}/>
             <img className="movies" src={imageshome + 'movies-gray-dark.png'}/>
            </div>
          </div>
          <div className="trending-content">

          </div>

        </div>
        <ProfileFooter />
      </div>
    )
  }
}
