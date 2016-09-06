import React from 'react';
import Axios from 'axios';
import HomePost from './HomePost.jsx';
import HomePosted from './HomePosted.jsx';

require('../../../stylesheets/components/HomeCenter.scss');

export default class HomeCenter extends React.Component {
  constructor() {
    super()
    this.state = { posted: [] };
  }

  componentWillMount() {
    Axios.get(`/api/posts/${this.props.user.id}`).then( r => {
      console.log('Home Center, posted, ', r.data);
      this.setState({ posted: r.data });
    })
  }

  render() {
    console.log('HOME CENTER POSTED', this.state.posted);
    return (
      <div>
        <HomePost user={this.props.user} updatePosted={this.updatePosted.bind(this)} />
        <HomePosted posts={this.state.posted} />
      </div>
    )
  }

  updatePosted(posts) {
    this.setState({ posted: posts });
  }
}
