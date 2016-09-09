import React from 'react';

require('../../../stylesheets/components/profile/ProfilePhotosGallery.scss');

export default class ProfilePhotosGallery extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div className="main-container">
				<div className="upper-photos-section-wrapper">
					<div className="photo-image-wrapper">
						<img src="/images/profile/photos_24.png"/>
						<h1>Photos</h1>
					</div>

					<div className="create-add-video-and-pencil-buttons">
						<button className="create-album-button"><img className="gray-plus-image" src="/images/profile/gray-plus.png"/>Create Album</button>
						<button className="add-photos-button">Add Photos</button>
						<button className="add-video-button">Add Video</button>
						<button className="pencil-button"><img className="gray-pencil-image" src="/images/profile/gray-pencil.png"/></button>
					</div>
				</div>
				<div className="lower-section-wrapper">
					<h1 className="no-photos-to-show">No Photos to Show</h1>
				</div>
			</div>
		)
	}
}
