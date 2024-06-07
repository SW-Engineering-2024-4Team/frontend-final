import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

import ChoiceCard from '../../views/cards/ChoiceCard';
import WebSocketClient from '../../components/WebSocketClient'; // WebSocketClient 불러오기


function DialogChoiceCard(props) {
  const { cardNumber, choiceType, options, open, onClose, currentPlayer } = props;

  const choice = true;
  const [cardName, setCardName] = useState('');
  const [count, setCount] = useState([]);

  const sendMessageRef = useRef(null);

  // 카드 클릭시 백엔드에게 메시지 전송
  const handleCardClick = (index) => {
    // setClickedChoiceCards((prev) => {
      // const newClickedChoiceCards = [...prev];
      // newClickedChoiceCards[cardNumber - 1] = currentPlayer;
      console.log(`${currentPlayer}번 플레이어가 추가선택카드 ${cardNumber}-${index}번을 클릭했습니다.`);
      const player = currentPlayer;

      // 소켓 메시지 전송
      if (sendMessageRef.current) {
        const messageJSON = JSON.stringify({ player, choiceType, choice });
        sendMessageRef.current(`/app/room/1/playerChoice`, messageJSON );
        console.log('SEND CHOICE CARD')
      }

      // return newClickedActionCards;
    // });
  };

  useEffect(() => {
    if (cardNumber === 7) {
      setCardName('농장 확장');
      setCount([1, 2, 3]);
    } else if (cardNumber === 8) {
      setCardName('회합 장소');
      setCount([1, 2, 3]);
    } else if (cardNumber === 1) {
      setCardName('곡식 활용');
      setCount([1, 2, 3]);
    } else if (cardNumber === 4) {
      setCardName('주요 설비');
      setCount([1, 2]);
    } else if (cardNumber === 5) {
      setCardName('기본 가족 늘리기');
      setCount([1, 2]);
    } else if (cardNumber === 6) {
      setCardName('농장 개조');
      setCount([1, 2]);
    }
  }, [cardNumber]);

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{cardName}</DialogTitle>
      <Box
        mx={2}
        my={2}
        display="flex"
        alignItems="center"
        gap={4}
        p={2}
        sx={{ border: '2px solid grey' }}
      >
        <WebSocketClient
        roomId="1"
        playerId={currentPlayer}
        ref={(client) => {
          if (client) {
            sendMessageRef.current = client.sendMessage;
          }
        }}
      />
        {count.map((index) => (
          <ChoiceCard
            key={index}
            cardNumber={cardNumber}
            index={index}
            sendMessage={sendMessageRef.current}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </Box>
    </Dialog>
  );
}

DialogChoiceCard.propTypes = {
  cardNumber: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

export default DialogChoiceCard;
