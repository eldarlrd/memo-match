import type { ReactElement } from 'react';
import { FaFaceSadCry } from 'react-icons/fa6';
import { PiConfettiFill } from 'react-icons/pi';

import type { GameOverProps } from '@/config/types.ts';
import * as modalStyles from '@/styles/modal.css.ts';
import * as uiStyles from '@/styles/ui.css.ts';

const GameOver = ({
  gameState,
  attempts,
  onRestart
}: GameOverProps): ReactElement | null => {
  if (gameState !== 'won' && gameState !== 'lost') return null;

  return (
    <div className={modalStyles.modalOverlay}>
      <div className={modalStyles.modal}>
        <h2 className={modalStyles.modalTitle}>
          {gameState === 'won' ?
            <>
              <PiConfettiFill /> You won!
            </>
          : <>
              <FaFaceSadCry />
              Game over...
            </>
          }
        </h2>

        <p className={modalStyles.modalText}>
          {gameState === 'won' ?
            `It took you ${attempts.toString() + (attempts === 1 ? ' try' : ' tries')}.`
          : 'Better luck next time!'}
        </p>

        <button className={uiStyles.button} onClick={onRestart}>
          Retry?
        </button>
      </div>
    </div>
  );
};

export default GameOver;
