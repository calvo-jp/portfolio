import { Box, styled } from '@/styled-system/jsx';
import { Assign, HTMLStyledProps } from '@/styled-system/types';
import { ReactNode } from 'react';

interface BaseProps {
  /**
   * non-zero based index
   */
  index: number;
  title: ReactNode;
  children?: never;
}

interface SectionHeadingProps extends Assign<HTMLStyledProps<'h2'>, BaseProps> {}

export function SectionHeading(props: SectionHeadingProps) {
  const { index, title, ...others } = props;

  return (
    <styled.h2 display="flex" alignItems="center" {...others}>
      <styled.span color="fg.accent" fontSize="lg" fontFamily="mono" lineHeight="none">
        {index.toString().padStart(2, '0')}.
      </styled.span>
      <styled.span
        ml={2}
        color="fg.stronger"
        fontSize={{
          base: '2xl',
          lg: '3xl',
        }}
        fontWeight="black"
        lineHeight="none"
      >
        {title}
      </styled.span>
      <Box ml={3} flexGrow={1} h="1px" bg="bg.light" />
    </styled.h2>
  );
}
