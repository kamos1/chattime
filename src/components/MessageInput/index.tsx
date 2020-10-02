import io from "socket.io-client";
import React, { useState } from "react";
import "./MessageInput.scss";

const socket = io("http://localhost:3001");

const MessageInput: React.FC = () => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    socket.emit("submitMessage", { name, text });
    setText("");
  };

  const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onKeyDown = () => {
    socket.emit("typing", name);
  };

  const onKeyUp = () => {
    socket.emit("noTyping");
  };

  return (
    <div>
      <label>Name</label>
      <input
        className="input"
        data-testid="input-name"
        onChange={(e) => handleNameInput(e)}
        type="text"
        value={name}
        id="input-name"
      />
      <label>Message</label>
      <input
        className="input"
        data-testid="input-text"
        onChange={(e) => handleTextInput(e)}
        onKeyDown={() => onKeyDown()}
        onKeyUp={() => onKeyUp()}
        type="text"
        value={text}
      />
      <button
        className="submit"
        data-testid="input-submit"
        id="submit-btn"
        type="submit"
        onClick={() => handleSubmit()}
      >
        Submit
      </button>
    </div>
  );
};

export default MessageInput;
