import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { darken, lighten } from 'polished';
const colors = {
  primary: '#40c0f0',
  primaryDarker: darken(0.1, '#40c0f0'),
  secondary: '#f8ad1a',
  secondaryDarker: darken(0.1, '#f8ad1a'),
  white: '#fff',
  dark: '#1C1D21',
  darkLighter: lighten(0.1, '#1C1D21'),
  gray: '#979797',
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
    default: {},
    hover: { selector: '&:hover' },
    focus: { selector: '&:focus' },
    disabled: { selector: '&:disabled' },
  },
  defaultCondition: 'default',
  properties: {
    color: colors,
    background: { ...colors, ...bgColors },
  },
});

const cursorProperties = defineProperties({
  conditions: {
    default: {},
    disabled: { selector: '&:disabled' },
  },
  defaultCondition: 'default',
  properties: {
    cursor: ['pointer', 'not-allowed'],
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  colorProperties,
  cursorProperties
);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];
