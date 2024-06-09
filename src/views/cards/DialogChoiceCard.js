import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import ChoiceCard from './ChoiceCard';

// 컨텍스트 불러오기
import { useCardId, useCardType, useChoice } from '../../component/Context';

function DialogChoiceCard({ cardNumber, open, onClose, currentPlayer }) {
  const { cardId, setCardId } = useCardId();
  const { cardType, setCardType } = useCardType();
  const { choice, setChoice } = useChoice();

  const [cardName, setCardName] = useState('');
  const [count, setCount] = useState([]);
  const [rtn, setRtn] = useState([]);

  useEffect(() => {
    switch (cardNumber) {
      case 7:
        setCardName('농장 확장');
        setCount([1, 2, 3]);
        setRtn([0, 1, 2]);
        break;
      case 8:
        setCardName('회합 장소');
        setCount([1, 2, 3]);
        setRtn([0, 1, 2]);
        break;
      case 1:
        setCardName('곡식 활용');
        setCount([1, 2, 3]);
        setRtn([0, 1, 2]);
        break;
      case 4:
        setCardName('주요 설비');
        setCount([1, 2]);
        setRtn([true, false]);
        break;
      case 5:
        setCardName('기본 가족 늘리기');
        setCount([1, 2]);
        setRtn([true, false]);
        break;
      case 6:
        setCardName('농장 개조');
        setCount([1, 2]);
        setRtn([true, false]);
        break;
      default:
        setCardName('');
        setCount([]);
        setRtn([]);
        break;
    }
  }, [cardNumber]);

  const handleCardClick = (index) => {
    console.log(`${currentPlayer}번 플레이어가 추가선택카드 ${cardNumber}-${index}번을 클릭했습니다.`);

    setChoice(rtn[index - 1]);
    setCardType('choice');
    handleClose();
  };

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
      >
        {count.map((index) => (
          <ChoiceCard
            key={index}
            cardNumber={cardNumber}
            rtn={rtn[index - 1]}
            index={index}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </Box>
    </Dialog>
  );
}

export default DialogChoiceCard;
