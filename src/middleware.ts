import { NextRequest } from 'next/server';

export function middleware(_: NextRequest) {}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
