import '@/styles/mobile.css';
import { Fragment, PropsWithChildren } from 'react';

export default function MobileRootLayout({ children }: PropsWithChildren<{}>) {
  return <Fragment>{children}</Fragment>;
}
