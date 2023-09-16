import '@/styles/mobile.css';
import { PropsWithChildren } from 'react';

export default function MobileRootLayout({ children }: PropsWithChildren) {
  return (
    <body className="min-h-screen bg-white font-sans text-gray-900">
      {children}
    </body>
  );
}
