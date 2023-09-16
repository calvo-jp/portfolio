import '@/styles/globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'Calvo JP',
};

const sans = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={sans.className}>
      {children}
    </html>
  );
}
