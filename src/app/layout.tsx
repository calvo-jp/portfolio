import './globals.css';

import {getAuthor} from '@/lib/get-author';
import {cx} from '@/styled-system/css';
import {styled} from '@/styled-system/jsx';
import {token} from '@/styled-system/tokens';
import type {Metadata, Viewport} from 'next';
import {Inter, JetBrains_Mono} from 'next/font/google';
import type {PropsWithChildren} from 'react';
import {EmailAd} from './email-ad';
import {Footer} from './footer';
import {Navbar} from './navbar';
import {Socials} from './socials';

export const viewport: Viewport = {
	width: 'device-width',
	viewportFit: 'contain',
	userScalable: false,
	initialScale: 1,
	minimumScale: 1,
	maximumScale: 1,
	colorScheme: 'dark light',
	themeColor: [
		{media: '(prefers-color-scheme: light)', color: token('colors.white')},
		{
			media: '(prefers-color-scheme: dark)',
			color: token('colors.gray-true.900'),
		},
	],
};

const sans = Inter({
	weight: ['400', '500', '600', '700'],
	display: 'swap',
	subsets: ['latin'],
	preload: true,
	adjustFontFallback: true,
	variable: '--font-sans',
	fallback: [
		'system-ui',
		'-apple-system',
		'BlinkMacSystemFont',
		"'Segoe UI'",
		'Roboto',
		'Oxygen',
		'Ubuntu',
		'Cantarell',
		"'Open Sans'",
		"'Helvetica Neue'",
		'sans-serif',
	],
});

const mono = JetBrains_Mono({
	weight: ['400'],
	display: 'swap',
	subsets: ['latin'],
	preload: true,
	adjustFontFallback: true,
	variable: '--font-mono',
	fallback: [
		/**/
		"'Courier New'",
		'Courier',
		'monospace',
	],
});

export async function generateMetadata(): Promise<Metadata> {
	const author = await getAuthor();
	const title = author.name;
	const description = `${author.name} a software engineer dedicated to user-centric solutions that balance exceptional experiences with long-term maintainability`;

	return {
		title: {
			default: description,
			template: `${title} - %s`,
		},
		description,
		metadataBase: new URL('https://calvojp.vercel.app'),
		keywords: [
			'Porfolio',
			'Dark Mode',
			'Philippines',
			'Web Developer',
			'John Paul Calvo',
		],
		openGraph: {
			type: 'website',
			title,
			description,
			images: ['/opengraph-banner.jpg'],
		},
	};
}

export default async function RootLayout({children}: PropsWithChildren) {
	return (
		<styled.html
			lang="en"
			className={cx(sans.variable, mono.variable)}
			colorScheme="dark"
			scrollBehavior="smooth"
			scrollbarGutter="stable"
			lgDown={{
				_scrollbar: {
					display: 'none',
				},
			}}
			smOnly={{
				fontSize: 'lg',
			}}
			mdOnly={{
				fontSize: 'xl',
			}}
		>
			<styled.body
				bg="gray-true.900"
				color="gray-true.400"
				minHeight="dvh"
				fontFamily="sans"
			>
				<Navbar />
				<styled.main
					id="content"
					px={{
						base: 4,
						md: 6,
						lg: 4,
					}}
					lg={{
						w: '75vw',
						mx: 'auto',
						maxW: 'breakpoint-lg',
					}}
				>
					{children}

					<Socials />
					<EmailAd />
				</styled.main>
				<Footer />
			</styled.body>
		</styled.html>
	);
}
