import type { ReactElement } from 'react';

import Card from '@/components/Card.tsx';
import type { BoardProps } from '@/config/types.ts';
import * as styles from '@/styles/app.css.ts';

const Board = ({
  cards,
  gridSize,
  isLoading,
  onCardClick
}: BoardProps): ReactElement =>
  isLoading ?
    <main className={`${styles.board} ${styles.boardSize[gridSize]}`}>
      {Array.from({ length: gridSize * gridSize }).map((_, index) => (
        <div key={`skeleton-${index.toString()}`} className={styles.card}>
          <div className={styles.skeletonCard} />
        </div>
      ))}
    </main>
  : <main className={`${styles.board} ${styles.boardSize[gridSize]}`}>
      {cards.map((card, index) => (
        <Card
          key={card.id}
          card={card}
          onClick={() => {
            onCardClick(index);
          }}
        />
      ))}
    </main>;

export default Board;
