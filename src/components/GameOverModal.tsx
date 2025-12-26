import { type ReactElement } from 'react';

import * as styles from '@/styles/app.css.ts';

interface GameOverModalProps {
  gameState: 'won' | 'lost' | 'playing';
  triesLeft: number;
  onRestart: () => void;
}

export const GameOverModal = ({
  gameState,
  triesLeft,
  onRestart
}: GameOverModalProps): ReactElement | null => {
  if (gameState !== 'won' && gameState !== 'lost') return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2 className={styles.modalTitle}>
          {gameState === 'won' ? '🎉 You Won!' : '💀 Game Over!'}
        </h2>
        <p className={styles.modalText}>
          {gameState === 'won' ?
            `Well done! You matched all cards with ${triesLeft} tries left.`
          : 'Better luck next time! Try again to beat the game.'}
        </p>
        <button className={styles.button} onClick={onRestart}>
          Play Again
        </button>
      </div>
    </div>
  );
};
