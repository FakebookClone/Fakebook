import React from 'react';
import Axios from 'axios';
import HomePost from './HomePost.jsx';
import HomePosted from './HomePosted.jsx';


export default class HomeCenter extends React.Component {
  constructor() {
    super();
    this.state = { posted: [] };
  }

  componentWillMount() {
    Axios.get(`/api/friends/${this.props.user.id}`).then( r => {
      Axios.post(`/api/posts/${this.props.user.id}`, { friends: r.data }).then( r => {
        this.setState({ posted: r.data });
      })
    })
  }

  render() {
    return (
      <div className= "post container">
        <HomePost user={this.props.user} updatePosted={this.updatePosted.bind(this)} />
        <HomePosted user={this.props.user} posts={this.state.posted} updatePosted={this.updatePosted.bind(this)} />
      </div>
    )
  }

  updatePosted(posts) {
    this.setState({ posted: posts });
  }
}
