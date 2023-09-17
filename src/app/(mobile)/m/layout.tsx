import '@/styles/mobile.css';
import { PropsWithChildren } from 'react';
import { Navbar } from './navbar';

export default function MobileRootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <Navbar />

      <main className="pb-mobile-navbar-height min-h-screen">
        <div className="p-4">{children}</div>
      </main>
    </>
  );
}
