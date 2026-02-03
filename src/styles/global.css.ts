import { globalStyle, keyframes, style } from '@vanilla-extract/css';

import { COLORS, vars } from '@/styles/theme.css.ts';

const glowAnimation = keyframes({
  '0%': { backgroundPosition: '80% 0%' },
  '50%': { backgroundPosition: '20% 0%' },
  '100%': { backgroundPosition: '80% 0%' }
});

globalStyle('body', {
  backgroundSize: '150% 100%',
  backgroundColor: COLORS.orange,
  animation: `${glowAnimation} 10s ${vars.transition.function} infinite`,
  backgroundImage: `radial-gradient(ellipse at 50% 0%, ${COLORS.ginger} 0%, transparent 75%)`
});

globalStyle('#root', {
  display: 'flex',
  userSelect: 'none',
  minHeight: '100dvh',
  fontFamily: "'DynaPuff Variable', sans-serif",
  padding: `${vars.sizes['2xl']} ${vars.sizes.md}`
});

export const container = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: vars.sizes.xl,
  flexDirection: 'column',
  justifyContent: 'space-between'
});
