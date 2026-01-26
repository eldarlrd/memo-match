import { style } from '@vanilla-extract/css';

import { COLORS, vars } from '@/styles/theme.css.ts';

const header = style({
  display: 'flex',
  gap: vars.sizes.md,
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between'
});

const title = style({
  margin: 0,
  fontWeight: 700,
  textAlign: 'center',
  color: COLORS.white,
  fontSize: vars.width.header,
  textShadow: `${vars.sizes.xs} ${vars.sizes.xs} ${COLORS.red}`
});

const logo = style({
  verticalAlign: 'middle',
  width: vars.width.header,
  marginInlineEnd: vars.sizes.sm,
  aspectRatio: vars.aspectRatio.logo
});

export { header, title, logo };
