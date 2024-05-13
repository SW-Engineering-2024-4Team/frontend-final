import React from 'react';

// MUI 불러오기
import { styled, useTheme } from '@mui/material/styles' 
import Box from '@mui/material/Box';

const ActionBoard = () => {
 
  return (
    <Box
      height={400}
      width={900}
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

export default ActionBoard;
