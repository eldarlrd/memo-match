import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  colors: {
    primary: '#dc2626', // red-600
    primaryHover: '#b91c1c', // red-700
    primaryLight: '#fee2e2', // red-100
    background: '#ea580c', // orange-600
    text: '#fff',
    cardBack: '#dc2626', // red-600, brighter red
    cardFront: '#fff',
    matched: '#1d4ed8', // blue-700
    matchedBorder: '#3b82f6', // blue-500
    error: '#ef4444',
    cardRed: '#dc2626', // red-600
    cardBlack: '#171717' // neutral-900
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem'
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.75rem',
    lg: '1.25rem',
    full: '600rem'
  }
});
