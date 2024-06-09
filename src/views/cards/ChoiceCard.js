import React, { useState } from 'react';

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';

function ChoiceCard({ cardNumber, index, onClick }) {

  const handleClick = () => {
    if (typeof onClick === 'function') {
      onClick(index);
    }
  };

  return (
    <Card>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          image={`../../image/ChoiceCard/choice${cardNumber}-${index+1}.png`}
          alt={`ChoiceCard ${cardNumber}`}
        />
      </CardActionArea>
    </Card>
  );
}

export default ChoiceCard;
