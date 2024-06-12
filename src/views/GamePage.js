import React, { useEffect, useState, useRef } from 'react';

// 백엔드 통신부
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';

// MUI 불러오기
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

// 보드판 불러오기
import ProfileCard from "./cards/ProfileCard";
import ActionBoard from './boards/ActionBoard';
import RoundBoard from './boards/RoundBoard';
import CurrentBoard from './boards/CurrentBoard';
import ResourceBoard from './boards/ResourceBoard';
import PersonalBoard from './boards/PersonalBoard';
import OwnBoard from './boards/OwnBoard';
import TriggerBoard from './boards/TriggerBoard';
import MajorPopUp from './MajorPopUp';
import DialogChoiceCard from './cards/DialogChoiceCard';

// 컨텍스트 불러오기
import { useAnimalType, useCardId, useCardType, useChoice, useChoiceType, useChosenResource, useOptions, usePlayer, usePositions, usePos, useTiming } from '../component/Context';
import { usePlayerList, usePlayerId, useActionType, useFirstPlayer, useCurrentRound, useExhangeableCards } from '../component/Context';
import { usePlayerPostions, useValidPostions } from '../component/ReceiveContext';

function GamePage({ currentPlayer }) {

  const [stompClient, setStompClient] = useState(null);
  const [gameState, setGameState] = useState('');

  const { clickedPlayer, setClickedPlayer } = usePlayer(); // 프로필을 클릭한 사람
  const { cardId, setCardId } = useCardId(); // 클릭된 카드 아이디
  
  const { cardType, setCardType } = useCardType();
  const { actionType, setActionType } = useActionType();
  const { firstPlayer, setFirstPlayer } = useFirstPlayer(); 
  const { currentRound, setCurrentRound } = useCurrentRound();
  const { exhangeableCards, setExhangeableCards } = useExhangeableCards();
  
  const { playerList, setPlayerList } = usePlayerList();
  const { playerId, setPlayerId} = usePlayerId();
  const { playerPositions, setPlayerPositions } = usePlayerPostions();
  const { validPositions, setValidPositions } = useValidPostions();
  const { choiceType, setChoiceType } = useChoiceType();

  const {animalType, setAnimalType} = useAnimalType('');
  const {positions, setPositions} = usePositions('');
  const {pos, setPos} = usePos([]);
  const {options, setOptions} = useOptions('');
  const {choice, setChoice} = useChoice(0);

  const {chosenResource, setChosenResource} = useChosenResource('');
  const {timing, setTiming} = useTiming('');

    // 플레이어 리스트 초기화
    useEffect(() => {
      setPlayerList([
        { id: '1', name: 'Player 1' },
        { id: '2', name: 'Player 2' },
        { id: '3', name: 'Player 3' },
        { id: '4', name: 'Player 4' }
      ]);
  
    }, [setPlayerList]);

  const [currentPlayerID, setCurrentPlayerID] = useState(null);
  const [exchangeableCards, setExchangeableCards] = useState([]);
  const gameID = '1234'; // Example game ID
  
  useEffect(() => {
    connect();
    return () => {
      if (stompClient) {
        stompClient.deactivate();
      }
    };
  }, []);

  const connect = () => {
    const socket = new SockJS('http://localhost:8091/agricola-service');
    const client = new Client({
      webSocketFactory: () => socket,
      onConnect: (frame) => {
        console.log('Connected: ' + frame);
        client.subscribe(`/topic/room/1`, (message) => {
          handleGameState(JSON.parse(message.body));
        });

        setStompClient(client);
      },
    });

    client.activate();
  };

  // 초기화 정보 보내는 함수
  const startGame = () => {
    if (stompClient) {
      const payload = {
        roomNumber: gameID,
        players: playerList
      };
      console.log('Sending startGame message with payload:', payload);
      stompClient.publish({ destination: '/app/room/1/start', body: JSON.stringify(payload) });
    } else {
      console.error('stompClient is not initialized');
    }
  };

  // 선택한 카드 정보 보내는 함수
  const selectCard = (cardId) => {
    if (stompClient) {
      const payload = { currentPlayer: currentPlayer, cardNumber: cardId };
      console.log('Selecting card with ID:', cardId);
      stompClient.publish({ destination: '/app/room/1/actionCardClick', body: JSON.stringify(payload) });
    } else {
      console.error('stompClient is not initialized');
    }
  };

  const selectChoice = (choiceType, choice) => {
    if (stompClient) {
      const payload = { playerId: currentPlayer, choiceType: choiceType, choice: choice };
      console.log('Selecting choice:', choiceType, choice);
      stompClient.publish({ destination: '/app/room/1/playerChoice', body: JSON.stringify(payload) });
    } else {
      console.error('stompClient is not initialized');
    }
  }; 

  // 현재 차례인 플레이어와 가능한 액션 카드 칸 정보 받아오는 함수
  // 클릭된 액션 카드 칸 정보 받아오는 함수
  const handleGameState = (message) => {

    if (message.playerId) {
      console.log('현재 차례인 플레이어 정보', message.playerId);
      setPlayerId(message.playerId);
      setFirstPlayer(message.playerId);
    }
    
    if (message.currentRound) {
      console.log('현재 라운드', message.currentRound);
    }

    // if (message.openCards) {
    //   console.log('소유중인 카드들', message.openCards);
    // }

    // if (message.availableCards) {
    //   console.log('소유중인 카드들 중 선택 가능', message.availableCards);
    // }

    if (message.playerPositions) {
      console.log('플레이어 포지션', message.playerPositions);
      setPlayerPositions(message.playerPositions);
    }

    if (message.choiceType) {
      console.log('선택 타입', message.choiceType);
      setChoiceType(message.choiceType);
      handleChoiceClick();
    }

    if (message.options) {
      console.log('선택들', message.options);
      // setOptions(message.options);
    }

    if (message.playerId) {
      console.log('플레이어 아이디', message.playerId);
      setPlayerId(message.playerId);
    }

    if (message.resources) {
      console.log('플레이어 자원', message.resources);
      setResources(message.resources);
    }

    if (message.exchangeableCards) {
      console.log('교환 가능한 카드', message.exchangeableCards);
      setExchangeableCards(message.exchangeableCards);
    }

    if (message.validPositions) {
      console.log('개인 보드 유효한 위치', message.validPositions);
      setValidPositions(message.validPositions);
    }

    if (message.actionType && message.playerId) {
      console.log('개인 보드 행동 타입', message.actionType);
      setActionType(message.actionType);
      if(actionType == 'becomeFirstPlayer') {
        setFirstPlayer(message.playerId);
      }
    }

  };

  // ** 액션 카드 / 보드
 
  // 액션 카드 클릭시 
  const handleActionCardClick = (cardNumber) => {
    selectCard(cardNumber);
  };

  // 자원누적이 필요한 카드: 3 번
  const initialResourceRoundCards = [,,,1,,,];
  const [resourceRoundCards, setResourceRoundCards] = useState(initialResourceRoundCards);

  // 뒷면이면 0, 앞면이면 1
  const initialIsBackRoundCards = [1, 1, 1, 1, 1, 0];
  const [isBackRoundCards, setIsBackRoundCards] = useState(initialIsBackRoundCards);

  // 라운드 카드 클릭시
  const handleRoundCardClick = (cardNumber) => {
    selectCard(cardNumber+14);
  };

  // 선택 카드 팝업창 관리
  const [openChoice, setOpenChoice] = useState(false);
  const handleChoiceClick = () => { setOpenChoice(true); }; 
  const handleChoiceClose = () => { setOpenChoice(false); };

  // 선택 카드 클릭시 
  const handleChoiceCardClick = (index) => {
    selectChoice(choiceType, index);
  };

  // 주요 설비 카드 팝업창 관리
  const [openMajor, setOpenMajor] = useState(false);
  const handleMajorClick = () => { setOpenMajor(true); }; 
  const handleMajorClose = () => { setOpenMajor(false); };

  // useEffect(() => {
  //   if (stompClient && playerList.length === 4) {
  //     console.log("useEffect: Calling startGame");
  //     startGame();
  //   }
  // }, [stompClient]);

  // console.log("Component rendered!"); // 렌더링 2번되는거 확인
  
  return (
      <Grid 
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        >
          <DialogChoiceCard
              cardNumber={cardId}
              open={openChoice}
              onClose={handleChoiceClose}
              currentPlayer={currentPlayer}
              onClick={(index) => handleChoiceCardClick(index)}
          />
        <Box
          height={1010}
          width={120}
          sx={{
            backgroundImage: 'url("/image/background.png")',
            backgroundRepeat: "repeat",
            border: "3.3px solid #7B5B3C",
            borderRadius: 2,
            p: 2,
            my: 1,
            mx: 2
          }}
        >
          <Grid container spacing={1}>
            <Button id="startGameButton" onClick={startGame}>게임 시작 버튼</Button>
          
            <Typography>플레이어 프로필 클릭시 개인보드와 자원보드가 변경됩니다.</Typography>
            <ProfileCard playerNumber={1}  isFirstPlayer={firstPlayer === 1 ? true : false}/>
            <Typography>고도희</Typography>
            <ProfileCard playerNumber={2}  isFirstPlayer={firstPlayer === 2 ? true : false}/>
            <Typography>정지윤</Typography>
            <ProfileCard playerNumber={3}  isFirstPlayer={firstPlayer === 3 ? true : false}/>
            <Typography>김윤재</Typography>
            <ProfileCard playerNumber={4}  isFirstPlayer={firstPlayer === 4 ? true : false}/>
            <Typography>이수빈</Typography>

            <MajorPopUp 
              open={openMajor}
              onClose={handleMajorClose}
              currentPlayer={currentPlayer} 
            />
          </Grid>
        </Box>
        <Grid>
        <Box
          sx={{
            backgroundImage: 'url("/image/background.png")',
            backgroundRepeat: "repeat",
            border: "3.3px solid #7B5B3C",
            borderRadius: 2,
            p: 2,
            my: 1,
          }}
        >
          <Grid container spacing={1}>
            <CurrentBoard 
              currentRound={currentRound}
              currentPlayer={currentPlayer} 
              turnPlayer={playerId}
            />
          </Grid>
        </Box>
        <Box
          sx={{
            backgroundImage: 'url("/image/background.png")',
            backgroundRepeat: "repeat",
            border: "3.3px solid #7B5B3C",
            borderRadius: 2,
            p: 2,
            my: 1,
          }}
        >
        <Grid container spacing={1} >
          <ActionBoard 
            currentPlayer={currentPlayer} 
            onClick={(cardNumber) => handleActionCardClick(cardNumber)}
            
          />
          <RoundBoard 
            currentPlayer={currentPlayer} 
            onClick={(cardNumber) => handleRoundCardClick(cardNumber)}
            resourceRoundCards={resourceRoundCards}
            isBackRoundCards={isBackRoundCards}
          />
        </Grid>

        <Grid container spacing={1} >
          <PersonalBoard 
            currentPlayer={currentPlayer} 
            clickedPlayer={clickedPlayer} 
          />
          <Grid> 
            <TriggerBoard currentPlayer={currentPlayer} clickedPlayer={clickedPlayer} />
            <OwnBoard currentPlayer={currentPlayer} />
          </Grid>
        </Grid>
      {cardId} {cardType} card
        </Box>
        </Grid>
         <Grid>
            <ResourceBoard playerNumber={1} />
            <ResourceBoard playerNumber={2} />
            <ResourceBoard playerNumber={3} />
            <ResourceBoard playerNumber={4} />
          </Grid>
      </Grid>
  );
}

export default GamePage;
