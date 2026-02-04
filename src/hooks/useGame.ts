import { useState, useCallback, useMemo, useRef, useEffect } from 'react';

import { TRIES_BY_SIZE, CARDS, getCardImageUrl } from '@/config/rules.ts';
import type { Card, GameState, GridSize } from '@/config/types.ts';
import useSound from '@/hooks/useSound.ts';

const shuffle = <T>(array: T[]): T[] => {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = ~~(Math.random() * (i + 1));

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

const getStoredGridSize = (): GridSize => {
  const storedGridSize = localStorage.getItem('gridSize');

  return storedGridSize === '4' || storedGridSize === '6' ?
      (Number(storedGridSize) as GridSize)
    : 4;
};

const getStoredMuted = (): boolean => {
  const stored = localStorage.getItem('isMuted');

  return stored ? (JSON.parse(stored) as boolean) : false;
};

const useGame = (): {
  gridSize: 4 | 6;
  cards: Card[];
  flippedIndices: number[];
  triesLeft: number;
  isMuted: boolean;
  isLoading: boolean;
  gameState: GameState;
  handleCardClick: (index: number) => void;
  handleSizeChange: (size: GridSize) => void;
  initializeGame: (size: GridSize) => void;
  toggleMute: () => void;
} => {
  const [isMuted, setIsMuted] = useState(getStoredMuted);
  const [gridSize, setGridSize] = useState<GridSize>(getStoredGridSize);
  const [cards, setCards] = useState<Card[]>(() =>
    generateCards(getStoredGridSize())
  );
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [triesLeft, setTriesLeft] = useState<number>(
    TRIES_BY_SIZE[getStoredGridSize()]
  );
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

  const gameState = useMemo((): GameState => {
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

  const resetCardStates = useCallback((): void => {
    setCards(prev =>
      prev.map(card => ({ ...card, isFlipped: false, isMatched: false }))
    );
    setFlippedIndices([]);
  }, []);

  const initializeGame = useCallback(
    (size: GridSize): void => {
      sessionRef.current++;
      const currentSession = sessionRef.current;

      isResettingRef.current = true;
      setIsLoading(true);
      setGridSize(size);
      localStorage.setItem('gridSize', String(size));
      setTriesLeft(TRIES_BY_SIZE[size]);

      resetCardStates();
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
      }, 300);
    },
    [playSound, preloadImages, resetCardStates]
  );

  const scheduleIfCurrentSession = useCallback(
    (currentSession: number, delayMs: number, action: () => void): void => {
      setTimeout(() => {
        if (sessionRef.current !== currentSession) return;
        action();
      }, delayMs);
    },
    []
  );

  const handleCardClick = useCallback(
    (index: number): void => {
      const shouldIgnoreClick =
        gameState !== 'playing' ||
        isResettingRef.current ||
        isLoading ||
        flippedIndices.length === 2 ||
        cards[index].isFlipped ||
        cards[index].isMatched;

      if (shouldIgnoreClick) return;

      playSound('reveal');
      setCards(prev =>
        prev.map((card, i) =>
          i === index ? { ...card, isFlipped: true } : card
        )
      );

      const newFlippedIndices = [...flippedIndices, index];

      setFlippedIndices(newFlippedIndices);

      if (newFlippedIndices.length === 2) {
        const currentSession = sessionRef.current;
        const [firstIndex, secondIndex] = newFlippedIndices;

        if (cards[firstIndex].value === cards[secondIndex].value) {
          scheduleIfCurrentSession(currentSession, 500, () => {
            setCards(prev =>
              prev.map((card, i) =>
                i === firstIndex || i === secondIndex ?
                  { ...card, isMatched: true }
                : card
              )
            );

            setFlippedIndices([]);
          });
        } else {
          setTriesLeft(prev => prev - 1);
          scheduleIfCurrentSession(currentSession, 900, () => {
            playSound('reveal');
            setCards(prev =>
              prev.map((card, i) =>
                i === firstIndex || i === secondIndex ?
                  { ...card, isFlipped: false }
                : card
              )
            );

            setFlippedIndices([]);
          });
        }
      }
    },
    [
      cards,
      flippedIndices,
      gameState,
      isLoading,
      playSound,
      scheduleIfCurrentSession
    ]
  );

  const handleSizeChange = (size: GridSize): void => {
    initializeGame(size);
  };

  const toggleMute = (): void => {
    setIsMuted(prev => {
      const newValue = !prev;

      localStorage.setItem('isMuted', JSON.stringify(newValue));

      return newValue;
    });
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
