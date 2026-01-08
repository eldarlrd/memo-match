import { type ReactElement } from 'react';

import {
  GRID_SIZES,
  GRID_LABELS,
  TRIES_BY_SIZE,
  type GridSize
} from '@/config/rules.ts';
import * as styles from '@/styles/app.css.ts';

interface ControlsProps {
  currentGridSize: GridSize;
  gameState: 'playing' | 'won' | 'lost';
  onSizeChange: (size: GridSize) => void;
  triesLeft: number;
}

export const Controls = ({
  currentGridSize,
  gameState,
  onSizeChange,
  triesLeft
}: ControlsProps): ReactElement => {
  const totalTries = TRIES_BY_SIZE[currentGridSize];
  const ratio = +(triesLeft / totalTries).toFixed(1);

  let emoji = '❤️️';

  if (ratio <= 0.1) emoji = '💔';
  else if (ratio <= 0.5) emoji = '❤️‍🩹';

  return (
    <>
      <div className={styles.controls}>
        {GRID_SIZES.map(size => (
          <button
            key={size}
            className={styles.button}
            onClick={() => {
              onSizeChange(size);
            }}
            disabled={currentGridSize === size && gameState === 'playing'}>
            {GRID_LABELS[size]}
          </button>
        ))}
      </div>

      <div className={styles.info}>
        {emoji} {triesLeft}
      </div>
    </>
  );
};
