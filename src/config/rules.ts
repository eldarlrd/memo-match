const GRID_SIZES = [4, 6] as const;

type GridSize = (typeof GRID_SIZES)[number];

const GRID_LABELS: Record<GridSize, string> = {
  4: 'Standard',
  6: 'Large'
};

const TRIES_BY_SIZE: Record<GridSize, number> = {
  4: 10,
  6: 25
};

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

export {
  GRID_SIZES,
  type GridSize,
  GRID_LABELS,
  TRIES_BY_SIZE,
  CARDS,
  getCardImageUrl
};
