import { globalStyle, keyframes } from '@vanilla-extract/css';

import 'modern-normalize/modern-normalize.css';
import { vars } from '@/styles/theme.css.ts';

const glowAnimation = keyframes({
  '0%': { backgroundPosition: '80% 0%' },
  '50%': { backgroundPosition: '20% 0%' },
  '100%': { backgroundPosition: '80% 0%' }
});

globalStyle('body', {
  fontFamily: "'DynaPuff Variable', sans-serif",
  backgroundImage: `radial-gradient(ellipse at 50% 0%, ${vars.colors.ginger} 0%, transparent 75%)`,
  animation: `${glowAnimation} 10s ease-in-out infinite`,
  backgroundColor: vars.colors.orange,
  backgroundAttachment: 'fixed',
  backgroundSize: '150% 100%',
  color: vars.colors.white,
  minHeight: '100dvh',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  padding: 0,
  margin: 0
});

globalStyle('#root', {
  width: '90%',
  display: 'flex',
  userSelect: 'none',
  alignItems: 'center',
  flexDirection: 'column',
  padding: vars.spacing.md
});
