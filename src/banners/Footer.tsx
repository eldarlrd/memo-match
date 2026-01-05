import { type ReactElement } from 'react';

import * as styles from '@/styles/app.css.ts';

interface FooterProps {
  isMuted: boolean;
  onReset: () => void;
  onToggleMute: () => void;
}

export const Footer = ({
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
