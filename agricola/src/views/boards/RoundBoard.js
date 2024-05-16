import React, { useState, useEffect } from 'react';
import RoundCard from '../cards/RoundCard'

// MUI 불러오기
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const RoundBoard = () => {
  const [cards, setCards] = useState([]);

  const handleClick = (index, number) => {
    const newCards = [...cards];
    newCards[index].isBack = false;
    setCards(newCards);
  };

  return (
    <Box
      height={420}
      width={650}
      mx={2}
      my={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' }}
    >
      <div className="placeholder" >
        {cards.map((card, index) => (
          <RoundCard
            key={index}
            number={card.number}
            index={index}
            isBack={card.isBack}
            onClick={handleClick}
          />
        ))}
      </div>
      <Grid container justifyContent="center" alignItems="center" spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 4, md: 4 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={2} md={2} key={index}>
            <RoundCard  number={index+1} index={index} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RoundBoard;
