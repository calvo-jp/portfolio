import '@/styles/desktop.css';
import { Fragment, PropsWithChildren } from 'react';

export default function DesktopRootLayout({ children }: PropsWithChildren<{}>) {
  return <Fragment>{children}</Fragment>;
}
