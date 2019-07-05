import React from 'react';

const Message = ({ name, message }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{message}</p>
    </div>
  );
};

export default Message;
