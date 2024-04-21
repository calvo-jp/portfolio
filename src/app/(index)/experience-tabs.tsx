import { getAuthor } from '@/lib/get-author';
import {
  TabContent,
  TabIndicator,
  TabList,
  TabTrigger,
  Tabs,
} from '@/lib/tabs';
import { ExperienceItem } from './experience-item';

export async function ExperienceTabs() {
  const { workHistory } = await getAuthor();

  return (
    <Tabs
      display={{
        base: 'none',
        lg: 'flex',
      }}
      flexDir={{
        _vertical: 'row',
        _horizontal: 'column',
      }}
      mt={16}
      gap={12}
      defaultValue={workHistory.at(0)?.company.name}
      orientation="vertical"
    >
      <TabList
        w="20%"
        pos="relative"
        flexShrink={0}
        _horizontal={{
          display: 'flex',
        }}
      >
        {workHistory.map(({ company }) => (
          <TabTrigger
            key={company.name}
            value={company.name}
            w="full"
            px={6}
            py={2}
            display="block"
            textAlign="left"
            color="inherit"
            transition="all token(durations.slow)"
            _selected={{
              bg: 'zinc.800',
              color: 'emerald.500',
            }}
          >
            {company.name}
          </TabTrigger>
        ))}

        <TabIndicator
          bg="emerald.500"
          _vertical={{
            h: 'var(--height)',
            w: 0.5,
          }}
        />
      </TabList>

      {workHistory.map((o) => (
        <TabContent key={o.company.name} value={o.company.name}>
          <ExperienceItem data={o} />
        </TabContent>
      ))}
    </Tabs>
  );
}
