import type { GRID_SIZES } from '@/config/rules.ts';

type GridSize = (typeof GRID_SIZES)[number];

interface GameOverProps {
  gameState: 'won' | 'lost' | 'playing';
  triesLeft: number;
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
  index: number;
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
  currentGridSize: GridSize;
  gameState: 'playing' | 'won' | 'lost';
  onSizeChange: (size: GridSize) => void;
  triesLeft: number;
}

export type {
  GridSize,
  GameOverProps,
  Card,
  CardProps,
  BoardProps,
  FooterProps,
  ControlsProps
};
