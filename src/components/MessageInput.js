import io from 'socket.io-client';
import React, { Component } from 'react';

const socket = io('http://localhost:3001');

class MessageInput extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      text: '',
    };
  }

  handleNameInput(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit() {
    socket.emit('submitMessage', this.state);
    this.setState({ text: '' });
  }

  handleTextInput(e) {
    this.setState({ text: e.target.value });
  }

  onKeyDown() {
    socket.emit('typing', this.state.name);
  }

  onKeyUp() {
    socket.emit('noTyping');
  }
  render() {
    return (
      <div>
        <label>Name</label>
        <input
          className="inputName"
          data-testid="inputName"
          onChange={e => this.handleNameInput(e)}
          type="text"
          value={this.state.name}
        />
        <label>Message</label>
        <input
          className="inputText"
          data-testid="inputText"
          onChange={e => this.handleTextInput(e)}
          onKeyDown={() => this.onKeyDown()}
          onKeyUp={() => this.onKeyUp()}
          type="text"
          value={this.state.text}
        />
        <input
          className="inputSubmit"
          data-testid="inputSubmit"
          id="submit-btn"
          type="submit"
          onClick={() => this.handleSubmit()}
        />
      </div>
    );
  }
}

export default MessageInput;
