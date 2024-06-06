import React from 'react';

// MUI 컴포넌트
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';


const ActionCard2 = ({ cardNumber, index, isTriger, onClick }) => {

  const handleClick = () => {
    onClick(cardNumber, index);
  };
  
  const cardClass = `major ${cardNumber} ${isTriger ? 'Y' : 'N'} `
  const imagePath = `../../image/ActionCard/action${cardNumber}-${index}.png`

  return (
        <Card sx={{ maxWidth: 130, borderRadius: '8px' }}>
            <CardActionArea>
                <CardMedia
                component="img"
                image={imagePath}
                alt={cardClass}
                onClick={handleClick}
                />
            </CardActionArea>
        </Card>
  );
};

export default ActionCard2;