import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

const colors = {
  primary: '#40c0f0',
  secondary: '#f8ad1a',
  white: '#fff',
  dark: '#1C1D21',
};

const bgColors = {
  white: '#fff',
  dark: '#01273b',
};

export const space = {
  none: 0,
  small: '4px',
  medium: '8px',
  large: '16px',
  // etc.
};
export const responsiveConditions = {
  mobile: {},
  tablet: { '@media': 'screen and (min-width: 768px)' },
  desktop: { '@media': 'screen and (min-width: 1024px)' },
};

const responsiveProperties = defineProperties({
  conditions: responsiveConditions,
  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'flex', 'block', 'inline'],
    flexDirection: ['row', 'column'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
    ],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    border: {
      none: 0,
      small: '1px solid',
    },
    borderColor: colors,
    borderRadius: {
      small: 5,
      round: 50,
    },
    // etc.
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    placeItems: ['justifyContent', 'alignItems'],
  },
});

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' },
  },
  defaultCondition: 'lightMode',
  properties: {
    color: colors,
    background: { ...colors, ...bgColors },
  },
});

export const sprinkles = createSprinkles(responsiveProperties, colorProperties);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];
