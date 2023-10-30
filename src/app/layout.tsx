import '@/assets/styles/globals.css';

import { Link } from '@/components/link';
import { AUTHOR } from '@/config/author';
import { cx } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';
import { visuallyHidden } from '@/styled-system/patterns';
import { GeistMono, GeistSans } from 'geist/font';
import { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import { EmailAd } from './email-ad';
import { Footer } from './footer';
import { Navbar } from './navbar';
import { Socials } from './socials';

const title = AUTHOR.name;
const description = `${AUTHOR.name} is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences.`;

export const metadata: Metadata = {
  title: {
    default: title,
    template: `${title} - %s`,
  },
  description,
  metadataBase: new URL('https://calvo-jp.vercel.app'),
  openGraph: {
    type: 'website',
    title,
    description,
    images: ['/open-graph-banner.jpeg'],
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <styled.html
      lang="en"
      className={cx(GeistMono.variable, GeistSans.variable)}
      scrollBehavior="smooth"
      lgDown={{
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
      smOnly={{
        fontSize: 'lg',
      }}
      mdOnly={{
        fontSize: 'xl',
      }}
    >
      <styled.body bg="neutral.900" color="neutral.400" minHeight="dvh" fontFamily="sans">
        <SkipNav />
        <Navbar />

        <styled.main
          id="content"
          px={4}
          lg={{
            w: '75vw',
            mx: 'auto',
            maxW: 'breakpoint-lg',
          }}
        >
          {children}

          <Socials />
          <EmailAd />
        </styled.main>

        <Footer />
      </styled.body>
    </styled.html>
  );
}

function SkipNav() {
  return (
    <Link href="#content" prefetch={false} className={visuallyHidden()}>
      Skip to Content
    </Link>
  );
}
