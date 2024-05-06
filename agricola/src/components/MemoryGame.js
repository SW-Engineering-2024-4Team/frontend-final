import React, { useState, useEffect } from 'react';
import Card from './Card';

const MemoryGame = ({ cardCount, row }) => {
  const [cards, setCards] = useState([]);
  const [pair, setPair] = useState(-1);
  const [pairIndex, setPairIndex] = useState(-1);

  useEffect(() => {
    const initializeCards = () => {
      const newCards = [];
      for (let i = 0; i < cardCount; i++) {
        newCards.push({ number: i + 1, isBack: true, isMatched: false });
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
    } else {
      if (pair === number && pairIndex !== index) {
        // Matching
        const newCards = [...cards];
        newCards[index].isMatched = true;
        newCards[pairIndex].isMatched = true;
        setCards(newCards);
        setPair(-1);
        setPairIndex(-1);
      } else if (pairIndex !== index) {
        // Not matching
        const newCards = [...cards];
        newCards[index].isBack = true;
        newCards[pairIndex].isBack = true;
        setCards(newCards);
        setPair(-1);
        setPairIndex(-1);
      }
    }
  };

  return (
    <div className="placeholder" style={{ gridTemplateColumns: `repeat(${row}, 150px)` }}>
      {cards.map((card, index) => (
        <Card
          key={index}
          number={card.number}
          index={index}
          isBack={card.isBack}
          isMatched={card.isMatched}
          onClick={handleCardClick}
        />
      ))}
    </div>
  );
};

export default MemoryGame;
