import { globalStyle, style } from '@vanilla-extract/css';
import { space } from './sprinkles.css';

export const spaceX = style({});
globalStyle(`${spaceX} > * + *`, {
  marginLeft: space.medium,
});

export const spaceXSmall = style({});
globalStyle(`${spaceXSmall} > * + *`, {
  marginLeft: space.medium,
});
