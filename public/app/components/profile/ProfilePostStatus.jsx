import React from 'react';

require('../../../stylesheets/components/profile/ProfilePostStatus.scss');

export default class ProfilePostStatus extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div>
				<div>
					<p><img src="/images/profile/white-up-triangle.png"/>white up arrow points to 'status'
						<img src="/images/profile/status-pencil.png"/>
						Status
						<img src="/images/profile/photo-video.png"/>
						Photo / Video
						<img src="/images/profile/life-event-flag.png"/>
						Life Event
					</p>
          <div>
            <p>What's on your mind?</p>
            <p>This section is almost the same as in the home page</p>
            <img src="/images/profile/life-event-flag.png"/>
          </div>
				</div>
			</div>
		)
	}
}
