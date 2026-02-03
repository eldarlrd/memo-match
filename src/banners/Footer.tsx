import type { ReactElement } from 'react';
import { ImVolumeMedium, ImVolumeMute2 } from 'react-icons/im';
import { PiSwapBold } from 'react-icons/pi';
import { VscGithub } from 'react-icons/vsc';

import type { FooterProps } from '@/config/types.ts';
import * as footerStyles from '@/styles/footer.css.ts';
import * as uiStyles from '@/styles/ui.css.ts';

const Footer = ({
  isMuted,
  onReset,
  onToggleMute
}: FooterProps): ReactElement => (
  <footer className={footerStyles.footer}>
    <div className={uiStyles.controls}>
      <button className={uiStyles.button} onClick={onReset}>
        <PiSwapBold /> Shuffle
      </button>

      <button
        className={`${uiStyles.button} ${footerStyles.muteButton}`}
        onClick={onToggleMute}>
        {isMuted ?
          <ImVolumeMute2 />
        : <ImVolumeMedium />}
      </button>
    </div>

    <div className={footerStyles.copyright}>
      © 2026{' '}
      <a
        title='Source'
        target='_blank'
        type='text/html'
        className={footerStyles.author}
        rel='author external noreferrer'
        href='https://github.com/eldarlrd/memo-match'>
        <VscGithub /> eldarlrd
      </a>
    </div>
  </footer>
);

export default Footer;
