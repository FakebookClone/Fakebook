import React from 'react';

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
              <img className="user-comment-hide-button" src="/images/comments/comment-x-light-gray.png" />
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
}
