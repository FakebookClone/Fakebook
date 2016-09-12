import React from 'react';
import GlobalHeader from '../global/GlobalHeader.jsx';
import GlobalChat from '../global/GlobalChat.jsx';

require('../../../stylesheets/components/find_friends/FindFriends.scss');

export default class FindFriends extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div className="main-wrapper">
				<div className="main-column-wrapper">
					<div className="wrapper-for-respond-to-request-box">
						<div className="wrapper-for-top-of-request-box">
								<h1>Respond to Your Friend Request</h1>
							<div className="wrapper-for-link-near-top">
								<a href="#">View Sent Requests</a>
							</div>
						</div>
						<div className="wrapper-for-bottom-of-request-box">
							<img src="../../../images/find_friends/james.jpg"></img>
							<div className="wrapper-for-info-about-requesting-person">
							  <a href="#">James Lemire</a> <br />
								<img src="../../../images/find_friends/grad_cap.png"></img>
								<p>Atlantic High School</p>
								<p>Craig Walker is a mutual friend.</p>
							</div>
						</div>
						<div className="wrapper-for-confirm-or-delete-of-requesting-person">
							<button className="confirm-button">Confirm</button>
							<button className="delete-request-button">Delete Request</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
	}
