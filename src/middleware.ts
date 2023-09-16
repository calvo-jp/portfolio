import { NextRequest, NextResponse } from 'next/server';
import { isMobile } from './lib/is-mobile';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

export function middleware(req: NextRequest) {
  const url = new URL(req.url);

  if (
    isMobile(req.headers.get('user-agent')) &&
    !url.pathname.startsWith('/m')
  ) {
    url.pathname = `/m${url.pathname}`;

    return NextResponse.redirect(url);
  }
}
