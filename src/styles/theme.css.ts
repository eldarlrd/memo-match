import { createGlobalTheme } from '@vanilla-extract/css';

const COLORS = {
  black: '#171717', // neutral-900
  white: '#fafafa', // neutral-50
  rose: '#fee2e2', // red-100
  red: '#dc2626', // red-600
  maroon: '#b91c1c', // red-700
  sky: '#3b82f6', // blue-500
  blue: '#1d4ed8', // blue-700
  ginger: '#fb923c', // orange-400
  orange: '#ea580c', // orange-600
  blackOpaque: '#1717171a', // neutral-900/10%
  whiteOpaque: '#fafafa33', // neutral-50/20%
  brownOpaque: '#43140766' // orange-950/40%
};

const vars = createGlobalTheme(':root', {
  shadow: {
    sm: `0 1px 3px 0 ${COLORS.blackOpaque}, 0 1px .125rem -1px ${COLORS.blackOpaque}`,
    md: `0 .25rem .375rem -1px ${COLORS.blackOpaque}, 0 .125rem .25rem -.125rem ${COLORS.blackOpaque}`,
    lg: `0 1.25rem 25px -5px ${COLORS.blackOpaque}, 0 .5rem .625rem -.375rem ${COLORS.blackOpaque}`
  },

  sizes: {
    negative: '-.125rem',
    '2xs': '.125rem',
    xs: '.25rem',
    ss: '.375rem',
    sm: '.5rem',
    md: '.75rem',
    lg: '1rem',
    gg: '1.25rem',
    xl: '1.5rem',
    '2xl': '2rem'
  },
  width: {
    modal: '25rem',
    board4: '31rem',
    board6: '44rem',
    board4Mobile: '20rem',
    board6Mobile: '28rem',
    muteButton: '2.25rem',
    header: 'clamp(3rem, 10vw, 4rem)'
  },

  transition: {
    function: 'cubic-bezier(.4, 0, .2, 1)',
    duration: {
      sm: '150ms',
      md: '300ms',
      lg: '900ms'
    }
  },

  aspectRatio: {
    logo: '1',
    card: '3 / 4'
  }
});

export { COLORS, vars };
