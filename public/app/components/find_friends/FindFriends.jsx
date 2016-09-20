import React from 'react';
import Axios from 'axios';
import GlobalHeader from '../global/GlobalHeader.jsx';
import GlobalChat from '../global/GlobalChat.jsx';
import FriendRequest from './FriendRequest.jsx';

require('../../../stylesheets/components/find_friends/FindFriends.scss');

export default class FindFriends extends React.Component {
	constructor() {
		super()
		this.state = { user: JSON.parse(localStorage.getItem('fakebook_user')), friend_requests: [] }
	}

	componentWillMount() {
		Axios.get(`/api/profile/${this.state.user.userID}`).then(r => {
			this.setState({ user: r.data[0] });
		})
		Axios.get(`/api/friend-requests/${this.state.user.userID}`).then(r => {
			this.setState({ friend_requests: r.data });
		})
	}

	render() {
		return (
			<div>
				<GlobalHeader user={this.state.user}/>
				<div className="find-friends-main-wrapper">
					<div className="find-friends-main-content-wrapper">
					<div className="find-friends-left-wrapper">
					{this.state.friend_requests.length === 0
						? <div className="no-friend-requests-container">
						<div className="no-friend-request-top">
						<p>No New Friend Requests</p>
						<a href="#">View Send Requests</a>
						</div>
						</div>
						: null
					}

					{this.state.friend_requests.map( (friend_request, i) => {
						return (
							<FriendRequest user={this.state.user} key={'friend_request_' + i} friendRequest={friend_request} updateFriendRequests={this.updateFriendRequests.bind(this)} />
						)
					})}
					
					<div>
					<img src="/images/find_friends/find-friends-list.png" className="people-you-may-know-img" />
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

					</div>
					<div className="find-friends-right-wrapper">
					<div>
					<div className="add-personal-contacts-box">
					{/* <img src="../../../images/find_friends/add-personal-contacts.png"/> */}
					<div className="personal-contacts-top-section">
					<h1>Add Personal Contacts</h1>
					</div>
					<div className="personal-contacts-lower-section">
					<div className="personal-contacts-images">
					<div className="personal-contacts-gmail">
					<img src="../../../images/find_friends/find-friends-gmail.png"/>
					</div>
					<div className="personal-contacts-outlook">
					<img src="../../../images/find_friends/find-friends-outlook.png"/>
					</div>
					<div className="personal-contacts-yahoo">
					<img src="../../../images/find_friends/find-friends-yahoo1.png"/>
					</div>
					<div className="personal-contacts-aol">
					<img src="../../../images/find_friends/find-friends-aol1.png"/>
					</div>
					<div className="personal-contacts-comcast">
					<img src="../../../images/find_friends/find-friends-comcast.png"/>
					</div>
					<div className="personal-contacts-email">
					<img src="../../../images/find_friends/find-friends-email.png"/>
					</div>
					</div>
					<p>Choose how you communicate with friends. <a href="#">See how it works</a> or <a href="#">manage imported contacts</a>.</p>
					<button>Find Friends</button>
					</div>
					</div>
					<div className="search-for-friends-box">
					<div className="search-for-friends-upper-section">
					<h1>Search for Friends</h1>
					</div>
					<div className="search-for-friends-lower-section">
					<p>Find friends from different parts of your life</p>
					<div className="search-for-friends-form">
					<h4>Name</h4>
					<input placeholder="Search for someone" />
					<h4>Hometown</h4>
					<input placeholder="Enter a city" />
					<h4>Current City</h4>
					<input placeholder="Enter another city" />
					<h4>High School</h4>
					<input placeholder="Enter a high school" />
					<h4>College or University</h4>
					<input placeholder="Enter a college" />
					<h4>Employer</h4>
					<input placeholder="Enter another employer" />
					<h4>Graduate School</h4>
					<input placeholder="Enter a college" />
					</div>
					</div>
					{/* <img src="../../../images/find_friends/search-for-friends.png"/> */}
					</div>
					</div>
					</div>

					</div>
				</div>
			</div>
		)
	}

	updateFriendRequests(friendRequests) {
		this.setState({ friend_requests: friendRequests });
	}
}
