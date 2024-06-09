import React, { createContext, useContext, useState } from 'react';

// 컨텍스트 생성
const Context = createContext();

// 컨텍스트 제공자 컴포넌트
export const ComponentProvider = ({ children }) => {

  // 초기화
  const [playerList, setPlayerList] = useState([]);

  // 카드 선택
  const [cardId, setCardId] = useState('');
  const [playerId, setPlayerId] = useState('');

  // 추가 요청
  const [firstPlayer, setFirstPlayer] = useState('');
  const [animalType, setAnimalType] = useState('');
  const [positions, setPositions] = useState('');
  const [pos, setPos] = useState([]);
  const [choiceType, setChoiceType] = useState('');
  const [options, setOptions] = useState('');
  const [choice, setChoice] = useState(0);
  const [chosenResource, setChosenResource] = useState('');
  const [timing, setTiming] = useState('');
  const [actionType, setActionType] = useState('');
  const [currentRound, setCurrentRound] = useState('1');
  const [availableCards, setAvailableCards] = useState([]);
  const [exhangeableCards, setExhangeableCards] = useState([]);

  // 프론트 전용
  const [cardType, setCardType] = useState('');
  const [clickedPlayer, setClickedPlayer] = useState('');

  const [deckCard1, setDeckCard1] = useState([]);
  const [deckCard2, setDeckCard2] = useState([]);
  const [deckCard3, setDeckCard3] = useState([]);
  const [deckCard4, setDeckCard4] = useState([]);

  return (
    <Context.Provider 
    value={{ 
      playerList, setPlayerList,

      cardId, setCardId, 
      playerId, setPlayerId,

      animalType, setAnimalType,
      positions, setPositions,
      pos, setPos,
      choiceType, setChoiceType,
      options, setOptions,
      choice, setChoice,
      chosenResource, setChosenResource,
      timing, setTiming,
      actionType, setActionType,
      currentRound, setCurrentRound,
      availableCards, setAvailableCards,
      exhangeableCards, setExhangeableCards,

      cardType, setCardType, 
      clickedPlayer, setClickedPlayer, 
      firstPlayer, setFirstPlayer,

      deckCard1, setDeckCard1, 
      deckCard2, setDeckCard2, 
      deckCard3, setDeckCard3, 
      deckCard4, setDeckCard4 
    }}>
      {children}
    </Context.Provider>
  );
};


// 커스텀 훅

// 초기화

export const useExhangeableCards = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('exchangableCards must be used within a Provider');
  }
  return { exhangeableCards: context.exhangeableCards, setExhangeableCards: context.setExhangeableCards };
};

export const usePlayerList = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('playerList must be used within a Provider');
  }
  return { playerList: context.playerList, setPlayerList: context.setPlayerList };
};

// 카드 선택
export const useCardId = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('cardId must be used within a Provider');
  }
  return { cardId: context.cardId, setCardId: context.setCardId };
};

export const usePlayerId = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('playerId must be used within a Provider');
  }
  return { playerId: context.playerId, setPlayerId: context.setPlayerId };
};

// 추가 요청
export const useCurrentRound = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('currentRound must be used within a Provider');
  }
  return { currentRound: context.currentRound, setCurrentRound: context.setCurrentRound };
};

export const useAvailiableCards = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('availableCards must be used within a Provider');
  }
  return { availableCards: context.availableCards, setAvailableCards: context.setAvailableCards };
};

export const useFirstPlayer = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('firstPlayer must be used within a Provider');
  }
  return { firstPlayer: context.firstPlayer, setFirstPlayer: context.setFirstPlayer };
};

export const useAnimalType = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('animalType must be used within a Provider');
  }
  return { animalType: context.animalType, setAnimalType: context.setAnimalType };
};

export const usePositions = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('positions must be used within a Provider');
  }
  return { positions: context.positions, setPositions: context.setPositions };
};

export const usePos = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('pos must be used within a Provider');
  }
  return { pos: context.pos, setPos: context.setPos };
};

export const useChoiceType = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('choiceType must be used within a Provider');
  }
  return { choiceType: context.choiceType, setChoiceType: context.setChoiceType };
};

export const useOptions = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('options must be used within a Provider');
  }
  return { options: context.options, setOptions: context.setOptions };
}

export const useChoice = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('choice must be used within a Provider');
  }
  return { choice: context.choice, setChoice: context.setChoice };
};

export const useChosenResource = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('chosenResource must be used within a Provider');
  }
  return { chosenResource: context.chosenResource, setChosenResource: context.setChosenResource };
};

export const useTiming = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('timing must be used within a Provider');
  }
  return { timing: context.timing, setTiming: context.setTiming };
};

export const useActionType = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('actionType must be used within a Provider');
  }
  return { actionType: context.actionType, setActionType: context.setActionType };
};

// 프론트 전용
export const usePlayer = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('clickedPlayer must be used within a Provider');
  }
  return { clickedPlayer: context.clickedPlayer, setClickedPlayer: context.setClickedPlayer };
};

export const useCardType = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('cardType must be used within a Provider');
  }
  return { cardType: context.cardType, setCardType: context.setCardType };
};

export const useDeckCard1 = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useDeckCard1 must be used within a Provider');
  }
  return { deckCard1: context.deckCard1, setDeckCard1: context.setDeckCard1 };
};

export const useDeckCard2 = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useDeckCard2 must be used within a Provider');
  }
  return { deckCard2: context.deckCard2, setDeckCard2: context.setDeckCard2 };
};

export const useDeckCard3 = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useDeckCard3 must be used within a Provider');
  }
  return { deckCard3: context.deckCard3, setDeckCard3: context.setDeckCard3 };
};

export const useDeckCard4 = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useDeckCard4 must be used within a Provider');
  }
  return { deckCard4: context.deckCard4, setDeckCard4: context.setDeckCard4 };
};
