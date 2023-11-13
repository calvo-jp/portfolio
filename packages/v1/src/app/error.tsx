'use client';

import {Button} from '@/components/button';
import {Link} from '@/components/link';
import {Box, styled} from '@/styled-system/jsx';

export default function Error() {
	return (
		<Box
			px={8}
			pt={{
				base: 48,
				lg: 40,
			}}
			pb={{
				base: 40,
				lg: 32,
			}}
			textAlign="center"
		>
			<styled.h1
				fontFamily="mono"
				fontSize={{
					base: '8xl',
					lg: '9xl',
				}}
				fontWeight="black"
				lineHeight="none"
				color="fg.accent"
			>
				503
			</styled.h1>
			<styled.h2
				fontSize={{
					base: '2xl',
					lg: '3xl',
				}}
				lineHeight="none"
				color="fg.strong"
			>
				Something went wrong
			</styled.h2>
			<Button asChild>
				<Link
					href="/"
					w={48}
					mt={{
						base: 12,
						lg: 16,
					}}
					mx="auto"
					gap={3}
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					Go Home
				</Link>
			</Button>
		</Box>
	);
}
