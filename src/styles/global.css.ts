import { globalStyle, keyframes } from '@vanilla-extract/css';

import 'modern-normalize/modern-normalize.css';
import { vars } from '@/styles/theme.css.ts';

const glowAnimation = keyframes({
  '0%': { backgroundPosition: '80% 0%' },
  '50%': { backgroundPosition: '20% 0%' },
  '100%': { backgroundPosition: '80% 0%' }
});

globalStyle('body', {
  backgroundColor: vars.colors.background,
  backgroundImage:
    'radial-gradient(ellipse at 50% 0%, #fb923c 0%, transparent 75%)',
  backgroundSize: '150% 100%',
  backgroundAttachment: 'fixed',
  animation: `${glowAnimation} 10s ease-in-out infinite`,
  color: vars.colors.text,
  fontFamily: "'DynaPuff Variable', sans-serif",
  margin: 0,
  padding: 0,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
});

globalStyle('#root', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: vars.spacing.md
});
