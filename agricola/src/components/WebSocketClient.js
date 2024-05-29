import React, { useEffect, useRef } from 'react';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const WebSocketClient = ({ roomId, onMessageReceived }) => {
  const stompClientRef = useRef(null); // stompClient를 참조하기 위한 ref 생성

  useEffect(() => {
    // SockJS를 사용하여 WebSocket 연결 설정
    const socket = new SockJS('http://localhost:8090/agricola-service');
    const stompClient = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000, // 재연결 딜레이 설정
      debug: (str) => {
        console.log(str); // 디버그 메시지 출력
      }
    });

    // WebSocket 연결 성공 시 호출되는 함수
    stompClient.onConnect = (frame) => {
      console.log('Connected: ' + frame);
      // 특정 topic에 구독하고, 메시지 수신 시 onMessageReceived 콜백 호출
      stompClient.subscribe(`/topic/room/${roomId}`, (messageOutput) => {
        onMessageReceived(JSON.parse(messageOutput.body));
      });
    };

    // stompClient 활성화 (연결 시작)
    stompClient.activate();
    stompClientRef.current = stompClient;

    // 컴포넌트 언마운트 시 stompClient 비활성화 (연결 해제)
    return () => {
      if (stompClientRef.current) {
        stompClientRef.current.deactivate();
      }
    };
  }, [roomId, onMessageReceived]); // roomId와 onMessageReceived가 변경될 때마다 effect 재실행

  // 메시지를 서버로 보내는 함수
  const sendMessage = () => {
    if (stompClientRef.current && stompClientRef.current.connected) {
      stompClientRef.current.publish({
        destination: `/app/room/${roomId}/start`, // 메시지를 보낼 경로 설정
        body: JSON.stringify({ message: 'Game start message' }), // 메시지 본문
      });
    } else {
      console.log('STOMP client is not connected'); // 연결이 되지 않았을 때의 처리
    }
  };

  return (
    <div>
      <button onClick={sendMessage}>Start Game</button> {/* 버튼 클릭 시 sendMessage 함수 호출 */}
    </div>
  );
};

export default WebSocketClient;
