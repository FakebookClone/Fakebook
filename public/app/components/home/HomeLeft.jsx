import React from 'react';
var imageshome = './images/home/';

require('../../../stylesheets/components/home/HomeLeft.scss');

export default class HomeLeft extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div className="home-left-column">
				<ul>
					<div className="left-div">
						<li className="leftHover"><img src={this.props.user.profile_pic}/>{this.props.user.name}</li>
						<li className="leftHover"><img src={imageshome + 'edit-profile.png'}/>Edit Profile</li>
					</div>

					<div className="left-div">
						<h4>FAVORITES</h4>
						<li className="leftHover"><img src={imageshome + 'news-feed.png'}/>News Feed</li>
						<li className="leftHover"><img src={imageshome + 'fb-welcome.png'}/>Welcome</li>
						<li className="leftHover"><img src={imageshome + 'messages.png'}/>Messages</li>
						<li className="leftHover"><img src={imageshome + 'calendar.png'}/>Events</li>
					</div>

					<div className="left-div">
						<h4>APPS</h4>
						<li className="leftHover"><img src={imageshome + 'live-video.png'}/>Live Video</li>
						<li className="leftHover"><img src={imageshome + 'games.png'}/>Games</li>
						<li className="leftHover"><img src={imageshome + 'find-friends.png'}/>Find Friends</li>
						<li className="leftHover"><img src={imageshome + 'photos.png'}/>Photos</li>
						<li className="leftHover"><img src={imageshome + 'suggest-edits.png'}/>Suggest Edits</li>
						<li className="leftHover"><img src={imageshome + 'pokes.png'}/>Pokes</li>
					</div>

					<div className="left-div">
						<h4>PAGES</h4>
						<li className="leftHover"><img src={imageshome + 'pages-feed.png'}/>Pages Feed</li>
						<li className="leftHover"><img src={imageshome + 'like-pages.png'}/>Like Pages</li>
						<li className="leftHover"><img src={imageshome + 'create-page.png'}/>Create Pages</li>
					</div>

					<div className="left-div">
						<h4>FUNDRAISERS</h4>
						<li className="leftHover"><img src={imageshome + 'create-fundraiser.png'}/>Create Fundraiser</li>
						<li className="leftHover"><img src={imageshome + 'find-fundraisers.png'}/>Find Fundraiser</li>
					</div>

					<div className="left-div">
						<h4>GROUPS</h4>
						<li className="leftHover"><img src={imageshome + 'discover-groups.png'}/>Discover Groups</li>
						<li className="leftHover"><img src={imageshome + 'create-group.png'}/>Create Groups</li>
					</div>

					<div className="left-div">
						<h4>EVENTS</h4>
						<li className="leftHover"><img src={imageshome + 'create-event.png'}/>Create Event</li>
					</div>

				</ul>
			</div>
		)
	}
}
