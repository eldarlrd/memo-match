import type { ReactElement } from 'react';
import { ImTongue2 } from 'react-icons/im';
import { PiBrainFill } from 'react-icons/pi';

import { GRID_SIZES, GRID_LABELS, TRIES_BY_SIZE } from '@/config/rules.ts';
import type { ControlsProps } from '@/config/types.ts';
import * as styles from '@/styles/app.css.ts';

const Header = ({
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
    <header className={styles.header}>
      <h1 className={styles.title}>Memo Match</h1>

      <div className={styles.controls}>
        {GRID_SIZES.map(size => (
          <button
            key={size}
            className={styles.button}
            onClick={() => {
              onSizeChange(size);
            }}
            disabled={currentGridSize === size && gameState === 'playing'}>
            {size === 4 ?
              <ImTongue2 />
            : <PiBrainFill />}
            {GRID_LABELS[size]}
          </button>
        ))}
      </div>

      <div className={styles.info}>
        {emoji} {triesLeft}
      </div>
    </header>
  );
};

export default Header;
