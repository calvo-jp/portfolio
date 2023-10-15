import { cx } from '@/styled-system/css';
import { HTMLStyledProps, styled } from '@/styled-system/jsx';
import { Assign } from '@/styled-system/types';
import { HTMLArkProps, ark } from '@ark-ui/react';
import { forwardRef } from 'react';
import { ButtonVariants, buttonRecipe } from './button.recipe';

const StyledArkButton = styled(ark.button);

export const Button = forwardRef<
  HTMLButtonElement,
  Assign<HTMLArkProps<'button'>, HTMLStyledProps<'button'>> & ButtonVariants
>((props, ref) => {
  const [variantProps, otherProps] = buttonRecipe.splitVariantProps(props);

  return (
    <StyledArkButton
      type="button"
      ref={ref}
      {...otherProps}
      className={cx(buttonRecipe(variantProps), otherProps.className)}
    />
  );
});

Button.displayName = 'Button';
