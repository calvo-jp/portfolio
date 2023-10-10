import '@/styles/globals.css';
import clsx from 'clsx';
import { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import localFont from 'next/font/local';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'Calvo JP',
};

const sans = localFont({
  src: [
    {
      path: '../assets/fonts/CalibreRegular.otf',
      weight: '400',
    },
    {
      path: '../assets/fonts/CalibreMedium.otf',
      weight: '500',
    },
    {
      path: '../assets/fonts/CalibreSemibold.otf',
      weight: '600',
    },
    {
      path: '../assets/fonts/CalibreBold.otf',
      weight: '700',
    },
    {
      path: '../assets/fonts/CalibreBlack.otf',
      weight: '900',
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
    <html
      lang="en"
      className={clsx(
        sans.variable,
        mono.variable,
        'overflow-x-hidden overflow-y-hidden overscroll-none lg:overflow-y-auto',
      )}
    >
      <body className="min-h-screen bg-navy font-sans text-slate">
        {children}
      </body>
    </html>
  );
}
