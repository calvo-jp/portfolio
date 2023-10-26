import { IconAsterisk } from '@/components/icons';
import { styled } from '@/styled-system/jsx';
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
    <styled.div display="flex" flexDir="column">
      <styled.div fontSize="xl" fontWeight="bold" letterSpacing="wide">
        <styled.span color="neutral.200">{position}</styled.span>{' '}
        <styled.span color="purple.400">@ {company.name}</styled.span>
      </styled.div>

      <styled.div
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
      </styled.div>

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
            <IconAsterisk w={3} h={3} my={1.5} color="purple.400" flexShrink={0} />
            <styled.div>{responsibility}</styled.div>
          </styled.li>
        ))}
      </styled.ul>
    </styled.div>
  );
}
