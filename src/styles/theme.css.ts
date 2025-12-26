import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  colors: {
    primary: '#fb923c', // orange-400
    primaryHover: '#f97316', // orange-500
    primaryLight: '#ffedd5', // orange-100
    background: '#ea580c', // orange-600, more saturated
    text: '#ffffff',
    cardBack: '#dc2626', // red-600, brighter red
    cardFront: '#ffffff',
    matched: '#ffedd5',
    error: '#ef4444',
    cardRed: '#dc2626', // red-600
    cardBlack: '#171717' // neutral-900
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px'
  },
  borderRadius: {
    sm: '6px',
    md: '12px',
    lg: '20px',
    full: '9999px'
  }
});
