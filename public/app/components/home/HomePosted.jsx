import React from 'react';

export default class HomePosted extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="home-center-posted-container">
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
            <div key={'post_container_' + value.post_id}>
              <p key={value.post_id}>{value.post_text}</p>
            </div>
          )
        })}
      </div>
    )
  }
}
