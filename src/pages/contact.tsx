import { VStack, useBreakpointValue } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { IoIosMail, IoMdPhonePortrait } from "react-icons/io";

import { FaLinkedinIn } from "react-icons/fa";
import { FadeInWhenVisible } from "../components/FadeInWhenVisible";
import { ContactInfoItem } from "../components/Footer/ContactInfoItem";
import { Paragraph } from "../components/Paragraph";
import { Section } from "../components/Section";
import { SEO } from "../components/SEO";
import { TransitionSection } from "../components/TransitionSection";

export default function Contact() {
  const isMobile = useBreakpointValue({
    base: true,
    sm: false,
  });

  return (
    <main style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <SEO title="Contact" />
      <TransitionSection gradientDirection="normal" isBellowHero={false} />

      <FadeInWhenVisible style={{ flex: "1 0 auto" }}>
        <Section title="Contact Me">
          <VStack gap="3rem" w="100%" alignItems="start">
            <Paragraph>
              I would love to hear from you. Whether it's a project, job
              opportunity, or just a chat. Feel free to contact me at the medium
              of your choice.
            </Paragraph>
            <Paragraph>
              I am in Pacifico Hours, and I will get back at you as soon as I
              can.
            </Paragraph>
            <VStack alignItems="flex-start" gap="1.5rem">
              <ContactInfoItem direction="row" icon={IoMdPhonePortrait}>
                <Paragraph>+1 (530) 782-6830</Paragraph>
              </ContactInfoItem>
              <ContactInfoItem direction="row" icon={IoIosMail}>
                {isMobile ? (
                  <>
                    <Paragraph>wilson.franca.92</Paragraph>
                    <Paragraph>@gmail.com</Paragraph>
                  </>
                ) : (
                  <Paragraph>wilson.franca.92@gmail.com</Paragraph>
                )}
              </ContactInfoItem>
              <ContactInfoItem direction="row" icon={FaLinkedinIn}>
                <Paragraph>@wilsonfsouza</Paragraph>
              </ContactInfoItem>
            </VStack>
          </VStack>
        </Section>
      </FadeInWhenVisible>

      <TransitionSection gradientDirection="upsidedown" />
    </main>
  );
}

const ONE_DAY = 60 * 60 * 24;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: ONE_DAY,
  };
};
