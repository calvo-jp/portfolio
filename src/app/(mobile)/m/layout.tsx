import '@/styles/mobile.css';

import logo from '@/assets/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { ColorModeToggle } from './color-mode-toggle';
import { Navbar } from './navbar';

export default function MobileRootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <main className="min-h-screen p-4">
        <section className="flex items-start">
          <Link href="/m">
            <Image
              src={logo}
              alt="logo"
              className="h-12 w-auto"
              draggable={false}
              priority
            />
          </Link>

          <div className="grow" />

          <ColorModeToggle />
        </section>
        <section>{children}</section>
        <section className="h-mobile-navbar-height" />
      </main>

      <Navbar />
    </>
  );
}
