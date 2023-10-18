import selfie from '@/assets/images/selfie.jpg';
import { AUTHOR } from '@/config/constants';
import { Icon } from '@/lib/icon';
import { Image } from '@/lib/next-js';
import { Grid, styled } from '@/styled-system/jsx';
import { AsteriskIcon } from 'lucide-react';
import { Fragment } from 'react';

export function About() {
  return (
    <styled.section id="about" py={16} w="90%" mx="auto">
      <styled.h2 display="flex" alignItems="center" w="60%">
        <styled.span color="brand.teal" fontSize="lg" fontFamily="mono" lineHeight="none">
          01.
        </styled.span>
        <styled.span
          ml={2}
          fontSize="3xl"
          fontWeight="black"
          lineHeight="none"
          color="brand.slate.lighter"
        >
          About Me
        </styled.span>
        <styled.div ml={3} flexGrow={1} h="1px" bg="brand.navy.lighter" />
      </styled.h2>

      <Grid mt={8} gridTemplateColumns="60% 40%" gap={16}>
        <styled.div>
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
            dangerouslySetInnerHTML={{
              __html: AUTHOR.about,
            }}
          />

          <styled.p mt={5} fontSize="lg">
            Here are a few technologies I&rsquo;ve been working with&nbsp;recently:
          </styled.p>

          <styled.ul mt={5} display="grid" gap={1} gridTemplateColumns="repeat(3,1fr)">
            {AUTHOR.skills.map((skill, i) => (
              <Fragment key={skill}>
                <styled.li fontFamily="mono" display="flex" alignItems="center" gap={1}>
                  <Icon color="brand.teal" w={3} h={3} asChild>
                    <AsteriskIcon />
                  </Icon>
                  <styled.span fontSize="sm">{skill}</styled.span>
                </styled.li>

                {(i + 1) % 2 === 0 && <li />}
              </Fragment>
            ))}
          </styled.ul>
        </styled.div>

        <styled.div>
          <styled.div
            p={4}
            pos="relative"
            border="2px solid token(colors.brand.teal)"
            rounded="md"
          >
            <Image src={selfie} alt="" rounded="sm" placeholder="blur" />
          </styled.div>
        </styled.div>
      </Grid>
    </styled.section>
  );
}
