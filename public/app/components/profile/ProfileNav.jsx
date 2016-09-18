import React from 'react';
import {Link} from 'react-router';

require('../../../stylesheets/components/profile/ProfileNav.scss');

export default class ProfileNav extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div className="profile-main-nav-wrapper">

				<div className="profile-nav-wrapper">
					<div className="profile-nav-first"></div>

					{this.props.selected === 'profile'
						? <img className="profile-nav-profile-selector" src="/images/profile-nav/nav-selected-arrow.png" />
						: null
					}
					{this.props.selected === 'about'
						? <img className="profile-nav-about-selector" src="/images/profile-nav/nav-selected-arrow.png" />
						:	null
					}
					{this.props.selected === 'friends'
						? <img className="profile-nav-friends-selector" src="/images/profile-nav/nav-selected-arrow.png" />
						: null
					}
					{this.props.selected === 'photos'
						? <img className="profile-nav-photos-selector" src="/images/profile-nav/nav-selected-arrow.png" />
						: null
					}

					{this.props.selected === 'profile'
						? <Link to={`/profile/${this.props.user.facebook_id}`} className="profile-nav-timeline-selected">Timeline</Link>
						: <Link to={`/profile/${this.props.user.facebook_id}`} className="profile-nav-timeline">Timeline</Link>
					}
					{this.props.selected === 'about'
						? <Link to={`/about/${this.props.user.facebook_id}`} className="profile-nav-about-selected">About</Link>
						: <Link to={`/about/${this.props.user.facebook_id}`} className="profile-nav-about">About</Link>
					}
					{this.props.selected === 'friends'
						? <Link to={`/friends/${this.props.user.facebook_id}`} className="profile-nav-friends-selected">Friends</Link>
						: <Link to={`/friends/${this.props.user.facebook_id}`} className="profile-nav-friends">Friends</Link>
					}
					{this.props.selected === 'photos'
						? <Link to={`/photos/${this.props.user.facebook_id}`} className="profile-nav-photos-selected">Photos</Link>
						: <Link to={`/photos/${this.props.user.facebook_id}`} className="profile-nav-photos">Photos</Link>
					}

					<div className="profile-nav-more">More&nbsp;&nbsp;<i className="fa fa-caret-down"></i>

					</div>
					<div className="profile-nav-last"></div>
				</div>
				{/* <img src="/images/profile/select-indicator-arrow.png" /> */}
			</div>
		)
	}
}
