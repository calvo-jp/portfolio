import { getAuthor } from '@/lib/get-author';
import { Box, Flex } from '@/styled-system/jsx';
import { format } from 'date-fns';
import { PropsWithChildren } from 'react';
import { ExperienceItem } from './experience-item';

export async function ExperienceTree() {
  const { workHistory } = await getAuthor();

  return (
    <Flex
      mt={14}
      lg={{
        display: 'none',
      }}
      flexDir="column"
      gap={6}
    >
      {workHistory.map((item, index) => (
        <Flex key={item.company.name} flexDir="column" gap={6}>
          <Separator bottomOnly={index === 0}>
            {item.dateOfEmployment.until
              ? format(item.dateOfEmployment.until, 'MMM yyyy')
              : 'Present'}
          </Separator>
          <ExperienceItem data={item} />
        </Flex>
      ))}
    </Flex>
  );
}

function Separator({
  children,
  bottomOnly,
}: PropsWithChildren<{ bottomOnly?: boolean }>) {
  return (
    <Flex w="fit" mx="auto" flexDir="column" alignItems="center" flexShrink={0}>
      {!bottomOnly && (
        <>
          <Box
            w={3}
            h={3}
            border="1px solid token(colors.zinc.800)"
            rounded="full"
            flexShrink={0}
          />
          <Box h={8} w="1px" bg="zinc.800" />
        </>
      )}

      <Box
        py={2}
        px={4}
        border="1px solid token(colors.zinc.800)"
        fontSize="sm"
      >
        {children}
      </Box>

      <Box h={8} w="1px" bg="zinc.800" />
      <Box
        w={3}
        h={3}
        border="1px solid token(colors.zinc.800)"
        rounded="full"
        flexShrink={0}
      />
    </Flex>
  );
}
