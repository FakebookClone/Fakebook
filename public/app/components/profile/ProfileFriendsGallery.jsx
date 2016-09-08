import React from 'react';

require('../../../stylesheets/components/profile/ProfileFriendsGallery.scss');

export default class ProfileFriendsGallery extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div>
				<div>
					<h1><img src="/images/profile/photos_24.png"/>Friends</h1>
				</div>
				<div>
					<button><span className="red-counter">1</span>Friend Requests</button>
					<button><img src="/images/profile/gray-plus.png"/>Find Friends</button>
					<button>Edit Privacy</button>
				</div>
				<div>
					<h1 className="gray">No friends to Show (default view)</h1>
				</div>
			</div>
		)
	}
}
