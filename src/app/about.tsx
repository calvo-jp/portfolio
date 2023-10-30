import selfie from '@/assets/images/selfie.jpg';
import { IconAsterisk } from '@/components/icons';
import { Image } from '@/components/image';
import { RawHtml } from '@/components/raw-html';
import { Box, Flex, Grid, GridItem, styled } from '@/styled-system/jsx';
import { getAuthor } from '@/utils/get-author';
import { SectionHeading } from './section-heading';

export async function About() {
  const author = await getAuthor();

  return (
    <styled.section
      id="about"
      py={{
        base: 24,
        lg: 32,
      }}
    >
      <SectionHeading
        index={1}
        title="About Me"
        lg={{
          w: '1/2',
        }}
      />

      <Flex
        mt={{
          base: 14,
          lg: 16,
        }}
        gap={{
          base: 6,
          lg: 24,
        }}
        flexDir={{
          base: 'column',
          lg: 'row',
        }}
      >
        <Box
          flexShrink={0}
          lg={{
            w: '1/2',
          }}
        >
          <RawHtml
            css={{
              fontSize: 'lg',

              '& p': {
                mt: {
                  base: 4,
                  lg: 5,
                },
                hyphens: 'auto',
                _first: {
                  mt: 0,
                },
              },

              '& a': {
                color: 'violet.500',
                textUnderlineOffset: '0.35rem',
                _hover: {
                  textDecoration: 'underline',
                },
              },
            }}
          >
            {author.about}
          </RawHtml>

          <Box mt={5} fontSize="lg">
            Here are a few technologies I&rsquo;ve been working with&nbsp;recently:
          </Box>

          <Skills />
        </Box>

        <Box flexGrow={1}>
          <Box
            p={4}
            pos="relative"
            border="2px solid token(colors.violet.500)"
            rounded="md"
          >
            <Image src={selfie} alt="" rounded="sm" placeholder="blur" />
          </Box>
        </Box>
      </Flex>
    </styled.section>
  );
}

async function Skills() {
  const author = await getAuthor();

  return (
    <Grid
      mt={5}
      columns={{
        base: 1,
        lg: 3,
      }}
      display="grid"
      gap={1}
    >
      {author.skills.map((skill, i) => (
        <GridItem
          key={skill}
          fontFamily="mono"
          display="flex"
          alignItems="center"
          gap={1}
          colSpan={{
            lg: (i + 1) % 2 === 0 ? 2 : 1,
          }}
        >
          <IconAsterisk color="violet.500" w={3} h={3} />
          <styled.span fontSize="sm">{skill}</styled.span>
        </GridItem>
      ))}
    </Grid>
  );
}
