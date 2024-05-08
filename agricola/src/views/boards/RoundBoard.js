import React, { useState, useEffect } from 'react';
import RoundCard from '../cards/RoundCard'

// MUI 불러오기
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'


const ActionBoard = ({ cardCount, row }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const initializeCards = () => {
      const newCards = [];
      for (let i = 1; i <= cardCount; i++) {
        newCards.push({ number: i, isBack: true});
      }
      setCards(newCards);
    };

    initializeCards();
  }, [cardCount]);

  const handleCardClick = (index, number) => {
    const newCards = [...cards];
    newCards[index].isBack = false;
    setCards(newCards);
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
              onClick={handleCardClick}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActionBoard;
