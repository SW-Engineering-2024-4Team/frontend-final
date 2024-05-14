import React from 'react';

// MUI 불러오기
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import ActionCard from '../cards/ActionCard';

const ActionBoard = () => {
 
  return (
    <Box
      height={590}
      width={400}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' }}
    >
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <ActionCard  number={index+1} index={index} />
            </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ActionBoard;
