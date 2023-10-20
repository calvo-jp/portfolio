import { styled } from '@/styled-system/jsx';
import image from 'next/image';
import link from 'next/link';

export const Link = styled(link);
export const Image = styled(
  image,
  {},
  {
    shouldForwardProp(propKey) {
      return ['width', 'height'].includes(propKey);
    },
  },
);
