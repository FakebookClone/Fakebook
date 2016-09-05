import React from 'react';

var images = './images/main/';
require('../../../stylesheets/components/Home.scss');

export default class Home extends React.Component {
  constructor() {
    super()
    this.state = { dimmerVisible: false };
  }

  render() {
    return (
      <div>
        {this.state.dimmerVisible
          ? <div className="dimmer"></div>
          : null
        }
        <div className="home-header">
          <img onClick={this.toggleDimmer.bind(this)} className="same-line" src={images + 'facebook_logo.jpg'} />
          <input className="same-line home-header-find-friends-input" placeholder="Find Friends" />
          <button><i className="fa fa-search same-line home-search-button"></i></button>
          <div className="same-line home-header-nav-container">
            <img className="same-line home-header-profile-picture" src="broken-img" />
            <p className="same-line">name</p>
          </div>
          <div className="same-line home-header-nav-container">
            <p className="same-line">Home</p>
          </div>
          <div className="same-line home-header-nav-container">
            <p className="same-line">Find Friends</p>
          </div>
          <div className="same-line home-header-nav-container">
            <img className="home-header-nav-image same-line" src={images + 'friend_request_not_selected.png'} />
            <img className="home-header-nav-image same-line" src={images + 'messages_not_selected.png'} />
            <img className="home-header-nav-image same-line" src={images + 'notifications_not_selected.png'} />
          </div>
          <div className="same-line home-header-nav-container">
            <img className="home-header-nav-image-small same-line" src={images + 'lock_not_selected.png'} />
            <img className="home-header-nav-image-smallest same-line" src={images + 'down_arrow_not_selected.png'} />
          </div>
        </div>

        <div className="home-main-content-wrapper">
          <div className="home-left-column">

          </div>

          <div className="home-center-column">

          </div>

          <div className="home-right-column">

          </div>
        </div>
      </div>
    )
  }

  toggleDimmer() {
    this.setState({ dimmerVisible: !this.state.dimmerVisible });
  }
}
