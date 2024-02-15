'use client';

import {css, cx} from '@/styled-system/css';
import {styled} from '@/styled-system/jsx';
import {Assign, HTMLStyledProps} from '@/styled-system/types';
import {HTMLArkProps, ark} from '@ark-ui/react';
import {forwardRef} from 'react';

type StyledArkDivProps = Assign<HTMLArkProps<'div'>, HTMLStyledProps<'div'>>;

const StyledArkDiv = styled(ark.div);

interface RawHtmlProps {
	children: string;
	dangerouslySetInnerHTML?: never;
}

export const RawHtml = forwardRef<
	HTMLDivElement,
	Assign<StyledArkDivProps, RawHtmlProps>
>(function RawHtml({children: __html, className, ...props}, ref) {
	return (
		<StyledArkDiv
			ref={ref}
			className={cx(prose, className)}
			dangerouslySetInnerHTML={{__html}}
			{...props}
		/>
	);
});

/* 📝 TODO: better styling */
const prose = css({
	hyphens: 'auto',

	'& a': {
		color: 'fg.accent',
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
