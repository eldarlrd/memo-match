import { useState, useCallback, useMemo, useRef, useEffect } from 'react';

import { TRIES_BY_SIZE, CARDS, getCardImageUrl } from '@/config/rules.ts';
import type { Card, GridSize } from '@/config/types.ts';
import useSound from '@/hooks/useSound.ts';

const shuffle = <T>(array: T[]): T[] => {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
};

const generateCards = (size: GridSize): Card[] => {
  const numPairs = (size * size) / 2;
  const selectedCards = shuffle([...CARDS]).slice(0, numPairs);

  return shuffle([...selectedCards, ...selectedCards]).map((value, index) => ({
    id: index,
    value,
    imageUrl: getCardImageUrl(value),
    isFlipped: false,
    isMatched: false
  }));
};

const useGame = (): {
  gridSize: 4 | 6;
  cards: Card[];
  flippedIndices: number[];
  triesLeft: number;
  isMuted: boolean;
  isLoading: boolean;
  gameState: 'playing' | 'won' | 'lost';
  handleCardClick: (index: number) => void;
  handleSizeChange: (size: GridSize) => void;
  initializeGame: (size: GridSize) => void;
  toggleMute: () => void;
} => {
  const [gridSize, setGridSize] = useState<GridSize>(4);
  const [cards, setCards] = useState<Card[]>(() => generateCards(4));
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [triesLeft, setTriesLeft] = useState<number>(TRIES_BY_SIZE[4]);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { playSound } = useSound(isMuted);
  const hasPlayedEndSound = useRef(false);
  const sessionRef = useRef(0);
  const isResettingRef = useRef(false);

  const preloadImages = useCallback((newCards: Card[]) => {
    const imageUrls = Array.from(new Set(newCards.map(c => c.imageUrl)));

    return Promise.all(
      imageUrls.map(
        url =>
          new Promise(resolve => {
            const img = new Image();

            img.src = url;
            img.onload = resolve;
            img.onerror = resolve;
          })
      )
    );
  }, []);

  useEffect(() => {
    void preloadImages(cards);
  }, [cards, preloadImages]);

  const gameState = useMemo((): 'playing' | 'won' | 'lost' => {
    if (cards.length > 0 && cards.every(card => card.isMatched)) return 'won';
    if (triesLeft === 0 && flippedIndices.length === 0) return 'lost';

    return 'playing';
  }, [cards, triesLeft, flippedIndices]);

  useEffect(() => {
    if (gameState === 'playing') hasPlayedEndSound.current = false;
    else if (!hasPlayedEndSound.current) {
      playSound(gameState);
      hasPlayedEndSound.current = true;
    }
  }, [gameState, playSound]);

  const initializeGame = useCallback(
    (size: GridSize): void => {
      sessionRef.current++;
      const currentSession = sessionRef.current;

      isResettingRef.current = true;
      setIsLoading(true);
      setGridSize(size);
      setTriesLeft(TRIES_BY_SIZE[size]);

      setCards(prev =>
        prev.map(card => ({ ...card, isFlipped: false, isMatched: false }))
      );
      setFlippedIndices([]);
      playSound('reset');

      const loadNewCards = async (): Promise<void> => {
        if (sessionRef.current !== currentSession) return;
        const newCards = generateCards(size);

        await preloadImages(newCards);

        if (sessionRef.current !== currentSession) return;

        setCards(newCards);
        isResettingRef.current = false;
        setIsLoading(false);
      };

      setTimeout(() => {
        void loadNewCards();
      }, 500);
    },
    [playSound, preloadImages]
  );

  const handleCardClick = (index: number): void => {
    if (
      gameState !== 'playing' ||
      isResettingRef.current ||
      isLoading ||
      flippedIndices.length === 2 ||
      cards[index].isFlipped ||
      cards[index].isMatched
    ) {
      return;
    }

    playSound('reveal');
    const newCards = [...cards];

    newCards[index].isFlipped = true;
    setCards(newCards);

    const newFlippedIndices = [...flippedIndices, index];

    setFlippedIndices(newFlippedIndices);

    if (newFlippedIndices.length === 2) {
      const currentSession = sessionRef.current;
      const [firstIndex, secondIndex] = newFlippedIndices;

      if (cards[firstIndex].value === cards[secondIndex].value) {
        setTimeout(() => {
          if (sessionRef.current !== currentSession) return;
          setCards(prev => {
            const updated = [...prev];

            if (updated[firstIndex] && updated[secondIndex]) {
              updated[firstIndex].isMatched = true;
              updated[secondIndex].isMatched = true;
            }

            return updated;
          });
          setFlippedIndices([]);
        }, 500);
      } else {
        setTriesLeft(prev => prev - 1);
        setTimeout(() => {
          if (sessionRef.current !== currentSession) return;
          setCards(prev => {
            const updated = [...prev];

            if (updated[firstIndex] && updated[secondIndex]) {
              updated[firstIndex].isFlipped = false;
              updated[secondIndex].isFlipped = false;
            }

            return updated;
          });
          setFlippedIndices([]);
        }, 1000);
      }
    }
  };

  const handleSizeChange = (size: GridSize): void => {
    initializeGame(size);
  };

  const toggleMute = (): void => {
    setIsMuted(prev => !prev);
  };

  return {
    gridSize,
    cards,
    flippedIndices,
    triesLeft,
    isMuted,
    isLoading,
    gameState,
    handleCardClick,
    handleSizeChange,
    initializeGame,
    toggleMute
  };
};

export default useGame;
