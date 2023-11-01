'use client';

import { styled } from '@/styled-system/jsx';
import { Dialog as parts } from '@ark-ui/react';

export const Dialog = styled(parts.Root);
export const DialogTrigger = styled(parts.Trigger, {
  base: {
    cursor: 'pointer',
  },
});

export const DialogBackdrop = styled(parts.Backdrop, {
  base: {
    zIndex: 'overlay',
  },
});

export const DialogPositioner = styled(parts.Positioner);
export const DialogContent = styled(
  parts.Content,
  {
    base: {
      zIndex: 'modal',
    },
  },
  {
    defaultProps: {
      lazyMount: true,
      unmountOnExit: false,
    },
  },
);

export const DialogTitle = styled(parts.Title);
export const DialogDescription = styled(parts.Description);
export const DialogCloseTrigger = styled(parts.CloseTrigger, {
  base: {
    cursor: 'pointer',
  },
});
