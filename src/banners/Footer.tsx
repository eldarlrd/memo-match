import type { ReactElement } from 'react';
import { ImVolumeMedium, ImVolumeMute2 } from 'react-icons/im';
import { PiSwapBold } from 'react-icons/pi';
import { VscGithub } from 'react-icons/vsc';

import type { FooterProps } from '@/config/types.ts';
import * as styles from '@/styles/ui.css.ts';

const Footer = ({
  isMuted,
  onReset,
  onToggleMute
}: FooterProps): ReactElement => (
  <footer className={styles.footer}>
    <div className={styles.controls}>
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
    </div>

    <div className={styles.copyright}>
      © 2026{' '}
      <a
        title='Source'
        target='_blank'
        type='text/html'
        className={styles.author}
        rel='author external noreferrer'
        href='https://github.com/eldarlrd/memo-match'>
        <VscGithub /> eldarlrd
      </a>
    </div>
  </footer>
);

export default Footer;
