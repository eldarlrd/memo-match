import { style } from '@vanilla-extract/css';

import { COLORS, vars } from '@/styles/theme.css.ts';

const controls = style({
  display: 'flex',
  gap: vars.spacing.md,
  alignItems: 'center',
  flexWrap: 'wrap',
  justifyContent: 'center'
});

const footer = style({
  display: 'flex',
  gap: vars.spacing.md,
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%'
});

const button = style({
  padding: `${vars.spacing.sm} ${vars.spacing.lg}`,
  backgroundColor: COLORS.red,
  color: 'white',
  border: 'none',
  borderRadius: vars.borderRadius.full,
  cursor: 'pointer',
  fontWeight: 600,
  fontSize: '1rem',
  transition: `all ${vars.transition.duration.sm} ${vars.transition.function}`,
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  display: 'flex',
  gap: vars.spacing.xs,
  alignItems: 'center',
  justifyContent: 'center',

  ':hover': {
    backgroundColor: COLORS.maroon,
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 6px rgba(0,0,0,0.15)'
  },

  ':active': {
    transform: 'translateY(0)'
  },

  ':disabled': {
    backgroundColor: COLORS.blue,
    cursor: 'not-allowed',
    transform: 'none',
    boxShadow: 'none'
  }
});

const muteButton = style({
  width: vars.width.muteButton,
  height: vars.width.muteButton,
  padding: 0,
  fontSize: '1.25rem'
});

const info = style({
  fontSize: '1.25rem',
  fontWeight: 600,
  color: COLORS.black,
  backgroundColor: COLORS.rose,
  padding: `${vars.spacing.xs} ${vars.spacing.md}`,
  borderRadius: vars.borderRadius.full,
  border: `2px solid ${COLORS.red}`
});

export { controls, footer, button, muteButton, info };
