import '@/styles/globals.css';
import { Metadata } from 'next';
import { Fira_Code, Oxygen } from 'next/font/google';
import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export const metadata: Metadata = {
  title: 'Calvo JP',
};

const sans = Oxygen({
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

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={twMerge(sans.variable, mono.variable)}>
      {children}
    </html>
  );
}
