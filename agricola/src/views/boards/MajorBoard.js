import React from 'react';

// MUI 불러오기
import { styled, useTheme } from '@mui/material/styles' 
import Box from '@mui/material/Box';

// 보드 컴포넌트 불러오기
import Board from '../../components/Board' 

// 라운드 카드 불러오기
import RoundCard from '../cards/RoundCard'

const MajorBoard = () => {
   // 다크모드 세팅하기
   const theme = useTheme()
   const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'
 
  return (
    <Box
      height={420}
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

export default MajorBoard;
