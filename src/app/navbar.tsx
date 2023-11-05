import { IconTerminal } from '@/components/icons';
import { Link } from '@/components/link';
import { Spacer, VisuallyHidden, styled } from '@/styled-system/jsx';
import { NavbarDrawer } from './navbar-drawer';
import { NavbarNav } from './navbar-nav';

export async function Navbar() {
	return (
		<styled.header
			p={{
				base: 4,
				md: 6,
			}}
			bg="bg.alpha"
			pos="sticky"
			top={0}
			zIndex="sticky"
			backdropFilter="blur(8px)"
			display="flex"
			alignItems="center"
			lg={{
				px: 12,
			}}
		>
			<Link href="/">
				<IconTerminal
					w={8}
					h={8}
					color="fg.accent"
					lg={{
						w: 6,
						h: 6,
					}}
				/>
				<VisuallyHidden>Home</VisuallyHidden>
			</Link>
			<Spacer />
			<NavbarNav />
			<NavbarDrawer />
		</styled.header>
	);
}
