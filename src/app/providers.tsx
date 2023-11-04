'use client';

import { Theme } from '@/types';
import { ThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';

export function Providers(props: PropsWithChildren) {
  return (
    <ThemeProvider
      attribute="class"
      storageKey="theme"
      defaultTheme={Theme.System}
      themes={[Theme.Dark, Theme.Light, Theme.System]}
      value={{
        dark: Theme.Dark,
        light: Theme.Light,
        system: Theme.System,
      }}
    >
      {props.children}
    </ThemeProvider>
  );
}
