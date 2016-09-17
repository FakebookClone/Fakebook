import React from 'react';
import Axios from 'axios';
import Comment from '../Comment/Comment.jsx';
import PostEditButton from './PostEditButton.jsx';
import TopPosted from './TopPosted.jsx';
import MidPosted from './MidPosted.jsx';
import LikeSection from './LikeSection.jsx';
import LikeSeperator from './LikeSeperator.jsx';
import LowPosted from './LowPosted.jsx';
import deleteConfirmation from './deleteConfirmation.jsx';
import EditPost from './EditPost.jsx';

require('../../../../stylesheets/components/global/Post.scss');
require('../../../../stylesheets/components/global/main.scss');
var imageshome = '/images/home/';
var images = '/images/main/';

export default class Posts extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			postedComments: [],
			comment: '',
			likes: [],
			iLiked: false,
			deleteConfirmation: false,
			editPost: false,
			editPostText: ''
		};

		if(this.props.user.facebook_id === this.props.post.profile_id) {
			this.state.myPost = true;
		} else {
			this.state.myPost = false;
		}
	}

	componentWillMount() {
		Axios.get(`/api/comments/${this.props.post.post_id}`).then(r => {
			this.setState({postedComments: r.data});
		});
		Axios.get(`/api/likes/post/${this.props.post.post_id}`).then(r => {
			var temp = false;
			for(var i in r.data) {
				if(r.data[i].profile_id == this.props.user.facebook_id) {
					temp = true;
				}
			}
			this.setState({likes: r.data, iLiked: temp})
		})
	}

	render() {
		return (
			<div className="global-post-container">

				<PostEditButton myPost={this.state.myPost} deletePost={this.deletePost.bind(this)} editPost={this.editPost.bind(this)} />
				<TopPosted post={this.props.post} />
				<MidPosted post={this.props.post} iLiked={this.state.iLiked} likePost={this.likePost.bind(this)} />

				{this.state.likes.length !== 0
					? <LikeSection likes={this.state.likes} />
					: null
				}

				{this.state.likes.length !== 0
					? <LikeSeperator />
					: null
				}

				{this.state.postedComments.map((value) => {
					return (<Comment postID={this.props.post.profile_id} user={this.props.user} key={'comment_container_' + value.comment_id} comment={value}/>)
				})}


				<LowPosted user={this.props.user} commentCatcher={this.commentCatcher.bind(this)} comment={this.state.comment} postComment={this.postComment.bind(this)} />

				{this.state.deleteConfirmation
					?	<div onClick={this.cancelDelete.bind(this)} className="dimmer"></div>
					: null
				}

				{this.state.deleteConfirmation
					? <DeleteConfirmation cancelDelete={this.cancelDelete.bind(this)} deletePostConfirmed={this.deletePostConfirmed.bind(this)} editPost={this.editPost.bind(this)} />
					: null
				}

				{this.state.editPost
					? <div className="dimmer"></div>
					: null
				}

				{this.state.editPost
					? <EditPost user={this.props.user} cancelEdit={this.cancelEdit.bind(this)} editPostCatcher={this.editPostCatcher.bind(this)} editPostText={this.state.editPostText} post={this.props.post} editPostConfirmed={this.editPostConfirmed.bind(this)} />
					: null
				}

				{
					$('document').ready(function() {
						autosize($('.home-post-textarea'));
						$(document).on('click', function(e) {
							if( $(e.target).hasClass('post-edit-button') ) {
								$(e.target).children('.post-menu').css('display', 'inline-block');
								$(e.target).children('.post-menu-small').css('display', 'inline-block');
							} else {
								$('.post-menu').css('display', 'none');
								$('.post-menu-small').css('display', 'none');
							}
						})
					})
				}
			</div>
		)
	}

	commentCatcher(e) {
		this.setState({comment: e.target.value})
	}

	postComment(e) {
		if (e.keyCode === 13) {
			Axios.post(`/api/comment/${this.props.post.post_id}`, {
				comment: this.state.comment,
				profile_id: this.props.user.facebook_id
			}).then(r => {
				this.setState({postedComments: r.data, comment: ''})
			})
		}
	}

	likePost() {
		Axios.post(`/api/like/post/${this.props.post.post_id}`, {profile_id: this.props.user.facebook_id}).then(r => {
			this.setState({likes: r.data, iLiked: !this.state.iLiked});
		})
	}

	deletePost() {
		this.setState({ deleteConfirmation: true });
	}

	deletePostConfirmed() {
		Axios.delete(`/api/post/${this.props.post.post_id}`).then(r => {
			Axios.get(`/api/friends/${this.props.user.facebook_id}`).then( r => {
				Axios.post(`/api/posts/${this.props.user.facebook_id}`, { friends: r.data }).then( r => {
					this.setState({ deleteConfirmation: false });
					this.props.updatePosted(r.data);
				})
			})
		})
	}

	cancelDelete() {
		this.setState({ deleteConfirmation: false });
	}

	editPost() {
		this.setState({ deleteConfirmation: false, editPost: true, editPostText: this.props.post.post_text });
	}

	cancelEdit() {
		this.setState({ editPost: false });
	}

	editPostCatcher(e) {
		this.setState({ editPostText: e.target.value });
	}

	editPostConfirmed() {
		Axios.put(`/api/post/${this.props.post.post_id}`, { post: this.state.editPostText }).then(r => {
			Axios.get(`/api/friends/${this.props.user.facebook_id}`).then( r => {
				Axios.post(`/api/posts/${this.props.user.facebook_id}`, { friends: r.data }).then( r => {
					this.setState({ editPost: false });
					this.props.updatePosted(r.data);
				})
			})
		})
	}
}
