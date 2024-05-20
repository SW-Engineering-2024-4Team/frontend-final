import React, { useState } from 'react';

// MUI 불러오기
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';

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

  const cardClass = `action ${cardNumber} ${isClicked ? 'Y' : 'N'} `;
  const imagePath = `../../image/ActionCard/action${cardNumber}.png`;
  const coverImagePath = playerNumber ? `../../image/ClickedCard/clicked-action${playerNumber}.png` : null;

  return (
    <Card sx={{ maxWidth: 130 }}>
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
  );
}