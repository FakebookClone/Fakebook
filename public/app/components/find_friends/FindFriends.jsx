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
				<GlobalHeader user={this.state.user}/>
				<div className="find-friends-main-wrapper">
					<div className="find-friends-main-content-wrapper">
						<div className="respond-to-your-friend-request-box">
							<div className="left-side-of-friend-request-box">
								<div className="respond-to-your-friend-request-top-left-text-and-link">
									<p>Respond to Your Friend Request</p>
									<a href="#">View Send Requests</a>
								</div>
								<div className="wrapper-for-image-and-about-person">
									<div className="respond-to-your-friend-request-james-image">
										<img src="../../../images/find_friends/james.jpg"/>
									</div>
									<div className="respond-to-your-friend-request-text-about-james">
										<a href="#">James Lemire</a>
										<img src="../../../images/find_friends/grad_cap.png"/>
										<p>Atlantic High School</p>
										<p>Friends with Michael Lecke.</p>
									</div>
								</div>
							</div>
							<div className="wrapper-for-right-side-of-request-box">
								<div className="wrapper-for-confirm-button">
									<button className="confirm-button">Confirm</button>
								</div>
								<div className="wrapper-for-delete-request-button">
									<button className="delete-request-button">Delete Request</button>
								</div>
							</div>
						</div>
						{/* <div className="people-you-may-know-boxes">
              <div className="person-you-may-know-box">
								<div className="person-you-may-know-box-top-left"></div>
								<div className="image-of-person-you-may-know">
									<img src="../../../images/find_friends/james.jpg" />
								</div>
								<div className="about-person-you-may-know">
									<a href="#">James Lemire</a>
									<img src="../../../images/find_friends/grad_cap.png" />
									<p>Atlantic High School</p>
									<p>Friends with Michael Lecke.</p>
								</div>
								<div className="wrapper-for-right-side-of-person-you-know-box">
								</div>
								<div className="add-friend-button-wrapper">
									<button className="add-friend-button"><img src="../../../images/find_friends/add-friends-white_360.png" />Add Friend</button>
								</div>
								<div className="remove-button-wrapper">
									<button>Remove</button>
								</div>
							</div>
						</div> */}
						<div className="wrapper-for-column-on-the-right">
							<div className="add-personal-contacts-box">
								<img src="../../../images/find_friends/add-personal-contacts.png"/>
							</div>
							<div className="search-for-friends-box">
								<img src="../../../images/find_friends/search-for-friends.png"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
