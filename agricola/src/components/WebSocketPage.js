import React, { useState } from 'react';
import WebSocketClient from './WebSocketClient';

const WebSocketPage = () => {
  const [messages, setMessages] = useState([]); // 메시지를 저장할 상태 변수

  // 메시지 수신 시 호출되는 함수
  const handleOnMessageReceived = (message) => {
    setMessages((prevMessages) => [...prevMessages, JSON.stringify(message)]); // 수신된 메시지를 상태에 추가
  };

  return (
    <div>
      <WebSocketClient roomId="example-room-id" onMessageReceived={handleOnMessageReceived} /> {/* WebSocketClient 컴포넌트 사용 */}
      <div>
        <h2>Messages:</h2>
        <ul>
          {messages.map((msg, index) => ( // messages 상태 배열을 순회하며 각 메시지를 리스트 아이템으로 표시
            <li key={index}>{msg}</li> // 각 메시지를 리스트 아이템으로 렌더링
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WebSocketPage;
