import React from 'react';

// MUI 컴포넌트
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

/*
행동 카드 파라미터
-- number 카드 고유 번호
-- index 카드 순서
-- isTriger 가족 구성원 가능 여부
-- onClick 카드 클릭 여부
*/

const ActionCard = ({ number, index, isPossible, onClick }) => {

  const handleClick = () => {
    onClick(index, number);
  };
  
  const cardClass = `action ${number} ${isPossible ? 'Y' : 'N'} `
  const imagePath = `../../image/ActionCard/action${number}.png`

  return (
    <Card sx={{ maxWidth: 130 }}>
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

export default ActionCard;