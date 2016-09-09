import React from 'react';

require('../../../stylesheets/components/global/GlobalChat.scss');

export default class GlobalChat extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div className="chat-wrapper-closed">
				<div className="chat-left">
					<div className="green-circle"></div>
					<div className="chat-text">Chat</div>
				</div>
				<div className="pull-right">
        <div className="chat-new-message"></div>
					<div className="chat-options"></div>
				</div>
			</div>
		)
	}
}
