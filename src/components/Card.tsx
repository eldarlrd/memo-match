import { type ReactElement } from 'react';

import { type Card as CardType } from '@/hooks/useGame.ts';
import * as styles from '@/styles/app.css.ts';

interface CardProps {
  card: CardType;
  onClick: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}

export const Card = ({ card, onClick, onKeyDown }: CardProps): ReactElement => {
  return (
    <div
      className={styles.card}
      role='button'
      tabIndex={0}
      onClick={onClick}
      onKeyDown={onKeyDown}>
      <div
        className={`${styles.cardInner} ${card.isFlipped || card.isMatched ? styles.cardFlipped : ''}`}>
        <div className={styles.cardFront}>
          <img
            src={card.imageUrl}
            alt={card.value}
            className={styles.cardImage}
          />
        </div>
        <div className={styles.cardBack} />
      </div>
    </div>
  );
};
