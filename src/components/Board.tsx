import { type ReactElement } from 'react';

import { Card } from '@/components/Card.tsx';
import { type GridSize } from '@/config/rules.ts';
import { type Card as CardType } from '@/hooks/useGame.ts';
import * as styles from '@/styles/app.css.ts';

interface BoardProps {
  cards: CardType[];
  gridSize: GridSize;
  isLoading: boolean;
  onCardClick: (index: number) => void;
}

export const Board = ({
  cards,
  gridSize,
  isLoading,
  onCardClick
}: BoardProps): ReactElement => {
  if (isLoading) {
    return (
      <div className={`${styles.board} ${styles.boardSize[gridSize]}`}>
        {Array.from({ length: gridSize * gridSize }).map((_, index) => (
          <div key={`skeleton-${index.toString()}`} className={styles.card}>
            <div className={styles.skeletonCard} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`${styles.board} ${styles.boardSize[gridSize]}`}>
      {cards.map((card, index) => (
        <Card
          key={card.id}
          card={card}
          index={index}
          onClick={() => {
            onCardClick(index);
          }}
        />
      ))}
    </div>
  );
};
