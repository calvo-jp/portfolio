import {Icon} from '@/lib/icon';
import {Link} from '@/lib/link';
import {Spacer, VisuallyHidden, styled} from '@/styled-system/jsx';
import {TerminalIcon} from '@untitled-theme/icons-react';
import {NavbarDrawer} from './navbar-drawer';
import {NavbarNav} from './navbar-nav';

export async function Navbar() {
	return (
		<styled.header
			id="navbar"
			p={{
				base: 4,
				md: 6,
			}}
			bg="gray-true.900/75"
			pos="sticky"
			top={0}
			zIndex="sticky"
			backdropFilter="blur(6px)"
			display="flex"
			alignItems="center"
			lg={{
				px: 12,
			}}
		>
			<Link href="/">
				<Icon
					w={8}
					h={8}
					color="green.500"
					lg={{
						w: 6,
						h: 6,
					}}
					asChild
				>
					<TerminalIcon strokeWidth="1.66667" />
				</Icon>
				<VisuallyHidden>Home</VisuallyHidden>
			</Link>
			<Spacer />
			<NavbarNav />
			<NavbarDrawer />
		</styled.header>
	);
}
