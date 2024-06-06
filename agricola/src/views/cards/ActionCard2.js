import React from 'react';

// MUI 컴포넌트
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const ActionCard2 = ({ cardNumber, index, isTriger, sendMessage }) => {

  const handleClick = () => {
    console.log('Card clicked'); // Check if click is registered
    if (typeof sendMessage === 'function') {
      console.log('sendMessage is a function'); // Confirm sendMessage is a function
      sendMessage(`${cardNumber}-${index}`);
      console.log(`${cardNumber}-${index}`);
    } else {
      console.log('sendMessage is not a function or not defined'); // Alert if sendMessage is not a function
    }
  };
  
  const cardClass = `major ${cardNumber} ${isTriger ? 'Y' : 'N'} `;
  const imagePath = `../../image/ActionCard/action${cardNumber}-${index}.png`;

  return (
    <Card sx={{ maxWidth: 130, borderRadius: '8px' }}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          image={imagePath}
          alt={cardClass}
        />
      </CardActionArea>
    </Card>
  );
};

export default ActionCard2;
