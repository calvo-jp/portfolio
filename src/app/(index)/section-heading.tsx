import { Icon } from '@/components/icon';
import { Box, Flex, styled } from '@/styled-system/jsx';
import { Assign, HTMLStyledProps } from '@/styled-system/types';
import { Asterisk02Icon } from '@untitled-theme/icons-react';
import { ReactNode } from 'react';

interface BaseProps {
  index: number;
  title: ReactNode;
  children?: never;
}

interface SectionHeadingProps
  extends Assign<HTMLStyledProps<'h2'>, BaseProps> {}

export function SectionHeading(props: SectionHeadingProps) {
  const { index, title, ...others } = props;

  return (
    <styled.h2 display="flex" alignItems="center" {...others}>
      <styled.span
        color="emerald.500"
        fontSize="lg"
        fontFamily="mono"
        lineHeight="none"
      >
        {index.toString().padStart(2, '0')}.
      </styled.span>

      <styled.span
        ml={2}
        color="zinc.200"
        fontSize={{
          base: '2xl',
          lg: '3xl',
        }}
        fontWeight="black"
        lineHeight="none"
      >
        {title}
      </styled.span>

      <Box mx={3} flexGrow={1} h="1px" bg="zinc.800" />

      <Flex>
        <Icon
          w={4}
          h={4}
          color="zinc.600"
          display={{
            base: 'none',
            lg: 'block',
          }}
          asChild
        >
          <Asterisk02Icon strokeWidth="1.66667" />
        </Icon>
        <Icon
          w={4}
          h={4}
          color="zinc.600"
          display={{
            base: 'none',
            lg: 'block',
          }}
          asChild
        >
          <Asterisk02Icon strokeWidth="1.66667" />
        </Icon>
      </Flex>
    </styled.h2>
  );
}
