import { style } from '@vanilla-extract/css';

import { COLORS, vars } from '@/styles/theme.css.ts';

const modalOverlay = style({
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1,
  display: 'flex',
  position: 'fixed',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: COLORS.brownOpaque,
  backdropFilter: `blur(${vars.sizes.xs})`
});

const modal = style({
  width: '90%',
  display: 'flex',
  textAlign: 'center',
  gap: vars.sizes.md,
  flexDirection: 'column',
  padding: vars.sizes.xl,
  maxWidth: vars.width.modal,
  backgroundColor: COLORS.white,
  borderRadius: vars.sizes.sm,
  border: `.25rem solid ${COLORS.red}`,
  boxShadow:
    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
});

const modalTitle = style({
  margin: 0,
  fontWeight: 700,
  fontSize: '2rem',
  color: COLORS.red
});

const modalText = style({
  margin: 0,
  fontSize: '1.25rem',
  color: COLORS.black
});

export { modalOverlay, modal, modalTitle, modalText };
