import type { ReactElement } from 'react';
import { ImTongue2 } from 'react-icons/im';
import { PiBrainFill } from 'react-icons/pi';

import logo from '#/images/logo.webp';
import { GRID_SIZES, GRID_LABELS, TRIES_BY_SIZE } from '@/config/rules.ts';
import type { ControlsProps } from '@/config/types.ts';
import * as headerStyles from '@/styles/header.css.ts';
import * as uiStyles from '@/styles/ui.css.ts';

const Header = ({
  gameState,
  triesLeft,
  currentGridSize,
  onSizeChange
}: ControlsProps): ReactElement => {
  const totalTries = TRIES_BY_SIZE[currentGridSize];
  const ratio = +(triesLeft / totalTries).toFixed(1);

  let emoji = '❤️️';

  if (ratio <= 0.1) emoji = '💔';
  else if (ratio <= 0.5) emoji = '❤️‍🩹';

  return (
    <header className={headerStyles.header}>
      <h1 className={headerStyles.title}>
        <img className={headerStyles.logo} src={logo} alt='Logo' />
        Memo Match
      </h1>

      <div className={uiStyles.controls}>
        {GRID_SIZES.map(size => (
          <button
            key={size}
            className={uiStyles.button}
            disabled={currentGridSize === size && gameState === 'playing'}
            onClick={() => {
              onSizeChange(size);
            }}>
            {size === 4 ?
              <ImTongue2 />
            : <PiBrainFill />}
            {GRID_LABELS[size]}
          </button>
        ))}
      </div>

      <div className={headerStyles.info}>
        {emoji} {triesLeft}
      </div>
    </header>
  );
};

export default Header;
