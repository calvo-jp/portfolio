import { AUTHOR } from '@/config/author';
import { TabContent, TabIndicator, TabList, TabTrigger, Tabs } from '@/lib/tabs';
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

      {AUTHOR.workHistory.map((o) => (
        <TabContent key={o.company.name} value={o.company.name}>
          <ExperienceItem {...o} />
        </TabContent>
      ))}
    </Tabs>
  );
}
