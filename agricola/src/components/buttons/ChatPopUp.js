import React, { useState, useEffect } from 'react';

// MUI 불러오기
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

const CurrentBoard = () => {
  const count = 2;
  return (
    <Box
      height={50}
      width={80}
      mx={1}
      my={2}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' }}
    >
      <h2> 채팅 </h2>
    </Box>
  );
};

export default CurrentBoard;
