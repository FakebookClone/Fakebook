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
			<div>
				<div>
					<h1>Respond to Your Friend Request</h1>
					<a href="#">View Sent Requests</a>
				</div>
				<div>
					Friend Request Info Here
				</div>
				<div>
					<button>Confirm</button>
					<button>Delete Request</button>
				</div>
			</div>
		)
	}
}
