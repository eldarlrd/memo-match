import type { ReactElement } from 'react';

import Card from '@/components/Card.tsx';
import type { BoardProps } from '@/config/types.ts';
import * as styles from '@/styles/app.css.ts';

const Board = ({
  cards,
  gridSize,
  isLoading,
  onCardClick
}: BoardProps): ReactElement => {
  if (isLoading)
    return (
      <div className={`${styles.board} ${styles.boardSize[gridSize]}`}>
        {Array.from({ length: gridSize * gridSize }).map((_, index) => (
          <div key={`skeleton-${index.toString()}`} className={styles.card}>
            <div className={styles.skeletonCard} />
          </div>
        ))}
      </div>
    );

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

export default Board;
