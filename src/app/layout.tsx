import '@/assets/styles/globals.css';

import { AUTHOR } from '@/config/author';
import { cx } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';
import { Metadata } from 'next';
import { JetBrains_Mono, Lato } from 'next/font/google';
import { PropsWithChildren } from 'react';
import { EmailAd } from './email-ad';
import { Footer } from './footer';
import { Navbar } from './navbar';
import { Socials } from './socials';

const title = AUTHOR.name;
const description = `${AUTHOR.name} is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences.`;

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL('https://calvo-jp.vercel.app'),
  openGraph: {
    type: 'website',
    title,
    description,
    images: ['/open-graph-banner.jpeg'],
  },
};

const sans = Lato({
  weight: ['400', '700', '900'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-sans',
});

const mono = JetBrains_Mono({
  weight: ['400', '700'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-mono',
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <styled.html
      lang="en"
      className={cx(sans.variable, mono.variable)}
      scrollBehavior="smooth"
    >
      <styled.body bg="brand.navy" color="brand.slate" minHeight="dvh" fontFamily="sans">
        <Navbar />

        <styled.main w="75vw" px={4} maxW="breakpoint-lg" mx="auto">
          {children}

          <Socials />
          <EmailAd />
        </styled.main>

        <Footer />
      </styled.body>
    </styled.html>
  );
}
