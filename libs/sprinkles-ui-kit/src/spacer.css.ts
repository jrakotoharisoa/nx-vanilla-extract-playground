import { globalStyle, style } from '@vanilla-extract/css';
import { space } from './sprinkles.css';

const spaceXMedium = style({});
globalStyle(`${spaceXMedium} > * + *`, {
  marginLeft: space.medium,
});

const spaceXSmall = style({});
globalStyle(`${spaceXSmall} > * + *`, {
  marginLeft: space.medium,
});

export const spaceX = {
  small: spaceXSmall,
  medium: spaceXMedium,
};
