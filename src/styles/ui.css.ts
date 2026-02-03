import { style } from '@vanilla-extract/css';

import { COLORS, vars } from '@/styles/theme.css.ts';

const controls = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: vars.sizes.sm,
  alignItems: 'center',
  justifyContent: 'center'
});

const button = style({
  color: 'white',
  border: 'none',
  display: 'flex',
  fontWeight: 600,
  cursor: 'pointer',
  gap: vars.sizes.xs,
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: vars.shadow.sm,
  backgroundColor: COLORS.red,
  borderRadius: vars.sizes.md,
  padding: `${vars.sizes.sm} ${vars.sizes.lg}`,
  transition: `all ${vars.transition.duration.sm} ${vars.transition.function}`,

  ':hover': {
    boxShadow: vars.shadow.md,
    backgroundColor: COLORS.maroon,
    transform: `translateY(${vars.sizes.negative})`
  },

  ':active': {
    transform: 'translateY(0)'
  },

  ':disabled': {
    transform: 'none',
    boxShadow: 'none',
    cursor: 'not-allowed',
    backgroundColor: COLORS.blue
  }
});

export { controls, button };
