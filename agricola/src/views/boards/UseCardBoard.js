import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// 사용 가능한 카드의 CID받아서 카드 가져옴 
import MajorCard from '../cards/MajorCard';

const MajorBoard = () => {

  const handleCardClick = (index) => {
    setGrayscaleCards((prev) => {
      if (!prev.includes(index)) {
        return [...prev, index];
      }
      return prev;
    });
  };

  return (
    <Box
      height={420}
      width={480}
      mx={2}
      my={2}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' }}
    >
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => ( 
          <Grid item xs={2} sm={4} md={4} key={index}>
            <MajorCard 
              cardNumber={index + 1} 
              index={index} 
              onClick={handleCardClick} 
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MajorBoard;

