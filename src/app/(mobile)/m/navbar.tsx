import {
  IconEdit,
  IconFolderCode,
  IconMailBolt,
  IconSmartHome,
} from '@tabler/icons-react';
import Link from 'next/link';

export function Navbar() {
  return (
    <header className="h-mobile-navbar-height z-sticky fixed bottom-0 left-0 flex w-full items-center justify-center gap-2 border-t border-gray-200 bg-gray-900 px-4 text-gray-100">
      <nav>
        <ul className="flex py-2">
          {links.map(({ path, label, icon: SVGIcon }) => (
            <li key={path}>
              <Link
                href={path}
                className="flex items-center gap-2 px-4 py-2 text-lg"
              >
                <SVGIcon className="h-7.5 w-7.5" />
                <span className="sr-only">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
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
