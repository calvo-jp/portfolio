import '@/styles/mobile.css';

import logo from '@/assets/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import {PropsWithChildren} from 'react';
import {Navbar} from './navbar';
import {ThemeSwitcher} from './theme-switcher';

export default function MobileRootLayout({children}: PropsWithChildren<{}>) {
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

          <ThemeSwitcher />
        </section>
        <section>{children}</section>
        <section className="h-mobile-navbar-height" />
      </main>

      <Navbar />
    </>
  );
}
