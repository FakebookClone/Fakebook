import React from 'react';

require('../../../stylesheets/components/profile/ProfileFooter.scss');

export default class ProfileFooter extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div>
				<img src="/images/profile/dark-plus.png"/>
				<div>
					<p>English (US)<span>
							·
						</span>
						<a href="#">Español</a>
						<span>
							·
						</span>
						<a href="#">Português (Brasil)</a>
						<span>
							·
						</span>
						<a href="#">Français (France)</a>
            <span>
							·
						</span>
						<a href="#">Deutsch</a>
					</p>
				</div>
				<div>
					<p>
						<a href="#">Privacy</a>
						<span>
							·
						</span>
            <a href="#">Terms</a>
            <span>
              ·
            </span>
            <a href="#">Advertising</a>
            <span>
              ·
            </span>
            <a href="#">Ad Choices</a><img src="/images/profile/footer-ads.png"/>
            <span>
              ·
            </span>
            <a href="#">Cookies</a>
            <span>
              ·
            </span>
            <a href="#">More</a><img src="/images/profile/gray-down-arrow-small.png"/>
					</p>
          <p>Facebook <i className="fa fa-copyright"></i> 2016</p>
				</div>
			</div>
		)
	}
}
