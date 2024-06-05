import React, { useState } from 'react';

// MUI 컴포넌트
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

import { workCardDetails } from '../../components/details/WorkCardDeatails';

/*
보조 설비 카드 파라미터
-- number 카드 고유 번호
-- index 카드 순조
-- isTriger 카드 발동 여부
-- onClick 카드 클릭 여부
*/

const WorkCard = ({ index, cardNumber, isTriger, onClick }) => {
  
   // 카드가 클릭된 상태
  const [isClicked, setIsClicked] = useState(false);
 
  // 카드 클릭 시 호출되는 핸들러 함수 
  const handleClick = () => {
    if (isClicked == true){
      setIsClicked(true);
      setTimeout(() => {
        if (typeof onClick === 'function') {
          onClick(index, cardNumber);
        }
      }, 500); // 0.5초 후에 onClick 실행
    }
  };

  const handleCardHover = (event) => {
    const card = event.target.closest('.work-card');
    card.style.transform = 'scale(1.1) translateY(-45%)';
    card.style.transition = 'transform 0.1s linear';
    card.style.boxShadow = '1px 4px 15px -3px rgba(0, 0, 0, 0.5)';
    card.style.zIndex = '1';
  };

  const handleCardLeave = (event) => {
    const card = event.target.closest('.work-card');
    card.style.transform = 'none';
    card.style.transition = 'transform 0.1s linear';
    card.style.boxShadow = 'none';
    card.style.zIndex = '0';
  };

  const cardClass = `minor ${cardNumber} ${isClicked ? 'Y' : 'N'} `
  const imagePath = isClicked ? null :`../image/WorkCard/work${cardNumber}.png`

  return (
    <div>
    <Tooltip title={workCardDetails[cardNumber-1]}>
      <Card className="work-card" 
        sx={{
          maxWidth: 150,
          // position: 'relative',
        }}
        onClick={handleClick}
        onMouseEnter={handleCardHover}
        onMouseLeave={handleCardLeave}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image={imagePath}
            alt={cardClass}
          />
          <img
            src={imagePath}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          />
        </CardActionArea>
      </Card>
    </Tooltip>
    </div>
  );
};

export default WorkCard;