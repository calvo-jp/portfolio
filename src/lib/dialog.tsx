import { styled } from '@/styled-system/jsx';
import * as dialog from '@ark-ui/react/dialog';

export const Dialog = styled(dialog.Dialog);
export const DialogTrigger = styled(dialog.DialogTrigger);
export const DialogBackdrop = styled(dialog.DialogBackdrop, {
  base: {
    zIndex: 'overlay',
  },
});

export const DialogPositioner = styled(dialog.DialogPositioner);
export const DialogContent = styled(
  dialog.DialogContent,
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

export const DialogTitle = styled(dialog.DialogTitle);
export const DialogDescription = styled(dialog.DialogDescription);
export const DialogCloseTrigger = styled(dialog.DialogCloseTrigger);
