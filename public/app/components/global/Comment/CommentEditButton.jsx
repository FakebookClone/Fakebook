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
              <img className="user-comment-edit-button" src="/images/comments/edit-pencil-light-gray.png" />
              <span className="tooltiptext">Edit or delete this</span>
            </div>
          : null
        }
        {this.props.myComment && !this.props.myPost
          ? <div className="user-comment-edit-button-container tooltip">
              <img className="user-comment-edit-button" src="/images/comments/edit-pencil-light-gray.png" />
              <span className="tooltiptext">Edit or delete this</span>
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
              <span className="tooltiptext">Hide  this</span>
            </div>
          : null
        }
      </div>
    )
  }
}
