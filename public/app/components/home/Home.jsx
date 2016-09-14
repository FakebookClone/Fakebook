import React from 'react';
import Axios from 'axios';
import GlobalHeader from '../global/GlobalHeader.jsx';
import ProfileFooter from '../profile/ProfileFooter.jsx';
import GlobalChat from '../global/GlobalChat.jsx';
import HomeLeft from './HomeLeft.jsx';
import HomeCenter from './HomeCenter.jsx';
import HomeRight from './HomeRight.jsx';
import {browserHistory} from 'react-router';

require('../../../stylesheets/components/home/Home.scss');

export default class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			user: JSON.parse(localStorage.getItem('fakebook_user')),
			posts: []
		}
	}

	componentWillMount() {
		if (!(this.state.user)) {
			browserHistory.push('/')
		} else {
			Axios.get(`/api/profile/${this.state.user.userID}`).then(r => {
				var user = r.data[0];
				Axios.get(`/api/friends/${user.facebook_id}`).then( r => {
					Axios.post(`/api/posts/${user.facebook_id}`, { friends: r.data }).then( r => {
						this.setState({ posts: r.data, user: user });
					})
				})
			})
		}
	}

	render() {
		return (
			<div>
				{this.state.user
					? <div>
							<GlobalHeader user={this.state.user} />
							<div className="home-main-content-wrapper">
								<GlobalChat />
								<div className="home-main-content-container">
									<HomeLeft user={this.state.user} />
									<HomeCenter user={this.state.user} posts={this.state.posts} updatePosts={this.updatePosts.bind(this)}/>
									<HomeRight/>
								</div>
							</div>
						</div>
					: null
				}
			</div>
		)
	}

	updatePosts(posts) {
		this.setState({ posts: posts });
	}
}
