import React, { useState, useEffect } from 'react';

// MUI 불러오기
import Box from '@mui/material/Box';

const CurrentBoard = ({currentRound, currentPlayer, turnPlayer}) => {
  return (
    <Box
      height={38}
      width={1320}
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={4}
      p={2}
    >
      <h1 style={{ color: '#FFFFFF' }}> 현재 라운드: {currentRound} / 14</h1>
      <h2> 당신은 {currentPlayer} 번 플레이어 입니다. </h2>
      <h2> 지금은 {turnPlayer} 번 플레이어 차례 입니다. </h2>
      {/* <Alert severity="success">This is a success Alert.</Alert>   */}
    </Box>
  );
};

export default CurrentBoard;
