import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { sprinkles } from '../sprinkles.css';

export const button = recipe({
  base: style([
    sprinkles({
      borderRadius: 'round',
      border: 'none',
      cursor: {
        default: 'pointer',
        disabled: 'not-allowed',
      },
    }),
  ]),

  variants: {
    color: {
      dark: sprinkles({
        color: 'white',
      }),
      primary: sprinkles({
        color: { default: 'dark', disabled: 'white' },
      }),
      secondary: sprinkles({
        color: { default: 'dark', disabled: 'white' },
      }),
    },
    size: {
      medium: style([
        sprinkles({ paddingX: 'large', paddingY: 'medium' }),
        { fontSize: 14 },
      ]),
      large: style([
        sprinkles({ paddingX: 'large', paddingY: 'large' }),
        { fontSize: 16 },
      ]),
    },
  },
  defaultVariants: {
    color: 'dark',
    size: 'medium',
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
