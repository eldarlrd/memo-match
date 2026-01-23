import type { GridSize } from '@/config/types.ts';

// Grid Rules
const GRID_SIZES = [4, 6] as const;
const GRID_LABELS: Record<GridSize, string> = {
  4: 'Normal',
  6: 'Hard'
};

const TRIES_BY_SIZE: Record<GridSize, number> = Object.fromEntries(
  GRID_SIZES.map(size => [size, Math.floor(((size * size) / 2) * 3.5 - 3)])
) as Record<GridSize, number>;

// Card Rules
const SUITS = ['♠', '♥', '♦', '♣'];
const RANKS = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const CARDS = SUITS.flatMap(suit => RANKS.map(rank => `${rank}${suit}`));

const getCardImageUrl = (value: string): string => {
  const suitMap: Record<string, string> = {
    '♠': 'S',
    '♥': 'H',
    '♦': 'D',
    '♣': 'C'
  };

  const rank = value.slice(0, -1);
  const suitChar = value.slice(-1);
  const codeRank = rank === '10' ? '0' : rank;
  const codeSuit = suitMap[suitChar];

  return `https://deckofcardsapi.com/static/img/${codeRank}${codeSuit}.png`; // ! Check this
};

export { GRID_SIZES, GRID_LABELS, TRIES_BY_SIZE, CARDS, getCardImageUrl };
