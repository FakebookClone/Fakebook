import React from 'react';

require('../../../stylesheets/components/global/GlobalFooter.scss');

export default class GlobalFooter extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div>
				<img src="/images/main/dark-plus.png"/>
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
            <a href="#">Ad Choices</a><img src="/images/main/footer-ads.png"/>
            <span>
              ·
            </span>
            <a href="#">Cookies</a>
            <span>
              ·
            </span>
            <a href="#">More<i className="fa fa-caret-down"></i></a>
					</p>
          <p>Facebook <i className="fa fa-copyright"></i> 2016</p>
				</div>
			</div>
		)
	}
}
