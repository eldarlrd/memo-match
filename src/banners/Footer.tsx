import type { ReactElement } from 'react';

import type { FooterProps } from '@/config/types.ts';
import * as styles from '@/styles/app.css.ts';

const Footer = ({
  isMuted,
  onReset,
  onToggleMute
}: FooterProps): ReactElement => (
  <footer className={styles.footer}>
    <button className={styles.button} onClick={onReset}>
      Reset Game
    </button>

    <button
      className={`${styles.button} ${styles.muteButton}`}
      onClick={onToggleMute}>
      {isMuted ? '🔇' : '🔊'}
    </button>
  </footer>
);

export default Footer;
