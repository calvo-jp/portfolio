'use client';

import { useHydrated } from '@/lib/use-hydrated';
import { Switch, SwitchControl, SwitchLabel, SwitchThumb } from '@ark-ui/react';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { useTheme } from 'next-themes';

export function ColorModeToggle() {
  const hydrated = useHydrated();

  const { theme, setTheme } = useTheme();

  return (
    <Switch
      className="w-18 relative h-10 cursor-pointer rounded-full bg-gray-200 p-1"
      checked={hydrated && theme === 'dark'}
      onChange={(o) => {
        setTheme(o.checked ? 'dark' : 'light');
      }}
    >
      <SwitchControl className="flex">
        <SwitchThumb className="data-checked:translate-x-8 absolute left-1 top-1 block h-8 w-8 rounded-full bg-white shadow-md transition-all duration-150" />

        <div className="flex h-8 w-8 items-center justify-center">
          <IconSun />
        </div>
        <div className="flex h-8 w-8 items-center justify-center">
          <IconMoon />
        </div>
      </SwitchControl>
      <SwitchLabel className="sr-only">Toggle Dark Mode</SwitchLabel>
    </Switch>
  );
}
