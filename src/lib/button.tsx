import { cx } from '@/styled-system/css';
import { HTMLStyledProps, styled } from '@/styled-system/jsx';
import { Assign } from '@/styled-system/types';
import { HTMLArkProps, ark } from '@ark-ui/react';
import { forwardRef } from 'react';
import { ButtonVariants, buttonRecipe } from './button.recipe';

const StyledArkButton = styled(ark.button);

type StyledArkButtonProps = Assign<HTMLArkProps<'button'>, HTMLStyledProps<'button'>>;

export interface ButtonProps extends Assign<StyledArkButtonProps, ButtonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const [variantProps, otherProps] = buttonRecipe.splitVariantProps(props);

  return (
    <StyledArkButton
      ref={ref}
      type="button"
      {...otherProps}
      className={cx(buttonRecipe(variantProps), otherProps.className)}
    />
  );
});

Button.displayName = 'Button';
