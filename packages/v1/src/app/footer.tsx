import {Link} from '@/components/link';
import {Center, VisuallyHidden, styled} from '@/styled-system/jsx';
import {getAuthor} from '@/utils/get-author';
import {mapObject} from '@/utils/map-object';
import {getSocialIcon} from './socials';

export async function Footer() {
	const author = await getAuthor();

	return (
		<styled.footer pt={32} pb={8}>
			<Center
				mb={4}
				lg={{
					display: 'none',
				}}
			>
				<styled.nav>
					<styled.ul display="flex" alignItems="center" gap={5}>
						{mapObject(author.socials, (url, name) => (
							<styled.li key={name}>
								<Link
									href={url}
									target="_blank"
									rel="noreferrer noopener"
									prefetch={false}
									color="fg.strong"
								>
									{getSocialIcon(name)}
									<VisuallyHidden>{name}</VisuallyHidden>
								</Link>
							</styled.li>
						))}
					</styled.ul>
				</styled.nav>
			</Center>

			<Center fontFamily="mono" fontSize="sm">
				&copy; {author.name} {new Date().getFullYear()}
			</Center>
		</styled.footer>
	);
}
