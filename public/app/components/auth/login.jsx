import React from 'react';
import { Link } from 'react-router';

export default class Login extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <p>Hello From the Login Component</p>
        <Link to="/test" ><button></button></Link>
      </div>
    )
  }
}
