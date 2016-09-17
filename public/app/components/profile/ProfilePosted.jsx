import React from 'react';
import Posts from '../global/Post/Post.jsx';
var imageshome = './images/home/';

require('../../../stylesheets/components/profile/ProfilePosted.scss');

export default class ProfilePosted extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div className="profilePostedUser">
				{this.props.posts.length === 0
					? <div className="profile-empty-div" />
					: null }

				{this.props.posts.map((value) => {
					console.log('Map this post', value);
					return (
						<Posts user={this.props.user}
						key={'post_component_' + value.post_id}
						post={value}
						updatePosted={this.props.updatePosted}
						/>
					)
				})}
			</div>

		)
	}
}
