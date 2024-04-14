import { Button } from '@/components/button';
import { Link } from '@/components/link';
import { styled } from '@/styled-system/jsx';
import { getAuthor } from '@/utils/get-author';

export async function Contact() {
  const { contact } = await getAuthor();

  return (
    <styled.section
      id="contact"
      py={{
        base: 16,
        lg: 32,
      }}
      textAlign="center"
    >
      <styled.p color="violet.500" fontFamily="mono">
        04. What&rsquo;s next?
      </styled.p>
      <styled.h2
        color="neutral.200"
        fontSize={{
          base: '4xl',
          lg: '6xl',
        }}
        fontWeight="bold"
      >
        Get In Touch
      </styled.h2>
      <styled.p mt={4} maxW="36rem" mx="auto" fontSize="lg">
        While I&rsquo;m not actively seeking new opportunities at the moment,
        I&rsquo;m always available in my inbox. Whether you have a query or
        simply want to drop a greeting, I&rsquo;ll make an effort to respond
        to&nbsp;you!
      </styled.p>
      <Button w="fit" mx="auto" mt={16} asChild>
        <Link href={`mailto:${contact.email}`} prefetch={false}>
          Say Hello
        </Link>
      </Button>
    </styled.section>
  );
}
