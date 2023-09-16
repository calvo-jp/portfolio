import { IconButton } from '@/lib/icon-button';
import { IconMenu } from '@tabler/icons-react';

export function Navbar() {
  return (
    <div className="flex gap-2 border-b px-4 py-3">
      <div className="grow"></div>
      <IconButton icon={<IconMenu />} aria-label="Toggle menu" />
    </div>
  );
}
