import React from 'react';

// MUI 불러오기
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles' 

// 보드 컴포넌트 불러오기
import Board from '../../components/Board' 
import Box from '@mui/material/Box';

// 라운드 카드 불러오기
import RoundCard from '../cards/RoundCard'

const PersonalBoard = () => {
   // 다크모드 세팅하기
   const theme = useTheme()
   const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'
 
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

export default PersonalBoard;
