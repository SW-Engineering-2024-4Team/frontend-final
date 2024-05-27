import React, { useEffect, useRef } from 'react';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const WebSocketClient = ({ roomId, onMessageReceived }) => {
  const stompClientRef = useRef(null);

  useEffect(() => {
    const socket = new SockJS('http://localhost:8090/agricola-service');
    const stompClient = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000,
      debug: (str) => {
        console.log(str);
      }
    });

    stompClient.onConnect = (frame) => {
      console.log('Connected: ' + frame);
      stompClient.subscribe(`/topic/room/${roomId}`, (messageOutput) => {
        onMessageReceived(JSON.parse(messageOutput.body));
      });
    };

    stompClient.activate();
    stompClientRef.current = stompClient;

    return () => {
      if (stompClientRef.current) {
        stompClientRef.current.deactivate();
      }
    };
  }, [roomId, onMessageReceived]);

  const sendMessage = () => {
    if (stompClientRef.current && stompClientRef.current.connected) {
      stompClientRef.current.publish({
        destination: `/app/room/${roomId}/start`,
        body: JSON.stringify({ message: 'Game start message' }),
      });
    } else {
      console.log('STOMP client is not connected');
    }
  };

  return (
    <div>
      <button onClick={sendMessage}>Start Game</button>
    </div>
  );
};

export default WebSocketClient;
