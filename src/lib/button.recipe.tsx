import { cva } from '@/styled-system/css';
import { RecipeVariantProps } from '@/styled-system/types';

export const buttonRecipe = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    color: 'green',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'green',
    rounded: 'sm',
    fontFamily: 'mono',
    cursor: 'pointer',
  },
  variants: {
    size: {
      sm: {
        h: 8,
        px: 3,
        minW: 8,
        fontSize: 'xs',
      },
      md: {},
      lg: {},
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export type ButtonVariants = NonNullable<
  RecipeVariantProps<typeof buttonRecipe>
>;
