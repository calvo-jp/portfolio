import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <body className="min-h-screen bg-white font-sans text-gray-900">
      {children}
    </body>
  );
}
