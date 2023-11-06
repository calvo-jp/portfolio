import '@/assets/styles/globals.css';

import {cx} from '@/styled-system/css';
import {styled} from '@/styled-system/jsx';
import {getAuthor} from '@/utils/get-author';
import {GeistMono, GeistSans} from 'geist/font';
import {Metadata} from 'next';
import {PropsWithChildren} from 'react';
import {EmailAd} from './email-ad';
import {Footer} from './footer';
import {Navbar} from './navbar';
import {Providers} from './providers';
import {Socials} from './socials';

export async function generateMetadata(): Promise<Metadata> {
	const author = await getAuthor();
	const title = author.name;
	const description = `${author.name} is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences.`;

	return {
		title: {
			default: title,
			template: `${title} - %s`,
		},
		description,
		metadataBase: new URL('https://calvo-jp.vercel.app'),
		openGraph: {
			type: 'website',
			title,
			description,
			images: ['/opengraph-banner.jpeg'],
		},
	};
}

export default async function RootLayout({children}: PropsWithChildren) {
	return (
		<styled.html
			lang="en"
			className={cx(GeistMono.variable, GeistSans.variable)}
			scrollBehavior="smooth"
			scrollbarGutter="stable"
			lgDown={{
				'&::-webkit-scrollbar': {
					display: 'none',
				},
			}}
			smOnly={{
				fontSize: 'lg',
			}}
			mdOnly={{
				fontSize: 'xl',
			}}
			suppressHydrationWarning
		>
			<styled.body bg="bg" color="fg" minHeight="dvh" fontFamily="sans">
				<Providers>
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
				</Providers>
			</styled.body>
		</styled.html>
	);
}
