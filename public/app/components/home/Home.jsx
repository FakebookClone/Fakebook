import React from 'react';
import GlobalHeader from '../global/GlobalHeader.jsx';
import GlobalFooter from '../global/GlobalFooter.jsx';
import GlobalChat from '../global/GlobalChat.jsx';
import HomeLeft from './HomeLeft.jsx';
import HomeCenter from './HomeCenter.jsx';
import HomeRight from './HomeRight.jsx';
import {browserHistory} from 'react-router';

require('../../../stylesheets/components/home/Home.scss');

export default class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			user: JSON.parse(localStorage.getItem('fakebook_user')),
		}
	}

	componentWillMount() {
		if (!(this.state.user)) {
			browserHistory.push('/')
		}
	}

	render() {
		return (
			<div>
				{this.state.user
					? <div>
							<GlobalHeader user={this.state.user}/>
							<div className="home-main-content-wrapper">
								<div className="home-main-content-container">
									<HomeLeft user={this.state.user}/>
									<HomeCenter user={this.state.user}/>
									<HomeRight/>
									<div className= "false-right"></div>
								</div>
							</div>
							<div>
								<GlobalFooter />
							</div>
							<div>
								<GlobalChat />
							</div>
						</div>
					: null
				}
			</div>
		)
	}
}
