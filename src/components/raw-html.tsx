import { styled } from '@/styled-system/jsx';
import { Assign, HTMLStyledProps } from '@/styled-system/types';
import { HTMLArkProps, ark } from '@ark-ui/react';
import { forwardRef } from 'react';

interface StyledArkDivProps extends Assign<HTMLArkProps<'div'>, HTMLStyledProps<'div'>> {}
const StyledArkDiv = styled(ark.div);

interface RawHtmlBaseProps {
  children: string;
  dangerouslySetInnerHTML?: never;
}

interface RawHtmlProps extends Assign<StyledArkDivProps, RawHtmlBaseProps> {}

export const RawHtml = forwardRef<HTMLDivElement, RawHtmlProps>(
  function RawHtml(props, ref) {
    const { children: __html, ...others } = props;

    return <StyledArkDiv ref={ref} dangerouslySetInnerHTML={{ __html }} {...others} />;
  },
);
