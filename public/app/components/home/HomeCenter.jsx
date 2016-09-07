import React from 'react';
import Axios from 'axios';
import HomePost from './HomePost.jsx';
import HomePosted from './HomePosted.jsx';

require('../../../stylesheets/components/home/HomeCenter.scss');

export default class HomeCenter extends React.Component {
  constructor() {
    super();
    this.state = { posted: [] };
  }

  componentWillMount() {
    Axios.get(`/api/posts/${this.props.user.id}`).then( r => {
      this.setState({ posted: r.data });
    })
  }

  render() {
    console.log('POSTED:', this.state.posted);
    return (
      <div className= "post container">
        <HomePost user={this.props.user} updatePosted={this.updatePosted.bind(this)} />
        <HomePosted posts={this.state.posted} />
      </div>
    )
  }

  updatePosted(posts) {
    this.setState({ posted: posts });
  }
}
