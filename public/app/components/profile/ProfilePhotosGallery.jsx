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
						<div className="parent-of-albums-p">
							<p>Albums</p>
							<div className="white-arrow-image-photos">
								<img src="/images/profile/white-arrow3.png" />
							</div>
						</div>
					</div>

					<div className="create-add-video-and-pencil-buttons">
						<button className="create-album-button"><img className="gray-plus-image" src="/images/profile/gray-plus.png"/>Create Album</button>
						<button className="add-photos-button">Add Photos</button>
						<button className="add-video-button">Add Video</button>
						<button className="pencil-button"><img className="gray-pencil-image" src="/images/profile/gray-pencil.png"/></button>
					</div>
				</div>
				<div className="lower-section-wrapper">
					{/* <h1 className="no-photos-to-show">No Photos to Show</h1> */}
					<div className="wrapper-around-two-boxes">
					<div className="dotted-line-box">
						<div className="plus-and-create-album">
							<img src="/images/profile/gray-plus.png" />
							<p>Create Album</p>
						</div>
					</div>
					<div className="timeline-photos-boxes">
					<div className="timeline-photos-box">
						<img src="/images/profile/empty-album.png" />
						</div>
						<div className="timeline-photos-box2">
							<a href="#"><p>Timeline Photos</p></a>
							<div className = "empty-and-gears">
							<p className="empty">Empty</p>
							<img src="/images/profile/gears-gray.png" />
							</div>
						</div>
          </div>
					</div>
				</div>
			</div>
		)
	}
}
