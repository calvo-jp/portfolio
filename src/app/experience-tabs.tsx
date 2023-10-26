import { TabContent, TabIndicator, TabList, TabTrigger, Tabs } from '@/components/tabs';
import { AUTHOR } from '@/config/author';
import { ExperienceItem } from './experience-item';

export function ExperienceTabs() {
  return (
    <Tabs
      display={{
        base: 'none',
        lg: 'flex',
      }}
      mt={16}
      gap={12}
      defaultValue={AUTHOR.workHistory.at(0)?.company.name}
      orientation="vertical"
    >
      <TabList w="20%" flexShrink={0}>
        {AUTHOR.workHistory.map(({ company }) => (
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
              bg: 'neutral.800',
              color: 'purple.400',
            }}
            transitionProperty="all"
            transitionDuration="slow"
          >
            {company.name}
          </TabTrigger>
        ))}

        <TabIndicator w={0.5} bg="purple.400" h="5" />
      </TabList>

      {AUTHOR.workHistory.map((o) => (
        <TabContent key={o.company.name} value={o.company.name}>
          <ExperienceItem {...o} />
        </TabContent>
      ))}
    </Tabs>
  );
}
