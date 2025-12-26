import { type ReactElement } from 'react';

import { GRID_LABELS, type GridSize } from '@/config/rules.ts';
import * as styles from '@/styles/app.css.ts';

interface HeaderProps {
  triesLeft: number;
  gridSize: GridSize;
}

export const Header = ({ triesLeft, gridSize }: HeaderProps): ReactElement => {
  return (
    <>
      <h1 className={styles.title}>Memo Match</h1>
      <div className={styles.info}>
        Tries Left: {triesLeft} | Mode: {GRID_LABELS[gridSize]}
      </div>
    </>
  );
};
