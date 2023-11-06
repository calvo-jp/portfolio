'use client';

import {ThemeProvider} from 'next-themes';
import {PropsWithChildren} from 'react';

export function Providers(props: PropsWithChildren) {
	return (
		<ThemeProvider attribute="class" storageKey="theme" defaultTheme="system">
			{props.children}
		</ThemeProvider>
	);
}
