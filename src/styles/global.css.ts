import { globalStyle } from '@vanilla-extract/css';

import 'modern-normalize/modern-normalize.css';
import { vars } from '@/styles/theme.css.ts';

globalStyle('body', {
  backgroundColor: vars.colors.background,
  color: vars.colors.text,
  fontFamily: 'system-ui, -apple-system, sans-serif',
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
