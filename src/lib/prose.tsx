'use client';

import {css, cx} from '@/styled-system/css';
import {styled} from '@/styled-system/jsx';
import type {Assign, HTMLStyledProps} from '@/styled-system/types';
import {type HTMLArkProps, ark} from '@ark-ui/react';
import {forwardRef} from 'react';

const StyledArkDiv = styled(ark.div);

interface ProseProps
	extends Assign<HTMLArkProps<'div'>, HTMLStyledProps<'div'>> {}

export const Prose = forwardRef<HTMLDivElement, ProseProps>(function RawHtml(
	{children, className, ...props},
	ref,
) {
	if (typeof children === 'string') {
		return (
			<StyledArkDiv
				ref={ref}
				className={cx(prose, className)}
				dangerouslySetInnerHTML={{__html: children}}
				{...props}
			/>
		);
	}

	return (
		<StyledArkDiv ref={ref} className={cx(prose, className)} {...props}>
			{children}
		</StyledArkDiv>
	);
});

Prose.displayName = 'Prose';

/* 📝 TODO: better styling */
const prose = css({
	hyphens: 'auto',

	'& a': {
		color: 'green.500',
		textUnderlineOffset: '0.35rem',
		_hover: {
			textDecoration: 'underline',
		},
	},

	'& p': {
		mt: 4,

		_first: {
			mt: 0,
		},
	},
});
