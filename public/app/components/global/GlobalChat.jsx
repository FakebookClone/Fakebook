import React from 'react';

require('../../../stylesheets/components/global/GlobalChat.scss');

export default class GlobalChat extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div className="chat-wrapper-closed">
        <div><i className="fa fa-circle fa-circle-green"></i>Chat</div>
        <div>
          <img src="/images/main/new-message-light-gray.png" />
          <img src="/images/main/new-message-dark-gray.png" />
          <img src="/images/main/gears-gray.png" />
          <img src="/images/main/gears-gray-dark.png" />
        </div>
      </div>
    )
  }
}
