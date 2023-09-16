import '@/styles/desktop.css';
import { PropsWithChildren } from 'react';

export default function DesktopRootLayout({ children }: PropsWithChildren) {
  return (
    <body className="min-h-screen bg-white font-sans text-gray-900">
      {children}
    </body>
  );
}
