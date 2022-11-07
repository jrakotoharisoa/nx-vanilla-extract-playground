import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { sprinkles } from '../sprinkles.css';

export const button = recipe({
  base: sprinkles({
    borderRadius: 'round',
    border: 'none',
  }),

  variants: {
    color: {
      dark: sprinkles({ color: 'white', background: 'dark' }),
      primary: sprinkles({ color: 'dark', background: 'primary' }),
      secondary: sprinkles({ color: 'dark', background: 'secondary' }),
    },
    size: {
      medium: sprinkles({ paddingX: 'large', paddingY: 'medium' }),
      large: sprinkles({ paddingX: 'large', paddingY: 'large' }),
    },
  },

  defaultVariants: {
    color: 'dark',
    size: 'medium',
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;