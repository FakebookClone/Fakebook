import React from 'react';

require('../../../stylesheets/components/profile/ProfilePhotosGallery.scss');

export default class ProfilePhotosGallery extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div>
				<div>
					<h1><img src="/images/profile/photos_24.png"/>Photos</h1>
				</div>
				<div>
					<button><img src="/images/profile/gray-plus.png"/>Create Album</button>
					<button>Add Photos</button>
					<button>Add Video</button>
					<button><img src="/images/profile/gray-pencil.png"/></button>
				</div>
				<div>
					<h1 className="gray">No Photos to Show (default view)</h1>
				</div>
			</div>
		)
	}
}
