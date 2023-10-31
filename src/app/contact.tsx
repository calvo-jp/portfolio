import { Button } from '@/components/button';
import { Link } from '@/components/link';
import { styled } from '@/styled-system/jsx';
import { getAuthor } from '@/utils/get-author';

export async function Contact() {
  const author = await getAuthor();

  return (
    <styled.section
      id="contact"
      py={{
        base: 16,
        lg: 32,
      }}
      textAlign="center"
    >
      <styled.p color="fg.accent" fontFamily="mono">
        04. What&rsquo;s next?
      </styled.p>
      <styled.h2
        color="fg.lighter"
        fontSize={{
          base: '4xl',
          lg: '6xl',
        }}
        fontWeight="bold"
      >
        Get In Touch
      </styled.h2>
      <styled.p mt={4} maxW="600px" mx="auto" fontSize="lg">
        Although I&rsquo;m not currently looking for any new opportunities, my inbox is
        always open. Whether you have a question or just want to say hi, I&rsquo;ll try my
        best to get back to you!
      </styled.p>
      <Button w="fit" mx="auto" mt={16} asChild>
        <Link href={`mailto:${author.contact.email}`} prefetch={false}>
          Say Hello
        </Link>
      </Button>
    </styled.section>
  );
}
