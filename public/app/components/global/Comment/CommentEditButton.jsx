import React from 'react';
import Axios from 'axios';

export default class CommentEditButton extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        {this.props.myComment && this.props.myPost
          ? <div className="user-comment-edit-button-container tooltip">
              <img className="user-comment-edit-menu-carrot" src="/images/comments/edit-menu-carrot.png" />
              <img className="user-comment-edit-button" src="/images/comments/edit-pencil-light-gray.png" />
              <span className="tooltiptext">Edit or delete this</span>
              <div className="user-comment-edit-menu-container">
                <ul className="user-comment-edit-menu">
                  <li>Edit...</li>
                  <li>Delete...</li>
                </ul>
              </div>
            </div>
          : null
        }
        {this.props.myComment && !this.props.myPost
          ? <div className="user-comment-edit-button-container tooltip">
              <img className="user-comment-edit-menu-carrot" src="/images/comments/edit-menu-carrot.png" />
              <img className="user-comment-edit-button" src="/images/comments/edit-pencil-light-gray.png" />
              <span className="tooltiptext">Edit or delete this</span>
              <div className="user-comment-edit-menu-container">
                <ul className="user-comment-edit-menu">
                  <li>Edit...</li>
                  <li>Delete...</li>
                </ul>
              </div>
            </div>
          : null
        }
        {!this.props.myComment && this.props.myPost
          ? <div className="user-comment-delete-button-container tooltip">
              <img className="user-comment-delete-button" src="/images/comments/comment-x-light-gray.png" />
              <span className="tooltiptext">Remove this</span>
            </div>
          : null
        }
        {!this.props.myComment && !this.props.myPost
          ? <div className="user-comment-hide-button-container tooltip">
              <img onClick={this.hideComment.bind(this)} className="user-comment-hide-button" src="/images/comments/comment-x-light-gray.png" />
              <span className="tooltiptext">Hide this</span>
            </div>
          : null
        }

        {
          $('document').ready(function() {
            var visible = false;
            $(document).on('click', function(e) {
              if( $(e.target).hasClass('user-comment-edit-button') ) {
                if(visible) {
                  $(e.target).siblings('.user-comment-edit-menu-container').css('display', 'none');
                  $(e.target).siblings('.user-comment-edit-menu-carrot').css('display', 'none');
                } else {
                  $(e.target).siblings('.user-comment-edit-menu-container').css('display', 'flex');
                  $(e.target).siblings('.user-comment-edit-menu-carrot').css('display', 'inline-block');
                }
                visible = !visible;
              } else {
                $('.user-comment-edit-menu-container').css('display', 'none');
                $('.user-comment-edit-menu-carrot').css('display', 'none');
                visible = false;
              }
            })

          })
        }
      </div>
    )
  }

  hideComment() {
    // console.log('Hide comment fired for comment', this.props.comment.comment_id, 'on post', this.props.comment.post_id, 'for profile', this.props.user.facebook_id);
    Axios({
      method: 'PUT',
      url: '/api/comment/hide',
      data: { comment_id: this.props.comment.comment_id, post_id: this.props.comment.post_id, profile_id: this.props.user.facebook_id }
    }).then(r => {
      // console.log('UPDATED COMMENTS', r.data);
      this.props.refreshComments(r.data);
    })
  }
}
