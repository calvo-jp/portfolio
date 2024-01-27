import selfie from '@/assets/images/selfie.jpg';
import {Icon} from '@/components/icon';
import {Image} from '@/components/image';
import {Link} from '@/components/link';
import {RawHtml} from '@/components/raw-html';
import {Box, Flex, VisuallyHidden, styled} from '@/styled-system/jsx';
import {getAuthor} from '@/utils/get-author';
import {AsteriskIcon} from 'lucide-react';
import {SectionHeading} from './section-heading';

export async function About() {
	const {about, skills} = await getAuthor();

	return (
		<styled.section
			id="about"
			py={{
				base: 24,
				lg: 32,
			}}
		>
			<SectionHeading
				index={1}
				title="About Me"
				lg={{
					w: '1/2',
				}}
			/>

			<Flex
				mt={{
					base: 14,
					lg: 16,
				}}
				gap={{
					base: 6,
					lg: 24,
				}}
				flexDir={{
					base: 'column',
					lg: 'row',
				}}
				alignItems="start"
			>
				<Box
					flexShrink={0}
					lg={{
						w: '1/2',
					}}
				>
					<RawHtml fontSize="lg">{about}</RawHtml>

					<Box mt={5} fontSize="lg">
						Here are a few technologies I&rsquo;ve been working
						with&nbsp;recently:
					</Box>

					<styled.ul mt={5}>
						{skills.map((skill) => (
							<styled.li
								key={skill}
								fontFamily="mono"
								display="flex"
								alignItems="center"
								gap={1}
							>
								<Icon color="fg.accent" w={3} h={3} asChild>
									<AsteriskIcon />
								</Icon>
								<styled.span fontSize="sm">{skill}</styled.span>
							</styled.li>
						))}
					</styled.ul>
				</Box>

				<Link
					href={selfie.src}
					target="_blank"
					rel="noreferrer noopener"
					prefetch={false}
					p={4}
					pos="relative"
					border="2px solid token(colors.fg.accent)"
					flexGrow={1}
				>
					<Image
						src={selfie}
						alt=""
						placeholder="blur"
						draggable={false}
						priority
					/>
					<VisuallyHidden>Selfie</VisuallyHidden>
				</Link>
			</Flex>
		</styled.section>
	);
}
