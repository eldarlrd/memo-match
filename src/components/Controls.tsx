import { type ReactElement } from 'react';

import { GRID_SIZES, GRID_LABELS, type GridSize } from '@/config/rules.ts';
import * as styles from '@/styles/app.css.ts';

interface ControlsProps {
  currentGridSize: GridSize;
  gameState: 'playing' | 'won' | 'lost';
  onSizeChange: (size: GridSize) => void;
}

export const Controls = ({
  currentGridSize,
  gameState,
  onSizeChange
}: ControlsProps): ReactElement => {
  return (
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
  );
};
