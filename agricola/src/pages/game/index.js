import React from 'react';

// MUI 불러오기
import Grid from '@mui/material/Grid'

// 보드판 불러오기
import PlayerBoard from '../../views/boards/ProfileBoard'
import ActionBoard from '../../views/boards/ActionBoard';
import RoundBoard from '../../views/boards/RoundBoard'
import CurrentBoard from '../../views/boards/CurrentBoard'
import MajorBoard from '../../views/boards/MajorBoard'
import ResourceBoard from '../../views/boards/ResourceBoard'
import PersonalBoard from '../../views/boards/PersonalBoard';
import OwnBoard from '../../views/boards/OwnBoard'
import TrigerBoard from '../../views/boards/TrigerBoard'


const Game = () => {
  const cardCount = 6;
  const row = 3;

  return (
    <div>
      <Grid container spacing = {3}>
        <Grid item xs >
          <div>
            <PlayerBoard name={'one'} profileImage={`../image/Profile/profile1.png`} profileNum={'0'} isFirstPlayer={true}/>
            <PlayerBoard name={'two'} profileImage={`../image/Profile/profile2.png`} profileNum={'1'} isFirstPlayer={false}/>
            <PlayerBoard name={'three'} profileImage={`../image/Profile/profile3.png`} profileNum={'2'} isFirstPlayer={false}/>
            <PlayerBoard name={'four'} profileImage={`../image/Profile/profile4.png`} profileNum={'3'} isFirstPlayer={false}/>
          </div>
        </Grid>
        <Grid item xs >
          <div>
            <ActionBoard />
          </div>
        </Grid>
        <Grid item xs >
          <div>
            <RoundBoard />
          </div>
        </Grid>
        <Grid item xs >
          <div>
            <CurrentBoard />
          </div>
          <div> 
            <MajorBoard />
          </div>
        </Grid>
      </Grid>    
      <Grid container spacing = {3}>
        <Grid item xs >
          <ResourceBoard />
        </Grid>
        <Grid item xs >
          <PersonalBoard />
        </Grid>
        <Grid item xs >
          <OwnBoard />
          <TrigerBoard />
        </Grid>
      </Grid>
    </div>
  );
};

export default Game;
