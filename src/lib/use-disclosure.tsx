import { useState } from 'react';

export interface UseDisclosureProps {
  onOpen?(): void;
  onClose?(): void;
  defaultOpen?: boolean;
}

export type UseDisclosureReturn = ReturnType<typeof useDisclosure>;

export function useDisclosure(props?: UseDisclosureProps) {
  const [open, setOpen] = useState(props?.defaultOpen ?? false);

  const onOpen = () => {
    setOpen(true);

    if (props?.onOpen) {
      props.onOpen();
    }
  };

  const onClose = () => {
    setOpen(false);

    if (props?.onClose) {
      props.onClose();
    }
  };

  const onToggle = () => {
    if (open) {
      onClose();
    } else {
      onOpen();
    }
  };

  return {
    open,
    onOpen,
    onClose,
    onToggle,
  };
}
