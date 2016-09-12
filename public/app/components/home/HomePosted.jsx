import React from 'react';
import Posts from '../global/Post.jsx';
var imageshome = './images/home/';

require('../../../stylesheets/components/home/HomePosted.scss');

export default class HomePosted extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div className="postedUser">
				{this.props.posts.length === 0
					? <div className="center-section-div">
							<div className="no-post-image-div">
                <div>
                  <img src={imageshome + 'home-post.png'}/>
                </div>
							</div>
							<div className="no-post-text-div">
								<p>No posts to show</p>
							</div>
							<div className="no-post-button-div">
								<button>Find Friends</button>
							</div>
						</div>
					: null
				}
				{this.props.posts.map((value) => {
					return (<Posts user={this.props.user} key={'post_component_' + value.post_id} post={value} updatePosted={this.props.updatePosted}/>)
				})}
				<div className="posted-bottom-padding"></div>
			</div>
		)
	}
}
