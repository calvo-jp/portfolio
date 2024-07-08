import { Button } from '@/lib/button';
import { getAuthor } from '@/lib/get-author';
import { Link } from '@/lib/link';
import { styled } from '@/styled-system/jsx';

export async function Contact() {
	const author = await getAuthor();

	return (
		<styled.section
			id="contact"
			py={{
				base: 16,
				lg: 32,
			}}
			textAlign="center"
		>
			<styled.p color="green.500" fontFamily="mono">
				03. What&rsquo;s next?
			</styled.p>
			<styled.h2
				color="gray-true.200"
				fontSize={{
					base: '4xl',
					lg: '6xl',
				}}
				fontWeight="bold"
			>
				Get In Touch
			</styled.h2>
			<styled.p mt={4} maxW="36rem" mx="auto" fontSize="lg">
				While I&rsquo;m not actively seeking new opportunities at the moment,
				I&rsquo;m always available in my inbox. Whether you have a query or
				simply want to drop a greeting, I&rsquo;ll make an effort to respond
				to&nbsp;you!
			</styled.p>
			<Button w="fit" mx="auto" mt={16} asChild>
				<Link href={`mailto:${author.contact.email}`} prefetch={false}>
					Say Hello
				</Link>
			</Button>
		</styled.section>
	);
}
