import React from 'react';
import Axios from 'axios';
import HomePost from './HomePost.jsx';
import HomePosted from './HomePosted.jsx';


export default class HomeCenter extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {

  }

  render() {
    return (
      <div className= "post container">
        <HomePost user={this.props.user} updatePosted={this.props.updatePosts} />
        <HomePosted user={this.props.user} posts={this.props.posts} updatePosted={this.props.updatePosts} />
      </div>
    )
  }
}
