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

					<div className="trending-div">
						<div className="trending-arrow">
							<img src={imageshome + 'blue-trend-arrow.png'}/>
						</div>
						<div className="trending-wrapper">
							<div className="trending-text-container">
								<a href="#" className="trending-text-div">Real Salt Lake</a>
								<p>40<span>k </span>
									people talking about this</p>
							</div>
							<span className="x-false-delete-container">
								<div className="x-false-delete-img"></div>
							</span>
						</div>
					</div>

					<div className="trending-div">
						<div className="trending-arrow">
							<img src={imageshome + 'blue-trend-arrow.png'}/>
						</div>
						<div className="trending-wrapper">
							<div className="trending-text-container">
								<a href="#" className="trending-text-div">Rocket League</a>
								<p>100<span>b </span>
									people talking about this</p>
							</div>
							<span className="x-false-delete-container">
								<div className="x-false-delete-img"></div>
							</span>
						</div>
					</div>

					<div className="trending-div">
						<div className="trending-arrow">
							<img src={imageshome + 'blue-trend-arrow.png'}/>
						</div>
            <div className="trending-wrapper">
						<div className="trending-text-container">
							<a href="#" className="trending-text-div">Philidelphia Eagles</a>
							<p>22<span>k </span>
								people talking about this</p>
						</div>
						<span className="x-false-delete-container">
							<div className="x-false-delete-img"></div>
						</span>
					</div>
        </div>

        <div className="trending-div">
          <div className="trending-arrow">
            <img src={imageshome + 'blue-trend-arrow.png'}/>
          </div>
          <div className="trending-wrapper">
          <div className="trending-text-container">
            <a href="#" className="trending-text-div">Brandon Unbedacht</a>
            <p>922<span>m </span>
              people talking about this</p>
          </div>
          <span className="x-false-delete-container">
            <div className="x-false-delete-img"></div>
          </span>
        </div>
      </div>

				<div className="false-see-more">
					<img src={imageshome + 'trends-gray-arrow.png'}/>
					<a href="#">See More</a>
				</div>
			</div>
      <div className="suggested-pages-header-div">
        <h1>SUGGESTED PAGES</h1>
        <a href="#">See All</a>
      </div>
      <div className="suggested-image-div"></div>
      <div id="suggested-name">DevMountain &nbsp;<span></span></div>
      <div id="suggested-type">Dev & BootCamp · 92,680 likes</div>
      <div className="suggested-false-like-bttn">
        <div id="suggested-false-like-img"></div>
        <p id="suggested-false-like-text">Like Page</p>
      </div>
    </div> < HomeFooter /> </div>)
	}
}
