import selfie from '@/assets/images/selfie.jpg';
import { IconAsterisk } from '@/components/icons';
import { Image } from '@/components/image';
import { AUTHOR } from '@/config/author';
import { Box, Flex, styled } from '@/styled-system/jsx';
import { SectionHeading } from './section-heading';

export function About() {
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
          <Box
            css={{
              fontSize: 'lg',

              '& div': {
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
                color: 'violet.400',
                textUnderlineOffset: '0.35rem',
                _hover: {
                  textDecoration: 'underline',
                },
              },
            }}
          >
            {AUTHOR.about}
          </Box>

          <Box mt={5} fontSize="lg">
            Here are a few technologies I&rsquo;ve been working with&nbsp;recently:
          </Box>

          <Skills />
        </Box>

        <Box flexGrow={1}>
          <Box
            p={4}
            pos="relative"
            border="2px solid token(colors.violet.400)"
            rounded="md"
          >
            <Image src={selfie} alt="" rounded="sm" placeholder="blur" />
          </Box>
        </Box>
      </Flex>
    </styled.section>
  );
}

function Skills() {
  return (
    <styled.ul
      mt={5}
      display="grid"
      gap={1}
      gridTemplateColumns={{
        lg: 'repeat(3,1fr)',
      }}
    >
      {AUTHOR.skills.map((skill, i) => (
        <styled.li
          key={skill}
          fontFamily="mono"
          display="flex"
          alignItems="center"
          gap={1}
          gridColumn={{
            lg: (i + 1) % 2 === 0 ? 2 : 1,
          }}
        >
          <IconAsterisk color="violet.400" w={3} h={3} />
          <styled.span fontSize="sm">{skill}</styled.span>
        </styled.li>
      ))}
    </styled.ul>
  );
}
