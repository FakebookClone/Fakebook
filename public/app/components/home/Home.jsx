import React from 'react';
import GlobalHeader from '../global/GlobalHeader.jsx';
import HomeLeft from './HomeLeft.jsx';
import HomeCenter from './HomeCenter.jsx';
import HomeRight from './HomeRight.jsx';
import { browserHistory } from 'react-router';

require('../../../stylesheets/components/Home.scss');

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { user: JSON.parse(localStorage.getItem('fakebook_user')) }
  }

  componentWillMount() {
    if( !(this.state.user )) {
      browserHistory.push('/')
    }
  }

  render() {
    console.log('render')
    return (
      <div>
        {this.state.user
          ? <div>
              <GlobalHeader user={this.state.user} />
              <div className="home-main-content-wrapper">
                <HomeLeft user={this.state.user} />
                <HomeCenter user={this.state.user} />
                <HomeRight />
              </div>
            </div>
          : null
        }
      </div>
    )
  }
}
