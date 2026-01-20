import { globalStyle, keyframes } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css.ts';

const glowAnimation = keyframes({
  '0%': { backgroundPosition: '80% 0%' },
  '50%': { backgroundPosition: '20% 0%' },
  '100%': { backgroundPosition: '80% 0%' }
});

globalStyle('body', {
  backgroundImage: `radial-gradient(ellipse at 50% 0%, ${vars.colors.ginger} 0%, transparent 75%)`,
  animation: `${glowAnimation} 10s ease-in-out infinite`,
  backgroundColor: vars.colors.orange,
  backgroundSize: '150% 100%'
});

globalStyle('#root', {
  fontFamily: "'DynaPuff Variable', sans-serif",
  minHeight: '100dvh',
  display: 'flex',
  userSelect: 'none',
  padding: `${vars.spacing.xxl} ${vars.spacing.md}`
});
