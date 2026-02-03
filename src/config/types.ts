import type { GRID_SIZES } from '@/config/rules.ts';

type GridSize = (typeof GRID_SIZES)[number];
type GameState = 'won' | 'lost' | 'playing';

interface GameOverProps {
  gameState: GameState;
  attempts: number;
  onRestart: () => void;
}

interface Card {
  id: number;
  value: string;
  imageUrl: string;
  isFlipped: boolean;
  isMatched: boolean;
}

interface CardProps {
  card: Card;
  onClick: () => void;
}

interface BoardProps {
  cards: Card[];
  gridSize: GridSize;
  isLoading: boolean;
  onCardClick: (index: number) => void;
}

interface FooterProps {
  isMuted: boolean;
  onReset: () => void;
  onToggleMute: () => void;
}

interface ControlsProps {
  gameState: GameState;
  triesLeft: number;
  currentGridSize: GridSize;
  onSizeChange: (size: GridSize) => void;
}

export type {
  GridSize,
  GameState,
  GameOverProps,
  Card,
  CardProps,
  BoardProps,
  FooterProps,
  ControlsProps
};
