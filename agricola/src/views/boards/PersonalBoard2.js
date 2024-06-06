import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Fence from '../../components/personal/Fence';
import Land from '../../components/personal/Land';
import Empty from '../../components/personal/Empty';
import WebSocketClient from '../../components/WebSocketClient'; // WebSocketClient 불러오기

export default function PersonalBoard2({ pid, currentPlayer }) {
  const [fencePosition, setFencePosition] = useState(Array(39).fill(false));
  const sendMessageRef = useRef(null);

  const isFenceActive = (index) => {
    return fencePosition && fencePosition.length > index ? fencePosition[index] : false;
  };

  const handleCardClick = (index) => {
    setFencePosition((prev) => {
      const newFencePosition = [...prev];
      newFencePosition[index] = true; // Set the clicked fence to active
      return newFencePosition;
    });

    console.log(`${currentPlayer}번 플레이어가 울타리 ${index + 1}번을 클릭했습니다.`);

    if (sendMessageRef.current) {
      const messageJSON = JSON.stringify({ currentPlayer, fenceNumber: index + 1 });
      sendMessageRef.current(`/app/room/1/playerChoice`, messageJSON);
      console.log('SEND FENCE');
    }
  };

  const renderFence = (ratio, isVertical, index) => (
    <Fence
      currentPlayer={3}
      ratio={ratio}
      isVertical={isVertical}
      isActive={isFenceActive(index)}
      pid={pid}
      onClick={() => handleCardClick(index)}
    />
  );

  const handleMessageReceived = (message) => {
    // Handle incoming messages
    console.log('Received message:', message);
  };

  return (
    <Box
      height={420}
      width={688}
      display="flex"
      flexWrap="wrap"
      alignItems="center"
      gap={1}
      p={2}
      sx={{ m: 0 }}
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
      <Empty />
      {renderFence(1, false, 1)}
      <Empty />
      {renderFence(2, false, 2)}
      <Empty />
      {renderFence(3, false, 3)}
      <Empty />
      {renderFence(4, false, 4)}
      <Empty />
      {renderFence(5, false, 5)}
      <Empty />

      <Empty />
      {renderFence(6, true, 6)}
      <Land pid={pid} state={"wood_room"} isActive={true}/>
      {renderFence(7, true, 7)}
      <Land pid={pid} state={"soil_room"} isActive={true}/>
      {renderFence(8, true, 8)}
      <Land pid={pid} state={"rock_room"} isActive={true}/>
      {renderFence(9, true, 9)}
      <Land pid={pid} state={"plow"} isActive={true}/>
      {renderFence(10, true, 10)}
      <Land pid={pid} state={"plow_grain1"} isActive={true}/>
      {renderFence(11, true, 11)}
      <Empty />

      <Empty />
      {renderFence(12, false, 12)}
      <Empty />
      {renderFence(13, false, 13)}
      <Empty />
      {renderFence(14, false, 14)}
      <Empty />
      {renderFence(15, false, 15)}
      <Empty />
      {renderFence(16, false, 16)}
      <Empty />
      
      <Empty />
      {renderFence(17, true, 17)}
      <Land pid={pid} />
      {renderFence(18, true, 18)}
      <Land pid={pid} />
      {renderFence(19, true, 19)}
      <Land pid={pid} />
      {renderFence(20, true, 20)}
      <Land pid={pid} />
      {renderFence(21, true, 21)}
      <Land pid={pid} />
      {renderFence(22, true, 22)}
      <Empty />

      <Empty />
      {renderFence(23, false, 23)}
      <Empty />
      {renderFence(24, false, 24)}
      <Empty />
      {renderFence(25, false, 25)}
      <Empty />
      {renderFence(26, false, 26)}
      <Empty />
      {renderFence(27, false, 27)}
      <Empty />

      <Empty />
      {renderFence(28, true, 28)}
      <Land pid={pid} />
      {renderFence(29, true, 29)}
      <Land pid={pid} />
      {renderFence(30, true, 30)}
      <Land pid={pid} />
      {renderFence(31, true, 31)}
      <Land pid={pid} />
      {renderFence(32, true, 32)}
      <Land pid={pid} />
      {renderFence(33, true, 33)}
      <Empty />
      
      <Empty />
      {renderFence(34, false, 34)}
      <Empty />
      {renderFence(35, false, 35)}
      <Empty />
      {renderFence(36, false, 36)}
      <Empty />
      {renderFence(37, false, 37)}
      <Empty />
      {renderFence(38, false, 38)}
      <Empty />
    </Box>
  );
}
