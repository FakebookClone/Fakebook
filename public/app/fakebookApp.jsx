import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Link, hashHistory } from 'react-router';

import Login from './components/auth/Login.jsx';
import LoggedOut from './components/auth/LoggedOut.jsx';
import Home from './components/home/Home.jsx';
import Profile from './components/profile/Profile.jsx';
import FindFriends from './components/find_friends/FindFriends.jsx';
import About from './components/about/About.jsx';
import Photos from './components/photos/Photos.jsx';
import Friends from './components/friends_profile_page/FriendsProfilePage.jsx';

class FakebookApp extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Login} />
        <Route path="/loggedout" component={LoggedOut} />
        <Route path="/home" component={Home} />
        <Route path="/profile/:profile_id" component={Profile} />
        <Route path="/find_friends" component={FindFriends} />
        <Route path="/about/:profile_id" component={About} />
        <Route path="/friends/:profile_id" component={Friends} />
        <Route path="/photos/:profile_id" component={Photos} />
      </Router>
    )
  }
}


ReactDOM.render(<FakebookApp />, document.getElementById('app'));
