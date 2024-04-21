import selfie from '@/assets/images/selfie.jpg';
import { getAuthor } from '@/lib/get-author';
import { Icon } from '@/lib/icon';
import { Image } from '@/lib/image';
import { Link } from '@/lib/link';
import { Prose } from '@/lib/prose';
import { Box, Flex, VisuallyHidden, styled } from '@/styled-system/jsx';
import { Asterisk02Icon } from '@untitled-theme/icons-react';
import { SectionHeading } from './section-heading';

export async function About() {
  const { about, skills } = await getAuthor();

  return (
    <styled.section
      id="about"
      py={{
        base: 24,
        lg: 32,
      }}
    >
      <SectionHeading
        index={0}
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
        alignItems="start"
      >
        <Box
          flexShrink={0}
          lg={{
            w: '1/2',
          }}
        >
          <Prose fontSize="lg">{about}</Prose>

          <Box mt={5} fontSize="lg">
            Here are a few technologies I&rsquo;ve been working
            with&nbsp;recently:
          </Box>

          <styled.ul mt={5}>
            {skills.map((skill) => (
              <styled.li
                key={skill}
                fontFamily="mono"
                display="flex"
                alignItems="center"
                gap={1}
              >
                <Icon color="emerald.500" w={3} h={3} asChild>
                  <Asterisk02Icon strokeWidth="1.66667" />
                </Icon>
                <styled.span fontSize="sm">{skill}</styled.span>
              </styled.li>
            ))}
          </styled.ul>
        </Box>

        <Link
          href={selfie.src}
          target="_blank"
          rel="noreferrer noopener"
          prefetch={false}
          p={3}
          pos="relative"
          border="2px solid token(colors.emerald.500)"
          flexGrow={1}
        >
          <Image
            src={selfie}
            alt=""
            placeholder="blur"
            draggable={false}
            priority
            sizes="100vw"
          />
          <VisuallyHidden>Selfie</VisuallyHidden>
        </Link>
      </Flex>
    </styled.section>
  );
}
