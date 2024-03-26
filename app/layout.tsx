import "@/assets/styles/globals.css";
import { cx } from "@/styled-system/css";
import { styled } from "@/styled-system/jsx";
import { getAuthor } from "@/utils/get-author";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Metadata } from "next";
import { PropsWithChildren } from "react";
import { EmailAd } from "./email-ad";
import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { Socials } from "./socials";

export async function generateMetadata(): Promise<Metadata> {
  const author = await getAuthor();
  const title = author.name;
  const description = `${author.name} a software engineer dedicated to user-centric solutions that balance exceptional experiences with long-term maintainability`;

  return {
    title: {
      default: description,
      template: `${title} - %s`,
    },
    description,
    metadataBase: new URL("https://calvojp.vercel.app"),
    keywords: [
      "Porfolio",
      "Dark Mode",
      "Philippines",
      "Web Developer",
      "John Paul Calvo",
    ],
    openGraph: {
      type: "website",
      title,
      description,
      images: ["/opengraph-banner.jpg"],
    },
  };
}

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <styled.html
      lang="en"
      className={cx(GeistSans.variable, GeistMono.variable)}
      colorScheme="dark"
      scrollBehavior="smooth"
      scrollbarGutter="stable"
      lgDown={{
        _scrollbar: {
          display: "none",
        },
      }}
      smOnly={{
        fontSize: "lg",
      }}
      mdOnly={{
        fontSize: "xl",
      }}
    >
      <styled.body bg="bg" color="fg" minHeight="dvh" fontFamily="sans">
        <Navbar />
        <styled.main
          id="content"
          px={{
            base: 4,
            md: 6,
            lg: 4,
          }}
          lg={{
            w: "75vw",
            mx: "auto",
            maxW: "breakpoint-lg",
          }}
        >
          {children}

          <Socials />
          <EmailAd />
        </styled.main>
        <Footer />
      </styled.body>
    </styled.html>
  );
}
