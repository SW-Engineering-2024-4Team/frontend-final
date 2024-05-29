import React, { useState } from 'react';

// MUI 불러오기
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Tooltip from '@mui/material/Tooltip';

import { actionCardDetails } from '../../components/details/ActionCardDeatails';

/*
행동 카드 파라미터
-- cardNumber 카드 고유 번호
-- playerNumber 클릭한 플레이어 번호
-- onClick 카드 클릭 여부
*/

export default function ActionCard({ cardNumber, playerNumber, onClick }) {

  // 카드가 클릭된 상태
  const [isClicked, setIsClicked] = useState(playerNumber !== 0);


  const handleClick = () => {
    setIsClicked(!isClicked);
    if (typeof onClick === 'function') {
      onClick(cardNumber);
    }
  };


  const handleCardHover = (event) => {
    const card = event.currentTarget;
    card.style.transform = 'scale(1.1)';
    card.style.transition = 'transform 0.1s linear';
    card.style.boxShadow = '1px 4px 15px -3px rgba(0, 0, 0, 0.5)';
  };

  const handleCardLeave = (event) => {
    const card = event.currentTarget;
    card.style.transform = 'scale(1)';
    card.style.transition = 'transform 0.1s linear';
    card.style.boxShadow = 'none';
  };

  const cardClass = `action ${cardNumber} ${isClicked ? 'Y' : 'N'} `;
  const imagePath = `../../image/ActionCard/action${cardNumber}.png`;
  const coverImagePath = playerNumber ? `../../image/ClickedCard/clicked-action${playerNumber}.png` : null;

  return (

    <div>
    <Tooltip title={actionCardDetails[cardNumber-1]}>
      <Card 
        sx={{ maxWidth: 130 }} 
        onMouseEnter={handleCardHover}
        onMouseLeave={handleCardLeave}
      >
        <CardActionArea onClick={handleClick}>
          <div style={{ position: 'relative' }}>
            <CardMedia
              component="img"
              image={imagePath} // 기본 이미지만 표시
              alt={cardClass}
            />
            {isClicked && coverImagePath && (
              <img
                src={coverImagePath}
                alt="coverImage"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            )}
          </div>
        </CardActionArea>
      </Card>
    </Tooltip>
    </div>
  );
}