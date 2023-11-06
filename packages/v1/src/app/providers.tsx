'use client';

import {Theme} from '@/utils/types';
import {ThemeProvider} from 'next-themes';
import {PropsWithChildren} from 'react';

export function Providers(props: PropsWithChildren) {
	return (
		<ThemeProvider
			attribute="class"
			storageKey="calvojp/theme"
			defaultTheme={Theme.Dark}
			themes={Object.values(Theme)}
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
