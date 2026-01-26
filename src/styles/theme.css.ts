import { createGlobalTheme } from '@vanilla-extract/css';

const BREAKPOINTS = {
  board4: '31rem',
  board6: '44rem'
};

const COLORS = {
  black: '#171717', // neutral-900
  white: '#fafafa', // neutral-50
  rose: '#fee2e2', // red-100
  tomato: '#ef4444', // red-500
  red: '#dc2626', // red-600
  maroon: '#b91c1c', // red-700
  sky: '#3b82f6', // blue-500
  blue: '#1d4ed8', // blue-700
  ginger: '#fb923c', // orange-400
  orange: '#ea580c', // orange-600
  brownOpaque: '#43140766' // orange-950/40%
};

const vars = createGlobalTheme(':root', {
  responsive: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)'
  },

  screen: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  },

  spacing: {
    xxs: '.125rem',
    xs: '.25rem',
    sm: '.5rem',
    md: '.75rem',
    lg: '1rem',
    xl: '1.5rem',
    xxl: '2rem'
  },

  borderRadius: {
    xs: '.125rem',
    sm: '.25rem',
    md: '.375rem',
    lg: '.5rem',
    xl: '.75rem',
    xxl: '1rem',
    full: 'calc(infinity * 1px)'
  },

  width: {
    modal: '25rem',
    muteButton: '2.5rem',
    board4Mobile: '20rem',
    board6Mobile: '28rem',
    board4: BREAKPOINTS.board4,
    board6: BREAKPOINTS.board6,
    header: 'clamp(3rem, 10vw, 4rem)'
  },

  transition: {
    function: 'cubic-bezier(0.4, 0, 0.2, 1)',
    duration: {
      sm: '150ms',
      md: '300ms',
      lg: '1s'
    }
  },

  aspectRatio: {
    logo: '1',
    card: '3 / 4'
  }
});

export { BREAKPOINTS, COLORS, vars };
