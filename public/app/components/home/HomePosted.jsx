import React from 'react';
import Posts from '../global/Post.jsx';

require('../../../stylesheets/components/home/HomePost.scss');

export default class HomePosted extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        {this.props.posts.length === 0
          ? <div>
              <img src="#" />
              <p>No posts to show</p>
              <button>Find Friends</button>
            </div>
          : null
        }
        {this.props.posts.map( (value) => {
          return (
            <Posts key={'post_component_' + value.post_id} post={value} />
          )
        })}
      </div>
    )
  }
}
