import { style } from '@vanilla-extract/css';

import { COLORS, vars } from '@/styles/theme.css.ts';

const footer = style({
  width: '100%',
  display: 'flex',
  gap: vars.sizes.xl,
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center'
});

const muteButton = style({
  padding: '0 !important',
  width: vars.width.muteButton,
  height: vars.width.muteButton
});

const copyright = style({
  fontWeight: 500,
  textAlign: 'center',
  color: COLORS.white
});

const author = style({
  display: 'flex',
  gap: vars.sizes.xs,
  alignItems: 'center',
  color: 'currentColor',
  textDecoration: 'none',
  justifyContent: 'center',
  marginTop: vars.sizes.ss,
  WebkitTapHighlightColor: COLORS.whiteTransparent,
  transition: `color ${vars.transition.duration.sm} ${vars.transition.function}`,

  ':hover': {
    color: COLORS.blue
  }
});

export { footer, muteButton, copyright, author };
