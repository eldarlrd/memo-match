import type { ReactElement } from 'react';

import type { CardProps } from '@/config/types.ts';
import * as styles from '@/styles/app.css.ts';

const Card = ({ card, onClick, index }: CardProps): ReactElement => {
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
          className={`${styles.white} ${card.isMatched ? styles.cardMatched : ''}`}>
          <img
            src={card.imageUrl}
            alt={card.value}
            className={styles.cardImage}
          />
        </div>
        <div className={styles.red} />
      </div>
    </button>
  );
};

export default Card;
