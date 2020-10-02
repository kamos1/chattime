import React from "react";

interface Props {
  isTyping: boolean;
}

const TypingNotification: React.FC<Props> = ({ isTyping }) => {
  return <div>{isTyping ? <p>typing</p> : null}</div>;
};

export default TypingNotification;
