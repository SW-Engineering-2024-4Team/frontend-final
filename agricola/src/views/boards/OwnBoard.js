import React, { useState } from 'react';
import Box from '@mui/material/Box';

import OwnCard from '../cards/OwnCard';
import { useDeckCard1, useDeckCard2, useDeckCard3, useDeckCard4 } from '@/components/CardContext';

const OwnBoard = ({ currentPlayer, handleClick }) => {
  const initialOwnCards = [
    { cardNumber: 1, cardType: 'work' },
    { cardNumber: 2, cardType: 'work' },
    { cardNumber: 3, cardType: 'work' },
    { cardNumber: 4, cardType: 'minor' },
    { cardNumber: 5, cardType: 'minor' },
    { cardNumber: 6, cardType: 'minor' },
  ];
  const [ownCards, setOwnCards] = useState(initialOwnCards); // 상태와 상태 설정 함수를 반환

  const { deckCard1, setDeckCard1 } = useDeckCard1();
  const { deckCard2, setDeckCard2 } = useDeckCard2();
  const { deckCard3, setDeckCard3 } = useDeckCard3();
  const { deckCard4, setDeckCard4 } = useDeckCard4();

  const handleOwnCardClick = ({ cardType, cardNumber }) => {
    setOwnCards((prevList) => prevList.filter((item) => item.cardNumber !== cardNumber));
    
    const clickedCard = ownCards.find((item) => item.cardNumber === cardNumber);
    
    if (clickedCard) {
      setDeckCard1((prevList) => [...prevList, clickedCard]);
    }
  };

  return (
    <Box
      height={150}
      width={650}
      display="flex"
      alignItems="flex-start"
      justifyContent="flex-start"
      gap={2}
      p={4}
      sx={{
        overflowX: 'auto',
        overflowY: 'hidden',
        '&::-webkit-scrollbar': { display: 'none' },
        '-ms-overflow-style': 'none',
        scrollbarWidth: 'none',
      }}
    >
      {ownCards.map((item) => {
        return (
          <Box 
            key={item.cardNumber} 
            sx={{ flex: '0 0 auto', mr: '-30px', my: '90px'}}
            onClick={() => handleOwnCardClick(item)}
            style={{ cursor: 'pointer' }}
          >
            <OwnCard
              cardType={item.cardType}
              cardNumber={item.cardNumber}
            />
          </Box>
        );
      })} 
    </Box>
  );
};

export default OwnBoard;
