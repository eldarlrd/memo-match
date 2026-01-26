import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css.ts';

const modalOverlay = style({
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1,
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backdropFilter: 'blur(4px)',
  backgroundColor: vars.colors.brownOpaque
});

const modal = style({
  backgroundColor: vars.colors.white,
  padding: vars.spacing.xl,
  borderRadius: vars.borderRadius.lg,
  boxShadow:
    '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
  maxWidth: vars.width.modal,
  width: '90%',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
  border: `4px solid ${vars.colors.red}`
});

const modalTitle = style({
  fontSize: '2rem',
  color: vars.colors.red,
  margin: 0,
  fontWeight: 700
});

const modalText = style({
  fontSize: '1.25rem',
  color: vars.colors.black,
  margin: 0
});

export { modalOverlay, modal, modalTitle, modalText };
