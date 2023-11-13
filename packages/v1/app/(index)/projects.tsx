import {IconExternalLink, IconGitBranch} from '@/components/icons';
import {Image} from '@/components/image';
import {Link} from '@/components/link';
import {RawHtml} from '@/components/raw-html';
import {
	Tooltip,
	TooltipArrow,
	TooltipArrowTip,
	TooltipContent,
	TooltipPositioner,
	TooltipTrigger,
} from '@/components/tooltip';
import {Box, Flex, HStack, VisuallyHidden, styled} from '@/styled-system/jsx';
import {getAuthor} from '@/utils/get-author';
import {TFeaturedProject} from '@/utils/types';
import {Portal} from '@ark-ui/react';
import {Fragment} from 'react';
import {SectionHeading} from './section-heading';

export async function Projects() {
	const {projects} = await getAuthor();

	return (
		<styled.section
			id="projects"
			py={{
				base: 24,
				lg: 32,
			}}
		>
			<SectionHeading
				index={3}
				title={<Fragment>Some things I&rsquo;ve built</Fragment>}
				lg={{
					w: '1/2',
				}}
			/>

			<Box
				mt={{
					base: 14,
					lg: 16,
				}}
			>
				{projects.map((o) => (!o.featured ? null : <Item key={o.title} data={o} />))}
			</Box>
		</styled.section>
	);
}

interface ItemProps {
	data: TFeaturedProject;
}

function Item(props: ItemProps) {
	const {image, title, description, website, repository, tags} = props.data;

	return (
		<Flex
			w="full"
			mt={{
				base: 12,
				_first: 0,
			}}
			flexDir={{
				base: 'column',
				lg: {
					base: 'row',
					_even: 'row-reverse',
				},
			}}
			gap={10}
			alignItems="center"
			lg={{
				mt: {
					base: 24,
				},
			}}
		>
			<Box
				w="1/2"
				flexShrink={0}
				lgDown={{
					display: 'none',
				}}
			>
				<Image src={image} alt="" width={450} height={450} w="full" h="auto" />
			</Box>

			<Box flexGrow={1}>
				<Box fontFamily="mono" fontSize="sm" color="fg.accent" lineHeight="none">
					Featured Project
				</Box>

				<styled.h3
					mt={1}
					fontSize="2xl"
					fontWeight="bold"
					lineHeight="none"
					color="fg.stronger"
				>
					{title}
				</styled.h3>

				<Box
					mt={4}
					lg={{
						display: 'none',
					}}
				>
					<Image src={image} alt="" width={450} height={450} w="full" h="auto" />
				</Box>

				<RawHtml
					mt={5}
					color="fg.strong"
					rounded="sm"
					lg={{
						px: 5,
						py: 4,
						bg: 'bg.light',
					}}
				>
					{description}
				</RawHtml>

				<styled.ul
					mt={4}
					display="flex"
					columnGap={4}
					fontFamily="mono"
					fontSize="sm"
					flexWrap="wrap"
				>
					{tags.map((tag) => (
						<styled.li key={tag}>{tag}</styled.li>
					))}
				</styled.ul>

				<HStack mt={8} gap={4}>
					{website && (
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href={website}
									target="_blank"
									rel="noreferrer noopener"
									prefetch={false}
									color={{
										base: 'fg.strong',
										_hover: 'fg.accent',
									}}
									transition="colors token(durations.slow)"
								>
									<IconExternalLink w={6} h={6} />
									<VisuallyHidden>Go to website</VisuallyHidden>
								</Link>
							</TooltipTrigger>
							<Portal>
								<TooltipPositioner>
									<TooltipContent>
										<TooltipArrow>
											<TooltipArrowTip />
										</TooltipArrow>

										<styled.span>Website</styled.span>
									</TooltipContent>
								</TooltipPositioner>
							</Portal>
						</Tooltip>
					)}

					<Tooltip>
						<TooltipTrigger asChild>
							<Link
								href={repository}
								target="_blank"
								rel="noreferrer noopener"
								prefetch={false}
								color={{
									base: 'fg.strong',
									_hover: 'fg.accent',
								}}
								transition="colors token(durations.slow)"
							>
								<IconGitBranch w={6} h={6} />
								<VisuallyHidden>Go to repository</VisuallyHidden>
							</Link>
						</TooltipTrigger>
						<Portal>
							<TooltipPositioner>
								<TooltipContent>
									<TooltipArrow>
										<TooltipArrowTip />
									</TooltipArrow>

									<styled.span>Repository</styled.span>
								</TooltipContent>
							</TooltipPositioner>
						</Portal>
					</Tooltip>
				</HStack>
			</Box>
		</Flex>
	);
}
