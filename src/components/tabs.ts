'use client';

import {styled} from '@/styled-system/jsx';
import {Tabs as parts} from '@ark-ui/react';

export const Tabs = styled(parts.Root);
export const TabList = styled(parts.List);
export const TabContent = styled(parts.Content);
export const TabTrigger = styled(parts.Trigger, {
	base: {
		cursor: 'pointer',
	},
});

export const TabIndicator = styled(parts.Indicator);
