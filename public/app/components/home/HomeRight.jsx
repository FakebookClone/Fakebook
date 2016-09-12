import React from 'react';
import HomeFooter from '../home/HomeFooter.jsx';

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
            <div className="real-trending">
              <img src={imageshome + 'blue-trend-arrow.png'}/>
              <div className="RSL-text-container">
                <a href="#" className="RSL-text" >Real Salt Lake</a>
                <p>40<span>k</span> people talking about this</p>
              </div>
            </div>
            <div className="RL-trending">
              <img src={imageshome + 'blue-trend-arrow.png'}/>
              <div>
                <a href="#">Rocket League</a>
                <p>800<span>k</span> people talking about this</p>
              </div>
            </div>
            <div className="Eagles-trending">
              <img src={imageshome + 'blue-trend-arrow.png'}/>
              <div>
                <a href="#">Philidelphia Eagles</a>
                <p className="noHover">22<span>k</span> people talking about this</p>
              </div>
            </div>
            <div className="Brandon-trending">
              <img src={imageshome + 'blue-trend-arrow.png'}/>
              <div>
                <a href="#">Brandon Unbedacht</a>
                <p>920<span>m</span> people talking about this</p>
              </div>
            </div>
            <div className= "false-see-more">
                <img src={imageshome + 'trends-gray-arrow.png'}/>
                  <a href="#">See More</a>
            </div>
          </div>

        </div>
        <HomeFooter />
      </div>
    )
  }
}
