'use client';

import {IconLaptop2, IconMoon, IconSun} from '@/components/icons';
import {
	SegmentGroup,
	SegmentGroupIndicator,
	SegmentGroupItem,
	SegmentGroupItemControl,
	SegmentGroupItemText,
} from '@/components/segment-group';
import {Box, Flex, VisuallyHidden} from '@/styled-system/jsx';
import {Theme, ThemeSchema} from '@/utils/types';
import {useTheme} from 'next-themes';
import {useEffect, useState} from 'react';
import {parse} from 'valibot';

export function ThemeSwitch() {
	const mounted = useMounted();

	const {theme, setTheme} = useTheme();

	if (!mounted) {
		return (
			<Flex
				gap={{
					base: 1,
					lg: 0.5,
				}}
			>
				{options.map(({label, icon: SVGIcon}) => (
					<Box
						key={label}
						p={{
							base: 2,
							lg: 1.5,
						}}
					>
						<SVGIcon
							w={7}
							h={7}
							lg={{
								w: 5,
								h: 5,
							}}
						/>
					</Box>
				))}
			</Flex>
		);
	}

	return (
		<SegmentGroup
			display="flex"
			gap={{
				base: 1,
				lg: 0.5,
			}}
			value={parse(ThemeSchema, theme)}
			onValueChange={(details) => {
				setTheme(parse(ThemeSchema, details.value));
			}}
		>
			<SegmentGroupIndicator
				bg={{
					_dark: '#ffffff0d' /* FIXME: use 'white/10' once supported */,
					_light: '#0000000d' /* FIXME: use 'black/10' once supported */,
				}}
				rounded="full"
			/>

			{options.map(({label, value, icon: SVGIcon}) => (
				<SegmentGroupItem
					key={value}
					value={value}
					p={{
						base: 2,
						lg: 1.5,
					}}
					cursor="pointer"
					className="group"
				>
					<SegmentGroupItemText>
						<SVGIcon
							w={7}
							h={7}
							lg={{
								w: 5,
								h: 5,
							}}
							transition="color token(durations.slow)"
							_groupHover={{
								color: 'fg.stronger',
							}}
							_groupChecked={{
								color: 'fg.stronger',
							}}
						/>
						<VisuallyHidden>{label}</VisuallyHidden>
					</SegmentGroupItemText>
					<SegmentGroupItemControl />
				</SegmentGroupItem>
			))}
		</SegmentGroup>
	);
}

const options = [
	{
		icon: IconSun,
		label: 'Light theme',
		value: Theme.Light,
	},
	{
		icon: IconMoon,
		label: 'Dark theme',
		value: Theme.Dark,
	},
	{
		icon: IconLaptop2,
		label: 'System theme',
		value: Theme.System,
	},
];

function useMounted() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);

		return () => setMounted(false);
	}, []);

	return mounted;
}
