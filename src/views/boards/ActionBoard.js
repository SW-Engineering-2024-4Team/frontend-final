import React, { useState, useRef } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import ActionCard from '../cards/ActionCard';

// 컨텍스트 불러오기
import { useCardId, useCardType } from '../../component/Context';
import { usePlayerPostions } from '../../component/ReceiveContext';

export default function ActionBoard({ currentPlayer, onClick }) {

  const { cardId, setCardId } = useCardId();
  const { cardType, setCardType } = useCardType();
  const { playerPositions, setPlayerPositions } = usePlayerPostions();

  // 자원누적이 필요한 카드: 1,2,4,6,11,12,13 번
  const initialResourceActionCards = [1,2,null,1,null,1,null,null,null,null,1,1,1,null];
  const [resourceActionCards, setResourceActionCards] = useState(initialResourceActionCards);


  const handleCardClick = (cardNumber) => {
    console.log(`${currentPlayer}번 플레이어가 행동카드 ${cardNumber}번을 클릭했습니다.`);

    setCardId(cardNumber);
    setCardType('action');
    setResourceActionCards([0,4,null,2,null,2,null,null,null,null,2,2,2,null]);
    
    if (typeof onClick === 'function') {
      onClick(cardNumber, currentPlayer);
    }
  };

  return (
    <Box
      height={420}
      width={700}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ m: 0 }}
    >
      
      <Grid container spacing={{ xs: 2, md: 3 }} columns={5}>
        {playerPositions.slice(0,14).map((playerNumber, index) => (
          <Grid item xs={3} sm={1} md={1} key={index}>
            <ActionCard
              cardNumber={index + 1}
              playerNumber={playerNumber ? playerNumber : 0}
              onClick={() => handleCardClick(index + 1)}
              resource={resourceActionCards[index]}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
