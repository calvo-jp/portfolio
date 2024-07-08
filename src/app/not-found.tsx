import { Button } from '@/lib/button';
import { Link } from '@/lib/link';
import { Box, styled } from '@/styled-system/jsx';

export default function NotFound() {
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
				color="green.500"
			>
				404
			</styled.h1>
			<styled.h2
				fontSize={{
					base: '2xl',
					lg: '3xl',
				}}
				lineHeight="none"
				color="gray-true.300"
			>
				Page Not Found
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
