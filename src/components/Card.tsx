import { type ReactElement } from 'react';

import { type Card as CardType } from '@/hooks/useGame.ts';
import * as styles from '@/styles/app.css.ts';

interface CardProps {
  card: CardType;
  onClick: () => void;
  index: number;
}

export const Card = ({ card, onClick, index }: CardProps): ReactElement => {
  const label =
    card.isMatched ? `Card ${(index + 1).toString()}: ${card.value} (Matched)`
    : card.isFlipped ? `Card ${(index + 1).toString()}: ${card.value}`
    : `Card ${(index + 1).toString()}: Back`;

  return (
    <button
      className={styles.card}
      onClick={onClick}
      aria-label={label}
      disabled={card.isMatched || card.isFlipped}>
      <div
        className={`${styles.cardInner} ${card.isFlipped || card.isMatched ? styles.cardFlipped : ''}`}>
        <div
          className={`${styles.cardFront} ${card.isMatched ? styles.cardMatched : ''}`}>
          <img
            src={card.imageUrl}
            alt={card.value}
            className={styles.cardImage}
          />
        </div>
        <div className={styles.cardBack} />
      </div>
    </button>
  );
};
