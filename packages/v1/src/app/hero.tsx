import {Button} from '@/components/button';
import {Link} from '@/components/link';
import {styled} from '@/styled-system/jsx';
import {getAuthor} from '@/utils/get-author';

export async function Hero() {
	const author = await getAuthor();

	return (
		<styled.section id="hero" py={20}>
			<styled.h3 fontFamily="mono" color="fg.accent">
				Hi, I&rsquo;m
			</styled.h3>

			<styled.h1
				mt={5}
				color="fg.high"
				fontSize={{
					base: '5xl',
					lg: '8xl',
				}}
				fontWeight="extrabold"
				lineHeight="none"
			>
				{author.name}.
			</styled.h1>

			<styled.h2
				mt={{
					base: 3,
					lg: 4,
				}}
				color="fg.strong"
				fontSize={{
					base: '4xl',
					lg: '7xl',
				}}
				fontWeight="extrabold"
				lineHeight="none"
			>
				I bring websites to&nbsp;life!
			</styled.h2>

			<styled.p
				mt={{
					base: 4,
					lg: 5,
				}}
				fontSize="lg"
				lineHeight="normal"
				maxW="40rem"
			>
				I'm a software engineer with a passion for crafting exceptional digital
				experiences. My expertise lies in creating user-centric solutions that prioritize
				accessibility and innovative design
			</styled.p>

			<Button
				w="fit"
				mt={{
					base: 8,
					lg: 12,
				}}
				lgDown={{
					w: 'full',
					justifyContent: 'center',
				}}
				asChild
			>
				<Link href="/#work">Checkout my work</Link>
			</Button>
		</styled.section>
	);
}
