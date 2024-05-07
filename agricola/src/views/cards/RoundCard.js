import React from 'react';

const RoundCard = ({ cardName, index, isBack, isMatched, onClick }) => {
  const handleClick = () => {
    onClick(index, cardName);
  };
  
  const cardClass = `card ${isBack ? 'back' : 'front'} ${isMatched ? 'matched' : ''}`;

  return (
    <div
      className={cardClass}
      onClick={handleClick}
      data-name={cardName}
      data-index={index}
    >
      <div className="card-content">
        {isBack ? null : <img src={require(`../../image/RoundCard/${cardName}.png`).default} alt={cardName} />}
      </div>
    </div>
  );
};

export default RoundCard;
