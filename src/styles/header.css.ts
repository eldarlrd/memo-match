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

const info = style({
  fontWeight: 600,
  color: COLORS.black,
  fontSize: vars.sizes.gg,
  borderRadius: vars.sizes.md,
  backgroundColor: COLORS.rose,
  padding: `${vars.sizes.xs} ${vars.sizes.md}`,
  border: `${vars.sizes['2xs']} solid ${COLORS.red}`
});

export { header, title, logo, info };
