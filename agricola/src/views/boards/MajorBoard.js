import React from 'react';

// MUI 불러오기
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles' 

// 보드 컴포넌트 불러오기
import Board from '../../components/Board' 

// 라운드 카드 불러오기
import RoundCard from '../cards/RoundCard'

const ActionBoard = () => {
   // 다크모드 세팅하기
   const theme = useTheme()
   const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'
 
  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Typography variant='h6'>주요 설비 카드 보드판 입니다.</Typography>
      </CardContent>
    </Card>
  );
};

export default ActionBoard;
