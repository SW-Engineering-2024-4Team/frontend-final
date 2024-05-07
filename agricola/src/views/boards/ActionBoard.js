import React from 'react';

// MUI 불러오기
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles' 

// 라운드 카드 불러오기
import RoundCard from '../cards/RoundCard'

const ActionBoard = () => {
   // 다크모드 세팅하기
   const theme = useTheme()
   const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'
 
  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Typography variant='h6'>Action Board 입니다.</Typography>
        <Grid container spacing={6}>
          <Grid item xs={12} md={3}>
            <RoundCard /> 
          </Grid>
          <Grid item xs={12} md={3}>
            <RoundCard /> 
          </Grid>
          <Grid item xs={12} md={3}>
            <RoundCard /> 
          </Grid>
          <Grid item xs={12} md={3}>
            <RoundCard /> 
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ActionBoard;
