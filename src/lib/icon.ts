import {styled} from '@/styled-system/jsx';
import {ark} from '@ark-ui/react';

export const Icon = styled(
	ark.svg,
	{
		base: {
			w: 5,
			h: 5,
		},
	},
	{
		shouldForwardProp(prop) {
			return ['strokeWidth'].includes(prop);
		},
	},
);
