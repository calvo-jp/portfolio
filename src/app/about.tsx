import selfie from '@/assets/images/selfie.jpg';
import { AUTHOR } from '@/config/author';
import { AsteriskIcon } from '@/lib/icons';
import { Image } from '@/lib/next-js';
import { Flex, styled } from '@/styled-system/jsx';
import { SectionHeading } from './section-heading';

export function About() {
  return (
    <styled.section id="about" py={32}>
      <SectionHeading index={1} title="About Me" w="50%" />

      <Flex mt={16} gap={24}>
        <styled.div w="50%" flexShrink={0}>
          <styled.div
            css={{
              fontSize: 'lg',

              '& div': {
                mt: 5,
                hyphens: 'auto',
                _first: {
                  mt: 0,
                },
              },

              '& a': {
                color: 'brand.teal',
                textUnderlineOffset: '2px',
                _hover: {
                  textDecoration: 'underline',
                },
              },
            }}
          >
            {AUTHOR.about}
          </styled.div>

          <styled.div mt={5} fontSize="lg">
            Here are a few technologies I&rsquo;ve been working with&nbsp;recently:
          </styled.div>

          <Skills />
        </styled.div>

        <styled.div flexGrow={1}>
          <styled.div
            p={4}
            pos="relative"
            border="2px solid token(colors.brand.teal)"
            rounded="md"
          >
            <Image src={selfie} alt="" rounded="sm" placeholder="blur" />
          </styled.div>
        </styled.div>
      </Flex>
    </styled.section>
  );
}

function Skills() {
  return (
    <styled.ul mt={5} display="grid" gap={1} gridTemplateColumns="repeat(3,1fr)">
      {AUTHOR.skills.map((skill, i) => (
        <styled.li
          key={skill}
          fontFamily="mono"
          display="flex"
          alignItems="center"
          gap={1}
          gridColumn={(i + 1) % 2 === 0 ? 2 : 1}
        >
          <AsteriskIcon color="brand.teal" w={3} h={3} />
          <styled.span fontSize="sm">{skill}</styled.span>
        </styled.li>
      ))}
    </styled.ul>
  );
}
