import { globalStyle, keyframes } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css.ts';

const glowAnimation = keyframes({
  '0%': { backgroundPosition: '80% 0%' },
  '50%': { backgroundPosition: '20% 0%' },
  '100%': { backgroundPosition: '80% 0%' }
});

globalStyle('body', {
  backgroundSize: '150% 100%',
  backgroundColor: vars.colors.orange,
  animation: `${glowAnimation} 10s ease-in-out infinite`,
  backgroundImage: `radial-gradient(ellipse at 50% 0%, ${vars.colors.ginger} 0%, transparent 75%)`
});

globalStyle('#root', {
  display: 'flex',
  userSelect: 'none',
  minHeight: '100dvh',
  fontFamily: "'DynaPuff Variable', sans-serif",
  padding: `${vars.spacing.xxl} ${vars.spacing.md}`
});
