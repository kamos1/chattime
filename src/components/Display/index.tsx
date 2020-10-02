import React from "react";
import uuid from "uuid";

import Message from "../Message";

interface Props {
  messages: any;
}

const Display: React.FC<Props> = ({ messages }) => {
  return messages.map((message) => (
    <Message key={uuid()} name={message.name} message={message.text} />
  ));
};

export default Display;
