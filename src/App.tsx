import io from "socket.io-client";
import React, { useState, useEffect } from "react";

import Display from "./components/Display";
import MessageInput from "./components/MessageInput";
import TypingNotification from "./components/TypingNotification";
import "./app.scss";

const socket = io("http://localhost:3001");

const App: React.FC = () => {
  const [messages, setMessage] = useState([
    { name: "", text: "This is the beginning of a conversation." },
  ]);

  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    socket.on("receiveMessage", (msg) => {
      setMessage(messages.concat(msg));
    });
  }, [messages]);

  useEffect(() => {
    socket.on("typing", () => {
      setIsTyping(true);
    });

    socket.on("noTyping", () => {
      setIsTyping(false);
    });
  }, [isTyping]);

  const whatToDisplay = () => {
    if (messages.length === 0 && isTyping === true) {
      return <TypingNotification isTyping={isTyping} />;
    }

    return (
      <div>
        <Display messages={messages} />
        <TypingNotification isTyping={isTyping} />
      </div>
    );
  };

  return (
    <div>
      <div className="app-container">
        <h1>Chat Time</h1>
        <MessageInput />
      </div>
      {whatToDisplay()}
    </div>
  );
};

export default App;
