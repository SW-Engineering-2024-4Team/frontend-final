import React from 'react';

const Card = ({ number, index, isBack, isMatched, onClick }) => {
  const handleClick = () => {
    if (isBack) {
      onClick(index, number);
    }
  };

  return (
    <div
      className={`card ${isBack ? 'back' : 'front'} ${isMatched ? 'matched' : ''}`}
      onClick={handleClick}
      data-number={`🧡${number}`}
      data-index={index}
    ></div>
  );
};

export default Card;
