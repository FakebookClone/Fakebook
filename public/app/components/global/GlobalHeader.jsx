import React from 'react';

var images = './images/main/';
require('../../../stylesheets/components/global/main.scss');

export default class GlobalHeader extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="global-header">
        <img className="same-line" src={images + 'facebook_logo.jpg'} />
        <input className="same-line global-header-find-friends-input" placeholder="Find Friends" />
        <button><i className="fa fa-search same-line global-search-button"></i></button>
        <div className="same-line global-header-nav-container">
          <img className="same-line global-header-profile-picture" src="broken-img" />
          <p className="same-line">name</p>
        </div>
        <div className="same-line global-header-nav-container">
          <p className="same-line">Home</p>
        </div>
        <div className="same-line global-header-nav-container">
          <p className="same-line">Find Friends</p>
        </div>
        <div className="same-line global-header-nav-container">
          <img className="global-header-nav-image same-line" src={images + 'friend_request_not_selected.png'} />
          <img className="global-header-nav-image same-line" src={images + 'messages_not_selected.png'} />
          <img className="global-header-nav-image same-line" src={images + 'notifications_not_selected.png'} />
        </div>
        <div className="same-line global-header-nav-container">
          <img className="global-header-nav-image-small same-line" src={images + 'lock_not_selected.png'} />
          <img className="global-header-nav-image-smallest same-line" src={images + 'down_arrow_not_selected.png'} />
        </div>
      </div>
    )
  }
}
