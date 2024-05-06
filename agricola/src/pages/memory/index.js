import React from 'react';
import MemoryGame from '../../components/MemoryGame';

const Home = () => {
  const cardCount = 20;
  const row = 5;

  return (
    <div>
      <MemoryGame cardCount={cardCount} row={row} />
    </div>
  );
};

export default Home;
