import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';

function ActionCard2({ cardNumber, index, sendMessage }) {
  const handleClick = () => {
    if (typeof sendMessage === 'function') {
      sendMessage(`ActionCard2: cardNumber ${cardNumber}, index ${index}`);
    }
  };

  return (
    <Card>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          image={`../../image/ActionCard/action${cardNumber}-${index}.png`}
          alt={`Action Card ${cardNumber}`}
        />
      </CardActionArea>
    </Card>
  );
}

ActionCard2.propTypes = {
  cardNumber: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

export default ActionCard2;
