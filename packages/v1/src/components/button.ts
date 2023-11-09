import {cva} from '@/styled-system/css';
import {styled} from '@/styled-system/jsx';
import {ark} from '@ark-ui/react';

const recipe = cva({
	base: {
		color: 'fg.accent',
		border: '1px solid token(colors.fg.accent)',
		cursor: 'pointer',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',

		fontFamily: 'mono',
		transition: 'transform token(durations.slow)',
		_active: {
			transform: 'scale(0.95)',
		},

		_focusVisible: {
			outline: '2px solid token(colors.fg.strong)',
			outlineOffset: 0.5,
		},
	},
	variants: {
		size: {
			sm: {
				h: 8,
				px: 4,
				rounded: 'md',
				fontSize: 'xs',
			},
			lg: {
				h: 14,
				px: 8,
				rounded: 'lg',
				fontSize: 'sm',
			},
		},
	},
	defaultVariants: {
		size: 'lg',
	},
});

export const Button = styled(ark.button, recipe, {
	defaultProps: {
		type: 'button',
	},
});
