import '@/assets/styles/globals.css';

import { cx } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';
import { Metadata } from 'next';
import { JetBrains_Mono, Lato } from 'next/font/google';
import { PropsWithChildren } from 'react';
import { Footer } from './footer';
import { Navbar } from './navbar';

export const metadata: Metadata = {
  title: 'Calvo JP',
};

const sans = Lato({
  weight: ['400', '700'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-sans',
});

const mono = JetBrains_Mono({
  weight: '400',
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
        <styled.main>{children}</styled.main>
        <Footer />
      </styled.body>
    </styled.html>
  );
}
