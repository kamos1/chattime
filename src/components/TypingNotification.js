import React from 'react';

const toShow = isTyping => {
  if (isTyping) {
    return <p>typing</p>;
  }
};

const TypingNotification = ({ isTyping }) => {
  return <div>{toShow(isTyping)}</div>;
};

export default TypingNotification;
