import React from 'react';

// MUI 불러오기
import Grid from '@mui/material/Grid'

// 스타일 컴포넌트 불러오기
import ApexChartWrapper from '../../styles/libs/react-apexcharts'

// 보드판 불러오기
import ActionBoard from '../../views/boards/ActionBoard'
import MajorBoard from '../../views/boards/MajorBoard'
import MinorBoard from '../../views/boards/MinorBoard'
import PlayerBoard from '../../views/boards/PlayerBoard'

const Game = () => {
  const cardCount = 6;
  const row = 2;

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={9}>
          <div>
            <ActionBoard cardCount={cardCount} row={row} />
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <MajorBoard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <PlayerBoard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <MinorBoard />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  );
};

export default Game;
