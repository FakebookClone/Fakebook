import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

class FakebookApp extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <p>Hello From The Fakebook App</p>
      </div>
    )
  }
}

ReactDOM.render(<FakebookApp />, document.getElementById('app'));
