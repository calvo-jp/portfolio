'use client';

import {
  Segment,
  SegmentControl,
  SegmentGroup,
  SegmentGroupIndicator,
  SegmentLabel,
} from '@ark-ui/react';
import {
  IconEdit,
  IconFolderCode,
  IconMailBolt,
  IconSmartHome,
} from '@tabler/icons-react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function NavbarLinks() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    links.forEach((o) => {
      router.prefetch(o.path);
    });
  }, [router]);

  return (
    <SegmentGroup
      value={pathname}
      onChange={(o) => router.push(o.value)}
      className="flex h-full py-2"
    >
      <SegmentGroupIndicator className="rounded-full bg-gray-800/25" />

      {links.map(({ path, label, icon: SVGIcon }) => (
        <Segment
          key={path}
          value={path}
          className="z-10 flex h-14 w-14 cursor-pointer items-center justify-center"
        >
          <SegmentLabel>
            <SVGIcon className="h-7.5 w-7.5" />
            <span className="sr-only">{label}</span>
          </SegmentLabel>
          <SegmentControl />
        </Segment>
      ))}
    </SegmentGroup>
  );
}

const links = [
  {
    icon: IconSmartHome,
    path: '/m',
    label: 'About',
  },
  {
    icon: IconEdit,
    path: '/m/blog',
    label: 'Blog',
  },
  {
    icon: IconFolderCode,
    path: '/m/portfolio',
    label: 'Portfolio',
  },
  {
    icon: IconMailBolt,
    path: '/m/contact',
    label: 'Contact',
  },
];
