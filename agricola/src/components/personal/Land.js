import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import { CardMedia } from '@mui/material';

export default function Fence({ landNumber, state, pid, onClick, isActive, data }) {
  // 세로일 때는 width와 height를 바꿔줌

  const handleClick = () => {
    console.log(landNumber);
    if (onClick) {
      onClick();
    }
  };

  const ImagePath = state ? `../../image/Farm/${state}.png` : null;

  return (
    <Card>
    <CardActionArea sx={{
        width: '100px', // ratio를 width로 설정
        height: '100px', // ratio를 height로 설정
        backgroundColor: pid % 2 ? 'red' : 'blue', // pid에 따라 배경색 변경
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', 
        borderRadius: '4px', // border radius 설정
        borderWidth: '1px', // border width 설정
        borderStyle: 'solid', // border style 설정
        borderColor: 'black', // border color 설정
        opacity: isActive ? 1 : 0.1, // isActive 값에 따라 투명도 설정
        m : 0
      }}
      onClick={handleClick} >
        <img
          src={ImagePath}
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
      </CardActionArea>
    </Card>
  );
}
