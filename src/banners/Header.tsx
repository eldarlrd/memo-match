import { type ReactElement } from 'react';

import * as styles from '@/styles/app.css.ts';

export const Header = (): ReactElement => (
  <h1 className={styles.title}>Memo Match</h1>
);
