import {useState} from 'react';

export interface UseDisclosureProps {
  onOpen?(): void;
  onClose?(): void;
  defaultOpen?: boolean;
}

export type UseDisclosureReturn = ReturnType<typeof useDisclosure>;

export function useDisclosure(props: UseDisclosureProps = {}) {
  const [open, setOpen] = useState(!!props.defaultOpen);

  const onOpen = () => {
    setOpen(true);
    props.onOpen?.();
  };

  const onClose = () => {
    setOpen(false);
    props.onClose?.();
  };

  const onToggle = () => {
    setOpen((value) => !value);
  };

  return {
    open,
    onOpen,
    onClose,
    onToggle,
  };
}
