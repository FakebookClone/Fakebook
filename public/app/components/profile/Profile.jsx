import React from 'react';
import GlobalHeader from '../global/GlobalHeader.jsx';
import ProfileCover from './ProfileCover.jsx';
import ProfilePhoto from './ProfilePhoto.jsx';
import ProfileNav from './ProfileNav.jsx';
import ProfileIntro from './ProfileIntro.jsx';

require('../../../stylesheets/components/profile/profile.scss');

export default class Profile extends React.Component {
	constructor() {
		super()
	}
	render() {
		return (
			<div>
				<div>
					<GlobalHeader/>
          <ProfileCover />
          <ProfilePhoto />
          <ProfileNav />
          <ProfileIntro />
				</div>
			</div>
		)
	}
}
