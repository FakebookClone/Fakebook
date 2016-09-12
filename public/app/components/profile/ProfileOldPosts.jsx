import React from 'react';

require('../../../stylesheets/components/profile/ProfileOldPosts.scss');

export default class ProfileOldPosts extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div className="main-old-posts-wrapper">
				<div>
					<img src="/images/profile/posts-from-1990.png"/>
				</div>
				<div>
					<p className="posts-from-text">Posts from 1990</p>
				</div>
			</div>
		)
	}
}
