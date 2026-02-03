import { style, keyframes, styleVariants } from '@vanilla-extract/css';

import { vars, COLORS } from '@/styles/theme.css.ts';

const pulse = keyframes({
  '0%': { opacity: 0.4 },
  '50%': { opacity: 0.7 },
  '100%': { opacity: 0.4 }
});

const cardFaceBase = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  justifyContent: 'center',
  boxShadow: vars.shadow.md,
  borderRadius: vars.sizes.md,
  backfaceVisibility: 'hidden',
  border: `${vars.sizes['2xs']} solid ${COLORS.rose}`,
  transition: `background-color ${vars.transition.duration.md} ${vars.transition.function}, border-color ${vars.transition.duration.md} ${vars.transition.function}`
});

const board = style({
  width: '100%',
  display: 'grid',
  gap: vars.sizes.sm,
  maxWidth: vars.sizes.lg,
  containerType: 'inline-size',

  '@media': {
    '(max-width: 40rem)': {
      gap: vars.sizes.sm
    }
  }
});

const boardSize = styleVariants({
  4: {
    maxWidth: vars.width.board4,
    gridTemplateColumns: 'repeat(4, 1fr)',

    '@media': {
      '(max-width: 20rem)': {
        maxWidth: vars.width.board4Mobile
      }
    }
  },

  6: {
    maxWidth: vars.width.board6,
    gridTemplateColumns: 'repeat(6, 1fr)',

    '@media': {
      '(max-width: 28rem)': {
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
  position: 'relative',
  perspective: '62.5rem',
  aspectRatio: vars.aspectRatio.card,
  transition: `transform ${vars.transition.duration.sm} ${vars.transition.function}`,

  ':hover': {
    transform: `translateY(${vars.sizes.negative})`
  },

  ':focus-visible': {
    borderRadius: vars.sizes.md,
    outlineOffset: vars.sizes.xs,
    outline: `${vars.sizes['2xs']} solid white`
  }
});

const skeletonCard = style({
  width: '100%',
  height: '100%',
  borderRadius: vars.sizes.md,
  backgroundColor: COLORS.whiteOpaque,
  animation: `${pulse} ${vars.transition.duration.lg} infinite ${vars.transition.function}`
});

const cardInner = style({
  width: '100%',
  height: '100%',
  position: 'relative',
  borderRadius: vars.sizes.lg,
  transformStyle: 'preserve-3d',
  transition: `transform ${vars.transition.duration.md} ${vars.transition.function}`
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
    padding: vars.sizes['2xs'],
    transform: 'rotateY(180deg)',
    backgroundColor: COLORS.white
  }
]);

const red = style([
  cardFaceBase,
  {
    color: COLORS.white,
    boxSizing: 'border-box',
    backgroundColor: COLORS.red,
    border: `${vars.sizes.xs} solid ${COLORS.white}`,
    backgroundImage: `
      repeating-linear-gradient(45deg, ${COLORS.whiteOpaque} 0, ${COLORS.whiteOpaque} ${vars.sizes['2xs']}, transparent ${vars.sizes['2xs']}, transparent ${vars.sizes.md}),
      repeating-linear-gradient(-45deg, ${COLORS.whiteOpaque} 0, ${COLORS.whiteOpaque} ${vars.sizes['2xs']}, transparent ${vars.sizes['2xs']}, transparent ${vars.sizes.md})
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
