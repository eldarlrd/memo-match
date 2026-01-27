import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css.ts';

export const container = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: vars.sizes.xl,
  flexDirection: 'column',
  justifyContent: 'space-between'
});
