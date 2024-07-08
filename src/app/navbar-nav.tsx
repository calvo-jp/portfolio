import {Button} from '@/lib/button';
import {getAuthor} from '@/lib/get-author';
import {Link} from '@/lib/link';
import {VisuallyHidden, styled} from '@/styled-system/jsx';

export async function NavbarNav() {
	const author = await getAuthor();

	return (
		<styled.nav
			display="flex"
			alignItems="center"
			lgDown={{
				display: 'none',
			}}
		>
			<styled.ul display="flex" alignItems="center" gap={8}>
				{NAVBAR_NAV_ITEMS.map((item, index) => (
					<styled.li key={item.path}>
						<Link
							href={item.path}
							display="flex"
							alignItems="center"
							gap={1}
							className="group"
						>
							<styled.span fontFamily="mono" color="green.500" fontSize="xs">
								{index.toString().padStart(2, '0')}.
							</styled.span>
							<styled.span
								fontSize="sm"
								transition="colors token(durations.slow)"
								color={{
									base: 'gray-true.200',
									_groupHover: 'green.500',
								}}
							>
								{item.label}
							</styled.span>
						</Link>
					</styled.li>
				))}
			</styled.ul>

			<Button ml={8} mr={5} size="sm" asChild>
				<Link
					href={author.resume}
					target="_blank"
					rel="noreferrer noopener"
					prefetch={false}
				>
					<VisuallyHidden>Download </VisuallyHidden>Resume
				</Link>
			</Button>
		</styled.nav>
	);
}

export const NAVBAR_NAV_ITEMS = [
	{
		path: '/#about',
		label: 'About',
	},
	{
		path: '/#experience',
		label: 'Experience',
	},
	{
		path: '/#projects',
		label: 'Projects',
	},
	{
		path: '/#contact',
		label: 'Contact',
	},
];
