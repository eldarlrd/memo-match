import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css.ts';

const header = style({
  display: 'flex',
  gap: vars.spacing.md,
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between'
});

const title = style({
  margin: 0,
  fontWeight: 700,
  textAlign: 'center',
  color: vars.colors.white,
  fontSize: vars.width.header,
  textShadow: `3px 3px 0px ${vars.colors.red}`
});

const logo = style({
  verticalAlign: 'middle',
  width: vars.width.header,
  marginInlineEnd: vars.spacing.sm,
  aspectRatio: vars.aspectRatio.logo
});

export { header, title, logo };
