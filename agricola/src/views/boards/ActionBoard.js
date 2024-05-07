import React, { useState, useEffect } from 'react';
import RoundCard from '../cards/RoundCard';

// MUI 불러오기
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

const ActionBoard = ({ cardCount, row }) => {
  const [cards, setCards] = useState([]);
  const [pair, setPair] = useState(-1);
  const [pairIndex, setPairIndex] = useState(-1);

  useEffect(() => {
    const initializeCards = () => {
      const newCards = [];
      for (let i = 1; i <= cardCount / 2; i++) {
        newCards.push({ number: i, isBack: true, isMatched: false });
        newCards.push({ number: i, isBack: true, isMatched: false });
      }
      for (let i = newCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newCards[i], newCards[j]] = [newCards[j], newCards[i]];
      }
      setCards(newCards);
    };
  
    initializeCards();
  }, [cardCount]);
  
  const handleCardClick = (index, number) => {
    if (pair < 0) {
      setPair(number);
      setPairIndex(index);
      const newCards = [...cards];
      newCards[index].isBack = false;
      setCards(newCards);
    } 
    else {
      if (pair === number && pairIndex !== index) {
        // Matching
        const newCards = [...cards];
        newCards[index].isMatched = true;
        newCards[pairIndex].isMatched = true;
        newCards[index].isBack = false;
        setCards(newCards);
        setPair(-1);
        setPairIndex(-1);
      } else if (pairIndex !== index) {
        // Not matching
        const newCards = [...cards];
        newCards[index].isBack = false;
        setCards(newCards);
        setTimeout(() => {
          newCards[index].isBack = true;
          newCards[pairIndex].isBack = true;
          setCards(newCards);
          setPair(-1);
          setPairIndex(-1);
        }, 700);
      }
    }
  };

  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <div className="placeholder" style={{ gridTemplateColumns: `repeat(${row}, 150px)` }}>
          {cards.map((card, index) => (
            <RoundCard
              key={index}
              number={card.number}
              index={index}
              isBack={card.isBack}
              isMatched={card.isMatched}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActionBoard;
