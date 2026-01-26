import type { ReactElement } from 'react';

import type { CardProps } from '@/config/types.ts';
import * as styles from '@/styles/game.css.ts';

const Card = ({ card, onClick }: CardProps): ReactElement => (
  <button disabled={card.isMatched} className={styles.card} onClick={onClick}>
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

export default Card;
