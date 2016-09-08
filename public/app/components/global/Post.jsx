import React from 'react';

require('../../../stylesheets/components/global/Post.scss');

export default class Posts extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div className="global-post-container">

				<div className="upper-posted-div">
					<div className="user-profile-posted-div">
						<img src={this.props.post.profile_pic}/>
						<p>{this.props.post.name}</p>
					</div>
					<p className="posted-text">{this.props.post.post_text}</p>
				</div>
				<div className="mid-posted-icon-div">
					<img src="broken-link"/>
					<p>Like</p>
					<img src="broken-link"/>
					<p>Comment</p>
					<img src="broken-link"/>
					<p>Share</p>
				</div>
        
				<img src={this.props.post.profile_pic}/><input placeholder="Write a comment..."/>
				<img src="broken-link"/>
				<img src="broken-link"/>
				<p>Press Enter to post.</p>
			</div>
		)
	}
}
