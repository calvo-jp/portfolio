import { cva } from '@/styled-system/css';
import { RecipeVariantProps } from '@/styled-system/types';

export const buttonRecipe = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    color: 'brand.teal',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'brand.teal',
    rounded: 'sm',
    fontFamily: 'mono',
    cursor: 'pointer',
  },
  variants: {
    size: {
      sm: {
        h: 8,
        px: 4,
        fontSize: 'xs',
      },
      lg: {
        h: 14,
        px: 8,
        fontSize: 'sm',
      },
    },
  },
  defaultVariants: {
    size: 'lg',
  },
});

export type ButtonVariants = NonNullable<RecipeVariantProps<typeof buttonRecipe>>;
