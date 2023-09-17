import { Switch, SwitchControl, SwitchLabel, SwitchThumb } from '@ark-ui/react';

export function ColorModeToggle() {
  return (
    <Switch className="w-18 relative h-10 cursor-pointer rounded-full bg-gray-200">
      <SwitchControl>
        <SwitchThumb className="data-checked:translate-x-8 absolute left-1 top-1 block h-8 w-8 rounded-full bg-white shadow-md transition-all duration-150" />
      </SwitchControl>
      <SwitchLabel className="sr-only">Toggle Dark Mode</SwitchLabel>
    </Switch>
  );
}
