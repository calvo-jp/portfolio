import { RawHtml } from '@/components/raw-html';
import { Box, styled } from '@/styled-system/jsx';
import { IWorkHistory } from '@/types';
import { format, isSameYear } from 'date-fns';

interface ExperienceItemProps {
  data: IWorkHistory;
}

export function ExperienceItem(props: ExperienceItemProps) {
  const { company, dateOfEmployment, position, responsibilities } = props.data;

  const monthStart = format(dateOfEmployment.start, 'MMMM');
  const monthUntil = dateOfEmployment.until
    ? format(dateOfEmployment.until, 'MMMM')
    : 'Present';

  const yearStart = format(dateOfEmployment.start, 'yyyy');
  const yearUntil = dateOfEmployment.until
    ? format(dateOfEmployment.until, 'yyyy')
    : null;

  return (
    <Box display="flex" flexDir="column">
      <Box fontSize="xl" fontWeight="bold" letterSpacing="wide">
        <styled.span color="neutral.200">{position}</styled.span>{' '}
        <styled.span color="violet.500">@ {company.name}</styled.span>
      </Box>

      <Box
        fontFamily="mono"
        fontSize="sm"
        display="flex"
        alignItems="center"
        gap={2}
        mt={1}
      >
        <styled.span>
          {monthStart}{' '}
          {!dateOfEmployment.until
            ? yearStart
            : isSameYear(dateOfEmployment.start, dateOfEmployment.until)
            ? null
            : yearStart}
        </styled.span>
        <styled.span w={2} h="1px" bg="neutral.300" />
        <styled.span>
          {monthUntil} {yearUntil}
        </styled.span>
      </Box>
      <RawHtml
        mt={5}
        css={{
          '& li': {
            mt: 2,
            display: 'flex',
            alignItems: 'center',
            gap: 2.5,

            _first: {
              mt: 0,
            },
          },
        }}
      >
        {responsibilities}
      </RawHtml>
    </Box>
  );
}
