import React, { useState, useEffect } from 'react';

// MUI 불러오기
import Grid from '@mui/material/Grid';

// 보드판 불러오기
import ProfileBoard from '../views/boards/ProfileBoard';
import ActionBoard from '../views/boards/ActionBoard';
import RoundBoard from '../views/boards/RoundBoard';
import CurrentBoard from '../views/boards/CurrentBoard';
import ResourceBoard from '../views/boards/ResourceBoard';
import PersonalBoard from '../views/boards/PersonalBoard2';
import OwnBoard from '../views/boards/OwnBoard';
import TrigerBoard from '../views/boards/TrigerBoard';

// 팝업 버튼 불러오기
import MajorPopUp from '../components/buttons/MajorPopUp';
import SettingPopUp from '../components/buttons/SettingPopUp';
import ChatPopUp from '../components/buttons/ChatPopUp';

// 컨텍스트 관련 불러오기
import { PlayerProvider, usePlayer } from './PlayerContext';

function GamePage({currentPlayerName, currentPlayer}) {

  return (
    <Grid>
      <Grid container spacing={1}>
        <CurrentBoard />  
        <MajorPopUp />
        <SettingPopUp />
        <ChatPopUp />
      </Grid>

      <Grid container spacing={1}>
        <ProfileBoard />
        <ActionBoard currentPlayer={currentPlayer} />
        <RoundBoard currentPlayer={currentPlayer} />
      </Grid>

      <Grid container spacing={1}>
        <ResourceBoard />
        <PersonalBoard currentPlayer={currentPlayer} />
        <Grid item xs>
          <OwnBoard />
          <TrigerBoard />
        </Grid>
      </Grid>
    </Grid>
  );
}

// PlayerProvider로 GamePage를 래핑하여 currentPlayer 값을 제공
export default function App(props) {
  return (
    <PlayerProvider>
      <GamePage {...props} />
    </PlayerProvider>
  );
}
