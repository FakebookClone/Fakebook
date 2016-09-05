import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Link } from 'react-router';

import Login from './components/auth/Login.jsx';
import Home from './components/home/Home.jsx';

class FakebookApp extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Login} />
        <Route path="/home" component={Home} />
      </Router>
    )
  }
}


ReactDOM.render(<FakebookApp />, document.getElementById('app'));
