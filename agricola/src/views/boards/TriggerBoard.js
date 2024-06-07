import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';

import TriggerCard from '../cards/TriggerCard';
import { useDeckCard1, useDeckCard2, useDeckCard3, useDeckCard4 } from '@/components/CardContext';


const TriggerBoard = ({ currentPlayer, clickedPlayer, handleClick }) => {
  const { deckCard1, setDeckCard1 } = useDeckCard1();
  const { deckCard2, setDeckCard2 } = useDeckCard2();
  const { deckCard3, setDeckCard3 } = useDeckCard3();
  const { deckCard4, setDeckCard4 } = useDeckCard4();

  const [color, setColor] = useState('');

  // useEffect 훅을 사용하여 clickedPlayer 값이 변경될 때만 색상을 업데이트
  useEffect(() => {
    if (clickedPlayer === 1) {
      setColor('rgba(0, 255, 0, 0.3)');
    } else if (clickedPlayer === 2) {
      setColor('rgba(255, 0, 0, 0.3)');
    } else if (clickedPlayer === 3) {
      setColor('rgba(0, 0, 255, 0.3)');
    } else {
      setColor('rgba(255, 255, 0, 0.3)');
    }
  }, [clickedPlayer]);

  return (
    <Box
      height={200}
      width={650}
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      backgroundColor={color}
      gap={4}
      p={2}
      sx={{
        m: 0,
        borderRadius: 2, 
        overflowX: 'auto',
        overflowY: 'hidden',
      }}
    >
      {deckCard1.map((item) => {
        return (
          <Box key={item.cardNumber} 
            sx={{ flex: '0 0 auto', my: '90px'}}
            // onClick={() => handleClick(item.cardNumber)}
            style={{ cursor: 'pointer' }}
          >
            <TriggerCard
              cardType={item.cardType}
              cardNumber={item.cardNumber}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default TriggerBoard;

