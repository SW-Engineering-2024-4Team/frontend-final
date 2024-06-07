import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import WebSocketClient from '../../components/WebSocketClient'; // WebSocketClient 불러오기

import TriggerBoard from './TriggerBoard';
import OwnBoard from './OwnBoard';

const CardDeckBoard = ( currentPlayer, clickedPlayer ) => {
  const [ownList, setOwnList] = useState([
    { id: 1, type: 'minor', content: 'Minor Card 1' },
    { id: 2, type: 'work', content: 'Work Card 1' },
    { id: 3, type: 'minor', content: 'Minor Card 2' },
    { id: 4, type: 'work', content: 'Work Card 2' },
  ]);
  const [triggerList, setTriggerList] = useState([]);
  const sendMessageRef = useRef(null);

  // 웹소켓 메시지 처리 함수
  const handleMessageReceived = (message) => {
    // Handle incoming messages
    console.log('Received message:', message);
  };

  const handleOwnCardClick = (id) => { 
    setOwnList((prevList) => prevList.filter((card) => card.id !== id));
    if (currentPlayer == clickedPlayer) {
      const clickedCard = ownList.find((card) => card.id === id);
      if (clickedCard) {
        setTriggerList((prevList) => [...prevList, clickedCard]);
      }
    }   
  };

  // 현재 플레이어에 기반하여 보드를 렌더링합니다.
  const renderPlayerBoard = () => {
    return (
      <Box>
        <TriggerBoard 
          triggerList={triggerList} 
          setTriggerList={setTriggerList} 
        />
        <OwnBoard 
          ownList={ownList} 
          setOwnList={setOwnList} 
          handleClick={handleOwnCardClick}
        />
      </Box>
    );
  }


  return (
    <Box
      alignItems="flex-start"
      justifyContent="flex-start"
      height={420}
      width={688}
    >
      <WebSocketClient
        roomId="1"
        playerId={currentPlayer}
        onMessageReceived={handleMessageReceived}
        ref={(client) => {
          if (client) {
            sendMessageRef.current = client.sendMessage;
          }
        }}
      />
      <Modal>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
          bgcolor="background.paper"
          p={4}
        >
          {renderPlayerBoard()}
        </Box>
      </Modal>
    </Box>
  );
};

export default CardDeckBoard;
