import { themeVars } from '@sunrise/sprinkles-ui-kit';
import { createTheme } from '@vanilla-extract/css';

export const theme = createTheme(themeVars, {
  color: { primary: '#40c0f0', secondary: '#f8ad1a' },
});

export const ugly = createTheme(themeVars, {
  color: { primary: '#0000ff', secondary: '#ff0000' },
});
