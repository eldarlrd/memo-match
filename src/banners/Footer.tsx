import type { ReactElement } from 'react';
import { ImVolumeMedium, ImVolumeMute2 } from 'react-icons/im';
import { PiSwapBold } from 'react-icons/pi';

import type { FooterProps } from '@/config/types.ts';
import * as styles from '@/styles/ui.css.ts';

const Footer = ({
  isMuted,
  onReset,
  onToggleMute
}: FooterProps): ReactElement => (
  <footer className={styles.footer}>
    <button className={styles.button} onClick={onReset}>
      <PiSwapBold /> Shuffle
    </button>

    <button
      className={`${styles.button} ${styles.muteButton}`}
      onClick={onToggleMute}>
      {isMuted ?
        <ImVolumeMute2 />
      : <ImVolumeMedium />}
    </button>
  </footer>
);

export default Footer;
