import '@/assets/styles/globals.css';

import { cx } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';
import { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import localFont from 'next/font/local';
import { PropsWithChildren } from 'react';
import { Footer } from './footer';
import { Navbar } from './navbar';

export const metadata: Metadata = {
  title: 'Calvo JP',
};

const sans = localFont({
  src: [
    {
      path: '../assets/fonts/CalibreRegular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/CalibreMedium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/CalibreSemibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/CalibreBold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/CalibreBlack.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
});

const mono = Fira_Code({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <styled.html lang="en" className={cx(sans.variable, mono.variable)}>
      <styled.body bg="navy" color="slate" minHeight="dvh" fontFamily="sans">
        <Navbar />
        <styled.main>{children}</styled.main>
        <Footer />
      </styled.body>
    </styled.html>
  );
}
