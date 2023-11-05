import { RawHtml } from '@/components/raw-html';
import { Box, styled } from '@/styled-system/jsx';
import { IWorkHistory } from '@/types';
import { format, isSameYear } from 'date-fns';

interface ExperienceItemProps {
	data: IWorkHistory;
}

export function ExperienceItem(props: ExperienceItemProps) {
	const { company, dateOfEmployment, position, responsibilities } = props.data;

	const [employedAtStart, employedAtUnitl] = formatEmploymentDate(
		dateOfEmployment.start,
		dateOfEmployment.until,
	);

	return (
		<Box display="flex" flexDir="column">
			<Box fontSize="xl" fontWeight="bold" letterSpacing="wide">
				<styled.span color="fg.stronger">{position}</styled.span>{' '}
				<styled.span color="fg.accent">@ {company.name}</styled.span>
			</Box>

			<Box
				fontFamily="mono"
				fontSize="sm"
				display="flex"
				alignItems="center"
				gap={2}
				mt={1}
			>
				<styled.span>{employedAtStart}</styled.span>
				<styled.span w={2.5} h="1px" bg="bg.lighter" />
				<styled.span>{employedAtUnitl}</styled.span>
			</Box>
			<RawHtml mt={5}>{responsibilities}</RawHtml>
		</Box>
	);
}

function formatEmploymentDate(start: Date, until?: Date) {
	/* ie. January 2021 - Present */
	if (!until) return [format(start, 'MMMM yyyy'), 'Present'];

	/* ie. January - December 2021 */
	if (isSameYear(start, until))
		return [format(start, 'MMMM'), format(until, 'MMMM yyyy')];

	/* ie. January 2021 - December 2022 */
	return [format(start, 'MMMM yyyy'), format(until, 'MMMM yyyy')];
}
