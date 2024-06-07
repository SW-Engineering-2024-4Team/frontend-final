import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import TriggerBoard from './TriggerBoard';
import OwnBoard from './OwnBoard';

const CardDeckBoard = () => {
  const [ownList, setOwnList] = useState([
    { id: 1, type: 'minor', content: 'Minor Card 1' },
    { id: 2, type: 'work', content: 'Work Card 1' },
    { id: 3, type: 'minor', content: 'Minor Card 2' },
    { id: 4, type: 'work', content: 'Work Card 2' },
    { id: 5, type: 'minor', content: 'Minor Card 3' },
    { id: 6, type: 'work', content: 'Work Card 3' },
  ]);

  const [triggerList, setTriggerList] = useState([]);

  const handleOwnCardClick = (id) => {
    setOwnList((prevList) => prevList.filter((card) => card.id !== id));
    const clickedCard = ownList.find((card) => card.id === id);
    if (clickedCard) {
      setTriggerList((prevList) => [...prevList, clickedCard]);
    }
  };

  return (
    <Box
      alignItems="flex-start"
      justifyContent="flex-start"
      height={475}
      width={485}
    >
      <Modal >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
          bgcolor="background.paper"
          p={4}
        >
        </Box>
      </Modal>
      <TriggerBoard
        triggerList={triggerList}
        setTriggerList={setTriggerList}
      />
      <OwnBoard
        ownList={ownList}
        setOwnList={setOwnList}
        handleClick={handleOwnCardClick}
      />
    </Box>
  );
};

export default CardDeckBoard;

