import {Link} from '@/components/link';
import {Box} from '@/styled-system/jsx';
import {getAuthor} from '@/utils/get-author';
import {Portal} from '@ark-ui/react';

export async function EmailAd() {
	const author = await getAuthor();

	return (
		<Portal>
			<Box
				id="email-ad"
				w="12.5vh"
				pos="fixed"
				right={0}
				bottom={0}
				display="flex"
				justifyContent="start"
				lgDown={{
					display: 'none',
				}}
			>
				<Box w={5} display="flex" flexDir="column" alignItems="center" gap={6}>
					<Link
						href={`mailto:${author.contact.email}`}
						prefetch={false}
						fontFamily="mono"
						fontSize="xs"
						writingMode="vertical-rl"
						letterSpacing="widest"
						transition="colors token(durations.slow)"
						color={{
							_hover: 'fg.accent',
						}}
					>
						{author.contact.email}
					</Link>
					<Box h="15vh" w="1px" bg="bg.light" roundedTop="full" />
				</Box>
			</Box>
		</Portal>
	);
}
