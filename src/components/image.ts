'use client';

import { styled } from '@/styled-system/jsx';
import image from 'next/image';

export const Image = styled(
  image,
  {},
  {
    shouldForwardProp(key) {
      return ['width', 'height'].includes(key);
    },
  },
);
