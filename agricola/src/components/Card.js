import React from 'react';
import './card.css';

const Card = ({ number, index, isBack, isMatched, onClick }) => {
  const handleClick = () => {
    onClick(index, number);
  };
  
  const cardClass = `card ${isBack ? 'back' : 'front'} ${isMatched ? 'matched' : ''}`;

  return (
    <div
      className={cardClass}
      onClick={handleClick}
      data-number={`🧡${number}`}
      data-index={index}
    >
      <div className="card-content">{isBack ? null : `🧡${number}`}</div>
    </div>
  );
};

export default Card;
