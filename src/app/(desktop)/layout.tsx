import '@/styles/desktop.css';

import { PropsWithChildren } from 'react';
import { Navbar } from './navbar';

export default function DesktopRootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <Navbar />

      <main className="p-8">{children}</main>
    </>
  );
}
