import React from "react";

interface Props {
  name: string;
  message: string;
}

const Message: React.FC<Props> = ({ name, message }) => {
  return (
    <div>
      <h3 data-testid="message">
        {name === "" ? `${message}` : `${name}: ${message}`}
      </h3>
    </div>
  );
};

export default Message;
