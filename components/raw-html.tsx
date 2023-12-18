import {cva, cx} from '@/styled-system/css';
import {styled} from '@/styled-system/jsx';
import {Assign, HTMLStyledProps} from '@/styled-system/types';
import {HTMLArkProps, ark} from '@ark-ui/react';
import {
	DOMNode,
	attributesToProps,
	domToReact,
	default as parseHtml,
} from 'html-react-parser';
import {forwardRef} from 'react';
import {IconAsterisk} from './icons';

interface StyledArkDivProps
	extends Assign<HTMLArkProps<'div'>, HTMLStyledProps<'div'>> {}
const StyledArkDiv = styled(ark.div);

interface RawHtmlBaseProps {
	children: string;
}

interface RawHtmlProps extends Assign<StyledArkDivProps, RawHtmlBaseProps> {}

export const RawHtml = forwardRef<HTMLDivElement, RawHtmlProps>(
	function RawHtml(props, ref) {
		const {children, className, ...others} = props;

		return (
			<StyledArkDiv
				ref={ref}
				className={cx(rawHtmlRecipe(), className)}
				{...others}
			>
				{parseHtml(children, {
					replace(node) {
						if (node.type === 'tag' && node.name === 'li') {
							return (
								<styled.li
									display="flex"
									gap={1}
									{...attributesToProps(node.attribs)}
								>
									<IconAsterisk
										w={3}
										h={3}
										mt={1}
										color="fg.accent"
										flexShrink={0}
									/>
									<styled.span>
										{domToReact(node.children as DOMNode[])}
									</styled.span>
								</styled.li>
							);
						}
					},
				})}
			</StyledArkDiv>
		);
	}
);

const rawHtmlRecipe = cva({
	base: {
		hyphens: 'auto',

		'& a': {
			color: 'fg.accent',
			textUnderlineOffset: '0.35rem',
			_hover: {
				textDecoration: 'underline',
			},
		},

		'& li': {
			mt: 2,
			lineHeight: 'tight',

			_first: {
				mt: 0,
			},
		},

		'& p': {
			mt: {
				base: 4,
				lg: 5,
			},

			_first: {
				mt: 0,
			},
		},
	},
});
