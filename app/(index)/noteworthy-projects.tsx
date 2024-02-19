import {Icon} from '@/components/icon';
import {Link} from '@/components/link';
import {Prose} from '@/components/prose';
import {
	Tooltip,
	TooltipArrow,
	TooltipArrowTip,
	TooltipContent,
	TooltipPositioner,
	TooltipTrigger,
} from '@/components/tooltip';
import {
	Box,
	Flex,
	HStack,
	Spacer,
	VisuallyHidden,
	styled,
} from '@/styled-system/jsx';
import {getAuthor} from '@/utils/get-author';
import {TNonFeaturedProject} from '@/utils/types';
import {Portal} from '@ark-ui/react';
import {ExternalLinkIcon, FolderIcon, GitBranchIcon} from 'lucide-react';

export async function NoteworthyProjects() {
	const {projects} = await getAuthor();

	return (
		<styled.section
			id="noteworthy-projects"
			py={{
				base: 24,
				lg: 32,
			}}
		>
			<Box textAlign="center">
				<styled.h2
					fontSize={{
						base: '2xl',
						lg: '3xl',
					}}
					fontWeight="black"
					color="fg.stronger"
				>
					Other Noteworthy Projects
				</styled.h2>
				<Link
					href="/archive"
					w="fit"
					mx="auto"
					mt={2}
					color="fg.accent"
					fontFamily="mono"
					fontSize="sm"
					display="block"
					whiteSpace="nowrap"
					textUnderlineOffset="0.35rem"
					_hover={{
						textDecoration: 'underline',
					}}
				>
					view the archive
				</Link>
			</Box>

			<Box
				mt={{
					base: 14,
					lg: 16,
				}}
				display="grid"
				gap={4}
				gridTemplateColumns={{
					lg: 'repeat(2,1fr)',
					xl: 'repeat(3,1fr)',
				}}
			>
				{projects.map((o) => {
					if (o.featured) {
						return null;
					} else if (!o.noteworthy) {
						return null;
					} else {
						return <Item key={o.title} data={o} />;
					}
				})}
			</Box>
		</styled.section>
	);
}

interface ItemProps {
	data: TNonFeaturedProject;
}

function Item(props: ItemProps) {
	const {title, description, repository, website, tags} = props.data;

	return (
		<Flex bg="bg.light" p={8} flexDir="column" minH="token(spacing.80)">
			<Flex alignItems="start">
				<Icon w={9} h={9} color="fg.accent" asChild>
					<FolderIcon />
				</Icon>
				<Spacer />
				<HStack gap={4}>
					{website && (
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href={website}
									target="_blank"
									rel="noreferrer noopener"
									prefetch={false}
									transition="colors token(durations.slow)"
									_hover={{
										color: 'fg.accent',
									}}
								>
									<VisuallyHidden>Go to website</VisuallyHidden>
									<Icon asChild>
										<ExternalLinkIcon />
									</Icon>
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
								transition="colors token(durations.slow)"
								_hover={{
									color: 'fg.accent',
								}}
							>
								<VisuallyHidden>Go to repository</VisuallyHidden>
								<Icon asChild>
									<GitBranchIcon />
								</Icon>
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
			</Flex>

			<styled.h3 mt={6} fontSize="lg" fontWeight="bold" color="fg.stronger">
				{title}
			</styled.h3>

			<Prose mt={2} fontSize="sm" color="fg.strong" flexGrow={1}>
				{description}
			</Prose>

			<styled.ul mt={6} display="flex" gap={3} fontFamily="mono" fontSize="xs">
				{tags.map((tag) => (
					<styled.li key={tag}>{tag}</styled.li>
				))}
			</styled.ul>
		</Flex>
	);
}
