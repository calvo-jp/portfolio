import { Button } from '@/lib/button';
import { IconButton } from '@/lib/icon-button';
import { IconSettings } from '@tabler/icons-react';

export default function Landing() {
  return (
    <div className="p-4">
      <div className="flex gap-4">
        <Button size="sm">Click me</Button>
        <Button size="md">Click me</Button>
        <Button size="lg">Click me</Button>
        <Button size="xl">Click me</Button>
      </div>

      <div className="mt-12 flex gap-4">
        <IconButton size="sm" icon={<IconSettings />} aria-label="Settings" />
        <IconButton size="md" icon={<IconSettings />} aria-label="Settings" />
        <IconButton size="lg" icon={<IconSettings />} aria-label="Settings" />
        <IconButton size="xl" icon={<IconSettings />} aria-label="Settings" />
      </div>
    </div>
  );
}
