import { AUTHOR } from '@/config/author';
import { TabContent, TabIndicator, TabList, TabTrigger, Tabs } from '@/lib/ark-ui';
import { AsteriskIcon } from '@/lib/icons';
import { styled } from '@/styled-system/jsx';
import { IWorkHistory } from '@/types';
import { format, isSameYear } from 'date-fns';
import { SectionHeading } from './section-heading';

const { workHistory } = AUTHOR;

export function Experience() {
  return (
    <styled.section id="experience" py={32}>
      <SectionHeading w="50%" index={2} title={<>Where I&rsquo;ve Worked</>} />

      <Tabs
        mt={16}
        display="flex"
        gap={12}
        defaultValue={workHistory.at(0)?.company.name}
        orientation="vertical"
      >
        <TabList w="20%" flexShrink={0}>
          {workHistory.map(({ company }) => (
            <TabTrigger
              key={company.name}
              value={company.name}
              w="full"
              px={6}
              py={2}
              type="button"
              cursor="pointer"
              display="block"
              textAlign="left"
              color="inherit"
              _selected={{
                bg: 'brand.navy.light',
                color: 'brand.accent',
              }}
              transitionProperty="all"
              transitionDuration="slow"
            >
              {company.name}
            </TabTrigger>
          ))}

          <TabIndicator w={0.5} bg="brand.accent" h="5" />
        </TabList>

        {workHistory.map((o) => (
          <TabContent key={o.company.name} value={o.company.name}>
            <Item {...o} />
          </TabContent>
        ))}
      </Tabs>
    </styled.section>
  );
}

function Item(props: IWorkHistory) {
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
        <styled.span color="brand.slate.lighter">{position}</styled.span>{' '}
        <styled.span color="brand.accent">@ {company.name}</styled.span>
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
        <styled.span w={2} h="1px" bg="brand.slate" />
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
            <AsteriskIcon w={3} h={3} my={1.5} color="brand.accent" flexShrink={0} />
            <styled.div>{responsibility}</styled.div>
          </styled.li>
        ))}
      </styled.ul>
    </styled.div>
  );
}
