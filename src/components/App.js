import io from 'socket.io-client';
import React, { Component } from 'react';

import Display from './Display';
import MessageInput from './MessageInput';
import TypingNotification from './TypingNotification';

const socket = io('http://localhost:3001');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      isTyping: false,
    };

    socket.on('receiveMessage', msg => {
      this.setState({ messages: [...this.state.messages, msg] });
    });

    socket.on('typing', msg => {
      this.setState({ isTyping: true });
    });

    socket.on('noTyping', msg => {
      this.setState({ isTyping: false });
    });
  }

  whatToDisplay = () => {
    if (this.state.messages.length === 0 && this.state.isTyping) {
      return <TypingNotification isTyping={this.state.isTyping} />;
    }

    return (
      <div>
        <Display messages={this.state.messages} />
        <TypingNotification isTyping={this.state.isTyping} />
      </div>
    );
  };

  render() {
    return (
      <div>
        <header>Chat Time</header>
        <MessageInput />
        {this.whatToDisplay()}
      </div>
    );
  }
}

export default App;
