import { createThemeContract } from '@vanilla-extract/css';

export const themeVars = createThemeContract({
  color: {
    primary: '',
    secondary: '',
  },
});
