import React from 'react';
import GlobalHeader from '../global/GlobalHeader.jsx';
import GlobalChat from '../global/GlobalChat.jsx';

require('../../../stylesheets/components/find_friends/FindFriends.scss');

export default class FindFriends extends React.Component {
	constructor() {
		super()
		this.state = {
			user: null
		}
	}
	componentWillMount() {
		this.setState({
			user: JSON.parse(localStorage.getItem('fakebook_user'))
		});
	}
	render() {
		return (
			<div>
				<GlobalHeader user={this.state.user} />
				  <div className="main-wrapper">
						<div className="respond-to-your-friend-request">
							<div className="top-left-text-and-link">
								<p>Respond to Your Friend Request</p>
								<a href="#">View Send Requests</a>
							</div>
							<div className="james-image">
							  <img src = "../../../images/find_friends/james.jpg"></img>
							</div>
							<div className="text-about-james">
								<a href="#">James Lemire</a>
								<img src="../../../images/find_friends/grad_cap.png"></img>
								<p>Atlantic High School</p>
								<p>Friends with Michael Lecke.</p>
							</div>
							<div className="wrapper-for-right-of-request-box">
							  <div className="wrapper-for-confirm-button">
								  <button className="confirm-button">Confirm</button>
							  </div>
							  <div className="wrapper-for-delete-request-button">
								  <button className="delete-request-button">Delete Request</button>
							  </div>
							</div>
						</div>
					  <div className="people-you-may-know">

						</div>
						<div className="add-personal-contacts">

						</div>
						<div className="search-for-friends">

						</div>
					</div>
			</div>
		)
	}
}
