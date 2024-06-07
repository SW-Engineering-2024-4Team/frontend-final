import React, { useEffect } from 'react';
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
import { usePlayer } from './PlayerContext';

function GamePage({ currentPlayer }) {
  const { clickedPlayer } = usePlayer();

  useEffect(() => {
    console.log('Clicked player:', clickedPlayer);
  }, [clickedPlayer]);

  return (
    <Grid>
      <Grid container spacing={1}>
        <CurrentBoard />
        <MajorPopUp currentPlayer={currentPlayer} />
        <SettingPopUp />
        <ChatPopUp currentPlayer={currentPlayer} />
      </Grid>

      <Grid container spacing={1}>
        <ProfileBoard clickedPlayer={clickedPlayer} />
        <ActionBoard currentPlayer={currentPlayer} />
        <RoundBoard currentPlayer={currentPlayer} />
      </Grid>

      <Grid container spacing={1}>
        <ResourceBoard clickedPlayer={clickedPlayer} />
        <PersonalBoard currentPlayer={currentPlayer} clickedPlayer={clickedPlayer} />
        <Grid item xs>
          <OwnBoard currentPlayer={currentPlayer} clickedPlayer={clickedPlayer} />
          <TrigerBoard currentPlayer={currentPlayer} clickedPlayer={clickedPlayer} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default GamePage;
