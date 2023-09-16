import '@/styles/mobile.css';
import { Fragment, PropsWithChildren } from 'react';
import { Navbar } from './navbar';

export default function MobileRootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <Fragment>
      <Navbar />

      <main className="p-4">{children}</main>
    </Fragment>
  );
}
