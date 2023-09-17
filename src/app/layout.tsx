import '@/styles/globals.css';
import { Metadata } from 'next';
import { Fira_Code, Lato } from 'next/font/google';
import { PropsWithChildren } from 'react';
import { twJoin } from 'tailwind-merge';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Calvo JP',
};

const sans = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-sans',
});

const mono = Fira_Code({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-mono',
});

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <html
      lang="en"
      className={twJoin(sans.variable, mono.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-white font-sans text-gray-900">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
