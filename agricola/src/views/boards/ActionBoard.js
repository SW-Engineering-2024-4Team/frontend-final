import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ActionCard from '../cards/ActionCard';
import WebSocketClient from '../../components/WebSocketClient'; // WebSocketClient 불러오기

export default function ActionBoard({ currentPlayer }) {
  const initialClickedActionCards = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const [clickedActionCards, setClickedActionCards] = useState(initialClickedActionCards);

  const sendMessageRef = useRef(null);

  const handleCardClick = (cardNumber) => {
    setClickedActionCards((prev) => {
      const newClickedActionCards = [...prev];
      newClickedActionCards[cardNumber - 1] = currentPlayer;
      console.log(`${currentPlayer}번 플레이어가 행동카드 ${cardNumber}번을 클릭했습니다.`);
      
      // 소켓 메시지 전송
      if (sendMessageRef.current) {
        sendMessageRef.current(`/app/room/1/actionCardClick`, currentPlayer, cardNumber );
      }

      return newClickedActionCards;
    });
  };

  const handleMessageReceived = (message) => {
    console.log('Message received from server:', message);
    if (message.clickedActionCards) {
      setClickedActionCards(message.clickedActionCards);
    }
  };

  return (
    <Box
      height={420}
      width={700}
      mx={2}
      my={2}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' }}
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
      
      <Grid container spacing={{ xs: 2, md: 3 }} columns={5}>
        {clickedActionCards.map((playerNumber, index) => (
          <Grid item xs={3} sm={1} md={1} key={index}>
            <ActionCard
              cardNumber={index + 1}
              playerNumber={playerNumber}
              onClick={() => handleCardClick(index + 1)}
              sendMessage={sendMessageRef.current}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
