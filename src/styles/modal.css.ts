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
  gap: vars.sizes.xl,
  padding: vars.sizes.xl,
  flexDirection: 'column',
  boxShadow: vars.shadow.lg,
  maxWidth: vars.width.modal,
  borderRadius: vars.sizes.lg,
  backgroundColor: COLORS.white,
  border: `${vars.sizes.xs} solid ${COLORS.red}`
});

const modalTitle = style({
  margin: 0,
  display: 'flex',
  fontWeight: 700,
  color: COLORS.red,
  gap: vars.sizes.sm,
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: vars.sizes['2xl']
});

const modalText = style({
  margin: 0,
  color: COLORS.black,
  fontSize: vars.sizes.gg
});

export { modalOverlay, modal, modalTitle, modalText };
