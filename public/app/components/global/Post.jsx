import React from 'react';
import Axios from 'axios';

require('../../../stylesheets/components/global/Post.scss');

export default class Posts extends React.Component {
<<<<<<< HEAD
constructor() {
	super()
	this.state = { comments: [] };
}

componentWillMount() {
	Axios.get(`/api/comments/${this.props.post.post_id}`).then( r => {
		this.setState({ comments: r.data });
	});
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

				{this.state.comments.map( (value) => {
          return (
            <div key={'comment_container_' + value.comment_id}>
              <p key={'comment_' + value.comment_id}>{value.comment_text}</p>
            </div>
          )
        })}

				<img src={this.props.post.profile_pic}/><input placeholder="Write a comment..."/>
				<img src="broken-link"/>
				<img src="broken-link"/>
				<p>Press Enter to post.</p>
			</div>
		)
	}
}
