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
    const { children: __html, css, ...others } = props;

    return (
      <StyledArkDiv
        ref={ref}
        css={{
          hyphens: 'auto',

          '& a': {
            color: 'fg.accent',
            textUnderlineOffset: '0.35rem',
            _hover: {
              textDecoration: 'underline',
            },
          },

          '& li': {
            mt: 2,

            _first: {
              mt: 0,
            },
          },

          '& p': {
            mt: {
              base: 4,
              lg: 5,
            },

            _first: {
              mt: 0,
            },
          },

          ...css,
        }}
        dangerouslySetInnerHTML={{ __html }}
        {...others}
      />
    );
  },
);
