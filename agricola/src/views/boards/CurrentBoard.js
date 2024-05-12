import React, { useState, useEffect } from 'react';
import RoundCard from '../cards/RoundCard'

// MUI 불러오기
import Box from '@mui/material/Box';

const CurrentBoard = ({ cardCount, row }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const initializeCards = () => {
      const newCards = [];
      for (let i = 1; i <= cardCount; i++) {
        newCards.push({ number: i, isBack: true});
      }
      setCards(newCards);
    };

    initializeCards();
  }, [cardCount]);

  const handleCardClick = (index, number) => {
    const newCards = [...cards];
    newCards[index].isBack = false;
    setCards(newCards);
  };

  return (
    <Box
      height={100}
      width={540}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' }}
    >
    </Box>
  );
};

export default CurrentBoard;
