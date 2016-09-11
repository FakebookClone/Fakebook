import React from 'react';

require('../../../stylesheets/components/home/HomeFooter.scss');

export default class HomeFooter extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div className="home-footer-wrapper">

				<div className="home-footer-top-section">

					<div>
						<div className="languages">
							<p className="gray-text">English (US)
								<span>&nbsp;·&nbsp;</span>
								<a href="#">Español</a>
								<span>&nbsp;·&nbsp;</span>
								<a href="#">Português (Brasil)</a>
								<span>&nbsp;·</span><br />
								<a href="#">Français (France)</a>
								<span>&nbsp;·&nbsp;</span>
								<a href="#">Deutsch</a>
							</p>
						</div>
					</div>
					<div className="plus-box-wrapper">
						<div className="footer-plus-box">
							<img src="/images/main/gray-plus.png"/>
						</div>
					</div>

				</div>

				<div className="home-footer-bottom-section">

					<div>
						<p className="gray-text">
							<a href="#">Privacy</a>
							<span>&nbsp;·&nbsp;</span>
							<a href="#">Terms</a>
							<span>&nbsp;·&nbsp;</span>
							<a href="#">Advertising</a>
							<span>&nbsp;·&nbsp;</span>
							<a href="#">Ad Choices</a><img src="/images/main/footer-ads.png"/>
							<span>&nbsp;·&nbsp;</span>
							<a href="#">Cookies</a>
							<span><br />·&nbsp;</span>
							<a href="#">More</a>&nbsp;
							<img className="gray-carat-down" src="/images/main/small-gray-down-arrow.png" />
						</p>
						<p className="gray-text">Facebook&nbsp;
							<i className="fa fa-copyright"></i>
							&nbsp;2016</p>
					</div>

				</div>

			</div>
		)
	}
}
