import { useState } from 'react';

export interface UseDisclosureProps {
  onOpen?(): void;
  onClose?(): void;
  defaultOpen?: boolean;
}

export interface UseDisclosureReturn extends ReturnType<typeof useDisclosure> {}

export function useDisclosure(props: UseDisclosureProps = {}) {
  const [open, setOpen] = useState(props.defaultOpen ?? false);

  const onOpen = () => {
    setOpen(true);
    props.onOpen?.();
  };

  const onClose = () => {
    setOpen(false);
    props.onClose?.();
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
