import type { ReactElement } from 'react';

import type { GameOverProps } from '@/config/types.ts';
import * as styles from '@/styles/app.css.ts';

const GameOver = ({
  gameState,
  onRestart
}: GameOverProps): ReactElement | null => {
  if (gameState !== 'won' && gameState !== 'lost') return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2 id='modal-title' className={styles.modalTitle}>
          {gameState === 'won' ? '🎉 You Won!' : '💀 Game Over!'}
        </h2>

        <p className={styles.modalText}>
          {gameState === 'won' ?
            `Well done!`
          : 'Better luck next time! Try again to beat the game.'}
        </p>

        <button className={styles.button} onClick={onRestart}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default GameOver;
