
// const MajorCard = ({ index, cardNumber, isTriger, onClick, isGrayscale }) => {
//   const [isClicked, setIsClicked] = useState(false);

//   const handleClick = () => {
//     setIsClicked(!isClicked);
//     if (!isGrayscale) {
//       onClick(index, cardNumber);
//     }
//   };

//   const cardClass = `major ${cardNumber} ${isTriger ? 'Y' : 'N'}`;
//   const imagePath = `../../image/MajorCard/major${cardNumber}.png`;

//   return (
//     <Tooltip title={majorCardDetails[cardNumber - 1]}>
//       <Card sx={{ maxWidth: 130 }}>
//         <CardActionArea>
//           <CardMedia
//             component="img"
//             height="200"
//             image={imagePath}
//             alt={cardClass}
//             onClick={handleClick}
//             style={{
//               filter: isGrayscale ? 'grayscale(100%)' : 'none'
//             }}
//           />
//         </CardActionArea>
//       </Card>
//     </Tooltip>
//   );
// };

import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import { majorCardDetails } from '../../components/details/MajorCardDeatails';

/*
주요 설비 카드 파라미터
-- index 카드 순서
-- cardNumber 카드 고유 번호
-- isGrayscale 흑백 여부
-- onClick 카드 클릭 이벤트
*/

const MajorCard = ({ index, cardNumber, isGrayscale, onClick }) => {
  // const [isGrayscale, setIsGrayscale] = useState(false);

  // const [isClicked, setIsClicked] = useState(false);

  // const handleClick = () => {
  //   setIsClicked(!isClicked);
  //   if (!isGrayscale) {
  //     onClick(index, cardNumber);
  //   }
  // };

  const handleClick = () => {
    if (typeof onClick === 'function') {
      onClick(index, cardNumber);
      // isGrayscale = true;
    } else {
      console.error('onClick is not a function');
    }
  };
  
  const cardClass = `major ${cardNumber} ${isGrayscale ? 'Y' : 'N'} `;
  const imagePath = `../../image/MajorCard/major${cardNumber}.png`;

  return (
    <Tooltip title={majorCardDetails[cardNumber - 1]}>
      <Card sx={{ maxWidth: 130, filter: isGrayscale ? 'grayscale(100%)' : 'none' }}>
        <CardActionArea onClick={handleClick}>
          <CardMedia
            component="img"
            height="200"
            image={imagePath}
            alt={cardClass}
            // style={{
            //   filter: isGrayscale ? 'grayscale(100%)' : 'none'
            // }}
          />
        </CardActionArea>
      </Card>
    </Tooltip>
  );
};

export default MajorCard;
