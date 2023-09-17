import { NavbarLinks } from './navbar-links';

export function Navbar() {
  return (
    <header className="fixed bottom-0 left-0 z-sticky flex h-mobile-navbar-height w-full items-center justify-center gap-2 border-t border-gray-200 bg-gray-900 px-4 text-gray-100">
      <NavbarLinks />
    </header>
  );
}
