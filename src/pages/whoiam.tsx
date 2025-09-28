import { VStack } from "@chakra-ui/react";

import { GetStaticProps } from "next";
import { CustomButton } from "../components/CustomButton";
import { ExternalLink } from "../components/ExternalLink";
import { FadeInWhenVisible } from "../components/FadeInWhenVisible";
import { Paragraph } from "../components/Paragraph";
import { Section } from "../components/Section";
import { SEO } from "../components/SEO";
import { TransitionSection } from "../components/TransitionSection";

export default function WhoIAm() {
  return (
    <main>
      <SEO title="About Me" />

      <TransitionSection gradientDirection="normal" isBellowHero={false} />

      <FadeInWhenVisible>
        <Section title="About Me">
          <VStack gap="1.5rem" w="100%" alignItems="start">
            <Paragraph>
              I am a Full Stack Software Engineer, Frontend Specialist, with{" "}
              <b>5+ years of experience</b> building everything from lightweight
              internal tools to scalable enterprise applications serving over a
              million users. I focus on <b>accessibility</b>, <b>performance</b>
              , and <b>solving user problems</b> throughout the software
              lifecycle, from technical planning and architecture to hands-on
              development, testing, and production deployment.
            </Paragraph>
            <Paragraph>
              I'm experienced with React, Next.js, Node.js, Python, and cloud
              platforms. I thrive in <b>fast-paced</b>,
              <b>cross-functional teams</b>, collaborating with designers,
              developers, product managers, and other stakeholders to translate
              user needs into new features and solutions.
            </Paragraph>
            <Paragraph>
              I bring a mix of <b>system design</b>, <b>product thinking</b>,
              and <b>leadership</b>, and I’m driven by building tools that
              people actually enjoy using.
            </Paragraph>
            <VStack gap="1.5rem" w="100%" alignItems="start" mt="4">
              <Paragraph>
                <b style={{ color: "#C1476C" }}>Industry Experience:</b>{" "}
                Healthcare, Trade Services, SaaS, Logistics, Education,
                Emergency Response, Environmental Science.
              </Paragraph>
              <Paragraph>
                <b style={{ color: "#C1476C" }}>Previous background:</b>{" "}
                Geographic Information Systems (GIS), Environmental Engineering.
              </Paragraph>
            </VStack>
            <ExternalLink
              mt="4"
              href="https://www.linkedin.com/in/wilsonfsouza/?locale=en_US"
            >
              <CustomButton>See more on LinkedIn</CustomButton>
            </ExternalLink>
          </VStack>
        </Section>
      </FadeInWhenVisible>

      {/* <Skills /> */}

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
