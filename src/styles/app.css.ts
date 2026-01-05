import { style, styleVariants, keyframes } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css.ts';

const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.spacing.lg,
  maxWidth: '800px',
  width: '100%'
});

const board = style({
  display: 'grid',
  gap: vars.spacing.md,
  width: '100%',
  maxWidth: '800px',
  containerType: 'inline-size'
});

const boardSize = styleVariants({
  4: {
    gridTemplateColumns: 'repeat(4, 1fr)',
    maxWidth: '500px'
  },
  6: {
    gridTemplateColumns: 'repeat(6, 1fr)',
    maxWidth: '700px'
  }
});

const card = style({
  perspective: '1000px',
  cursor: 'pointer',
  aspectRatio: '3/4',
  position: 'relative',
  transition: 'transform 0.2s',
  border: 'none',
  background: 'none',
  padding: 0,
  width: '100%',
  ':hover': {
    transform: 'translateY(-2px)'
  },
  ':focus-visible': {
    outline: `3px solid white`,
    outlineOffset: '4px',
    borderRadius: vars.borderRadius.md
  }
});

const pulse = keyframes({
  '0%': { opacity: 0.3 },
  '50%': { opacity: 0.6 },
  '100%': { opacity: 0.3 }
});

const skeletonCard = style({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: vars.borderRadius.md,
  width: '100%',
  height: '100%',
  animation: `${pulse} 1.5s infinite ease-in-out`
});

const cardInner = style({
  position: 'relative',
  width: '100%',
  height: '100%',
  transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  transformStyle: 'preserve-3d',
  borderRadius: vars.borderRadius.md
});

const cardFlipped = style({
  transform: 'rotateY(180deg)'
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
    '0 4px 6px -1px rgb(249 115 22 / 0.1), 0 2px 4px -2px rgb(249 115 22 / 0.1)',
  border: `2px solid ${vars.colors.primaryLight}`
});

const cardFront = style([
  cardFaceBase,
  {
    backgroundColor: vars.colors.cardFront,
    transform: 'rotateY(180deg)',
    padding: vars.spacing.xs,
    boxSizing: 'border-box'
  }
]);

const cardImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'contain'
});

const cardBack = style([
  cardFaceBase,
  {
    backgroundColor: vars.colors.cardBack,
    color: 'white',
    backgroundImage: `
      repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 10px),
      repeating-linear-gradient(-45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 10px)
    `,
    border: '4px solid white',
    boxSizing: 'border-box'
  }
]);

const controls = style({
  display: 'flex',
  gap: vars.spacing.md,
  alignItems: 'center',
  flexWrap: 'wrap',
  justifyContent: 'center',
  marginBottom: vars.spacing.md
});

const footerControls = style({
  display: 'flex',
  gap: vars.spacing.md,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: vars.spacing.xl,
  width: '100%'
});

const button = style({
  padding: `${vars.spacing.sm} ${vars.spacing.lg}`,
  backgroundColor: vars.colors.primary,
  color: 'white',
  border: 'none',
  borderRadius: vars.borderRadius.full,
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '1rem',
  transition: 'all 0.2s',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ':hover': {
    backgroundColor: vars.colors.primaryHover,
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 6px rgba(0,0,0,0.15)'
  },
  ':active': {
    transform: 'translateY(0)'
  },
  ':disabled': {
    backgroundColor: vars.colors.matched,
    cursor: 'not-allowed',
    transform: 'none',
    boxShadow: 'none'
  }
});

const muteButton = style({
  width: '40px',
  height: '40px',
  padding: 0,
  fontSize: '1.2rem'
});

const info = style({
  fontSize: '1.2rem',
  fontWeight: 'bold',
  color: vars.colors.cardBlack,
  backgroundColor: vars.colors.primaryLight,
  padding: `${vars.spacing.xs} ${vars.spacing.md}`,
  borderRadius: vars.borderRadius.full,
  border: `2px solid ${vars.colors.primary}`
});

const title = style({
  fontSize: 'clamp(2.5rem, 8vw, 4rem)',
  color: 'white',
  margin: 0,
  textAlign: 'center',
  fontWeight: 800,
  letterSpacing: '-0.02em',
  textShadow: `3px 3px 0px ${vars.colors.primary}`
});

const modalOverlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(67, 20, 7, 0.4)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
  backdropFilter: 'blur(4px)'
});

const modal = style({
  backgroundColor: vars.colors.cardFront,
  padding: vars.spacing.xl,
  borderRadius: vars.borderRadius.lg,
  boxShadow:
    '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
  maxWidth: '400px',
  width: '90%',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
  border: `4px solid ${vars.colors.primary}`
});

const modalTitle = style({
  fontSize: '2rem',
  color: vars.colors.primary,
  margin: 0,
  fontWeight: 800
});

const modalText = style({
  fontSize: '1.2rem',
  color: vars.colors.cardBlack,
  margin: 0
});

export {
  container,
  board,
  boardSize,
  card,
  cardInner,
  cardFlipped,
  cardFront,
  cardImage,
  cardBack,
  skeletonCard,
  controls,
  footerControls,
  button,
  muteButton,
  info,
  title,
  modalOverlay,
  modal,
  modalTitle,
  modalText
};
