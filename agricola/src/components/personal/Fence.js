import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';

export default function Fence({ ratio, currentPlayer, isVertical, isActive, pid, onClick }) {
  const width = isVertical ? '14px' : '104px';
  const height = isVertical ? '104px' : '14px';

  const [color, setColor] = useState('');

  // useEffect 훅을 사용하여 currentPlayer 값이 변경될 때만 색상을 업데이트
  useEffect(() => {
    if (currentPlayer === 1) {
      setColor('blue');
    } else if (currentPlayer === 2) {
      setColor('green');
    } else if (currentPlayer === 3) {
      setColor('red');
    } else {
      setColor('yellow');
    }
  }, [currentPlayer]);

  const handleClick = () => {
    console.log(ratio);
    if (onClick) {
      onClick();
    }
  };

  return (
    <Card>
      <CardActionArea sx={{
        width: width,
        height: height,
        backgroundColor: color,
        borderRadius: '4px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'black',
        opacity: isActive ? 1 : 0.1,
        m: 0,
      }}
      onClick={handleClick} />
    </Card>
  );
}
