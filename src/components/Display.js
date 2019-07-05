import React from 'react';
import uuid from 'uuid';

import Message from './Message';

const showMessages = messages => {
  if (messages.length === 0) {
    return <p>Let's start a conversation</p>;
  }

  return messages.map(message => (
    <Message key={uuid()} name={message.name} message={message.text} />
  ));
};

const Display = ({ messages }) => {
  return <div>{showMessages(messages)}</div>;
};

export default Display;
