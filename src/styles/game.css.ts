import { style, keyframes, styleVariants } from '@vanilla-extract/css';

import { vars, BREAKPOINTS, COLORS } from '@/styles/theme.css.ts';

const pulse = keyframes({
  '0%': { opacity: 0.4 },
  '50%': { opacity: 0.7 },
  '100%': { opacity: 0.4 }
});

const cardFaceBase = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: vars.borderRadius.md,
  boxShadow:
    '0 4px 6px -1px rgb(220 38 38 / 0.1), 0 2px 4px -2px rgb(220 38 38 / 0.1)',
  border: `2px solid ${COLORS.rose}`,
  transition: `background-color ${vars.transition.duration.md} ${vars.transition.function}, border-color ${vars.transition.duration.md} ${vars.transition.function}`
});

const board = style({
  width: '100%',
  display: 'grid',
  gap: vars.spacing.md,
  maxWidth: vars.spacing.lg,
  containerType: 'inline-size',

  '@media': {
    '(max-width: 600px)': {
      gap: vars.spacing.sm
    }
  }
});

const boardSize = styleVariants({
  4: {
    maxWidth: vars.width.board4,
    gridTemplateColumns: 'repeat(4, 1fr)',

    '@media': {
      [`(max-width: ${BREAKPOINTS.board4})`]: {
        maxWidth: vars.width.board4Mobile
      }
    }
  },

  6: {
    maxWidth: vars.width.board6,
    gridTemplateColumns: 'repeat(6, 1fr)',

    '@media': {
      [`(max-width: ${BREAKPOINTS.board6})`]: {
        maxWidth: vars.width.board6Mobile
      }
    }
  }
});

const card = style({
  padding: 0,
  width: '100%',
  border: 'none',
  cursor: 'pointer',
  background: 'none',
  aspectRatio: vars.aspectRatio.card,
  position: 'relative',
  perspective: '62.5rem',
  transition: `transform ${vars.transition.duration.sm} ${vars.transition.function}`,

  ':hover': {
    transform: 'translateY(-2px)'
  },

  ':focus-visible': {
    outline: `3px solid white`,
    outlineOffset: '4px',
    borderRadius: vars.borderRadius.md
  }
});

const skeletonCard = style({
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  borderRadius: vars.borderRadius.md,
  width: '100%',
  height: '100%',
  animation: `${pulse} ${vars.transition.duration.lg} infinite ease-in-out`
});

const cardInner = style({
  position: 'relative',
  width: '100%',
  height: '100%',
  transition: `transform ${vars.transition.duration.md} ${vars.transition.function}`,
  transformStyle: 'preserve-3d',
  borderRadius: vars.borderRadius.md
});

const cardFlipped = style({
  transform: 'rotateY(180deg)'
});

const cardMatched = style({
  borderColor: `${COLORS.sky} !important`,
  backgroundColor: `${COLORS.blue} !important`
});

const cardImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'contain'
});

const white = style([
  cardFaceBase,
  {
    boxSizing: 'border-box',
    padding: vars.spacing.xxs,
    transform: 'rotateY(180deg)',
    backgroundColor: COLORS.white
  }
]);

const red = style([
  cardFaceBase,
  {
    color: COLORS.white,
    boxSizing: 'border-box',
    border: `.25rem solid ${COLORS.white}`,
    backgroundColor: COLORS.red,
    backgroundImage: `
      repeating-linear-gradient(45deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 2px, transparent 2px, transparent 10px),
      repeating-linear-gradient(-45deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 2px, transparent 2px, transparent 10px)
    `
  }
]);

export {
  board,
  boardSize,
  card,
  skeletonCard,
  cardInner,
  cardFlipped,
  cardMatched,
  cardImage,
  white,
  red
};
