import type { ReactElement } from 'react';

import type { FooterProps } from '@/config/types.ts';
import * as styles from '@/styles/app.css.ts';

const Footer = ({
  isMuted,
  onReset,
  onToggleMute
}: FooterProps): ReactElement => {
  return (
    <div className={styles.footerControls}>
      <button className={styles.button} onClick={onReset}>
        Reset Game
      </button>
      <button
        className={`${styles.button} ${styles.muteButton}`}
        onClick={onToggleMute}
        aria-label={isMuted ? 'Unmute' : 'Mute'}>
        {isMuted ? '🔇' : '🔊'}
      </button>
    </div>
  );
};

export default Footer;
