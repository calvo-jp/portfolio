import { cva } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';
import { ark } from '@ark-ui/react';

export const Icon = styled(
  ark.svg,
  cva({
    base: {
      w: 4,
      h: 4,
    },
  }),
);
