import { TabContent, TabIndicator, TabList, TabTrigger, Tabs } from '@/components/tabs';
import { getAuthor } from '@/utils/get-author';
import { ExperienceItem } from './experience-item';

export async function ExperienceTabs() {
  const author = await getAuthor();

  return (
    <Tabs
      display={{
        base: 'none',
        lg: 'flex',
      }}
      mt={16}
      gap={12}
      defaultValue={author.workHistory.at(0)?.company.name}
      orientation="vertical"
    >
      <TabList w="20%" flexShrink={0}>
        {author.workHistory.map(({ company }) => (
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
              bg: 'bg.light',
              color: 'fg.accent',
            }}
          >
            {company.name}
          </TabTrigger>
        ))}

        <TabIndicator w={0.5} bg="fg.accent" h="5" />
      </TabList>

      {author.workHistory.map((o) => (
        <TabContent key={o.company.name} value={o.company.name}>
          <ExperienceItem data={o} />
        </TabContent>
      ))}
    </Tabs>
  );
}
