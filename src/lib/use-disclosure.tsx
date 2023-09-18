import {useState} from 'react';

interface UseDisclosureProps {
  onOpen?(): void;
  onClose?(): void;
  defaultValue?: boolean;
}

export function useDisclosure(props: UseDisclosureProps = {}) {
  const [open, setOpen] = useState(!!props.defaultValue);

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
