import React, { useEffect, useState } from 'react';
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

// 팝업 다이어로그 불러오기
import DialogChoiceCard from './buttons/DialogChoiceCard';
import WebSocketClient from './WebSocketClient'; // WebSocketClient 불러오기
import WebSocketPage from './WebSocketPage';

// 컨텍스트 관련 불러오기
import { usePlayer } from './PlayerContext';

function GamePage({ currentPlayer }) {
  const { clickedPlayer } = usePlayer();

  useEffect(() => {
    console.log('Clicked player:', clickedPlayer);
  }, [clickedPlayer]);

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // playerChoice 관련해서 백엔드에게 받는 내용
  const [choiceType, setChoiceType] = useState('');
  const [cardNumber, setCardNumber] = useState(8); // 눌렀던 카드 번호
  const [options, setOptions] = useState([]); // "options":["option1":"방 만들기 및 외양간 짓기","option2":"방 만들기만","option3":"외양간 짓기만"]
  const [playerId, setPlayerId] = useState(0); // 팝업을 띄어주는 플레이어 "playerId":"3"

  // 보드 정보 백엔드에게 받아오기
  const handleMessageReceived = (message) => {
    console.log('Message received from server:', message);
    if (message.choiceType) {
      setChoiceType(message.choiceType);
    }
    if (message.cardNumber) {
      setCardNumber(message.cardNumber);
    }
    if (message.options) {
      setOptions(message.options);
    }
    if (message.playerId) {
      setPlayerId(parseInt(message.playerId, 10));
    }
  };

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
      <WebSocketClient
        roomId="1"
        playerId={currentPlayer}
        onMessageReceived={handleMessageReceived}
      />
      {playerId === currentPlayer ? handleClick() : null}
      <button onClick={handleClick} >
      ChoiceCard TEST
      <DialogChoiceCard
          cardNumber={7}
          choiceType={"AndOr"}
          options={options}
          open={open}
          onClose={handleClose}
          currentPlayer={currentPlayer}
      />
      </button>
      <WebSocketPage 
        roomId="1" 
        message="아 진짜 아그리콜라 귀낯ㅎ"
      />
    </Grid>
  );
}

export default GamePage;
