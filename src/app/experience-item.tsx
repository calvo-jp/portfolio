import { IconAsterisk } from '@/components/icons';
import { Box, styled } from '@/styled-system/jsx';
import { IWorkHistory } from '@/types';
import { format, isSameYear } from 'date-fns';

export function ExperienceItem(props: IWorkHistory) {
  const { company, dateOfEmployment, position, responsibilities } = props;

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
        <styled.span color="violet.400">@ {company.name}</styled.span>
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

      <styled.ul mt={5}>
        {responsibilities.map((responsibility) => (
          <styled.li
            key={responsibility}
            mt={2}
            _first={{
              mt: 0,
            }}
            display="flex"
            gap={2.5}
          >
            <IconAsterisk w={3} h={3} my={1.5} color="violet.400" flexShrink={0} />
            <Box>{responsibility}</Box>
          </styled.li>
        ))}
      </styled.ul>
    </Box>
  );
}
