import type { ReactElement } from 'react';

import type { GameOverProps } from '@/config/types.ts';
import * as modalStyles from '@/styles/modal.css.ts';
import * as uiStyles from '@/styles/ui.css.ts';

const GameOver = ({
  gameState,
  onRestart
}: GameOverProps): ReactElement | null => {
  if (gameState !== 'won' && gameState !== 'lost') return null;

  return (
    <div className={modalStyles.modalOverlay}>
      <div className={modalStyles.modal}>
        <h2 id='modal-title' className={modalStyles.modalTitle}>
          {gameState === 'won' ? '🎉 You Won!' : '💀 Game Over!'}
        </h2>

        <p className={modalStyles.modalText}>
          {gameState === 'won' ?
            `Well done!`
          : 'Better luck next time! Try again to beat the game.'}
        </p>

        <button className={uiStyles.button} onClick={onRestart}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default GameOver;
