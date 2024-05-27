import React, { useState } from 'react';
import WebSocketClient from './WebSocketClient';

const WebSocketPage = () => {
  const [messages, setMessages] = useState([]);

  const handleOnMessageReceived = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <div>
      <WebSocketClient roomId="example-room-id" onMessageReceived={handleOnMessageReceived} />
      <div>
        <h2>Messages:</h2>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WebSocketPage;
