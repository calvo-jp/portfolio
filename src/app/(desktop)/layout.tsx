import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <body className="min-h-screen min-w-[1024px] bg-white font-sans text-gray-900">
      {children}
    </body>
  );
}
