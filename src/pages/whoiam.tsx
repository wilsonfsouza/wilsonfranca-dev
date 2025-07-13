import { VStack, Wrap, WrapItem } from "@chakra-ui/react";

import { TransitionSection } from "../components/TransitionSection";
import { Section } from "../components/Section";
import { FadeInWhenVisible } from "../components/FadeInWhenVisible";
import { MiniCard } from "../components/MiniCard";
import { skills } from "../utils/skills";
import { Paragraph } from "../components/Paragraph";
import { GetStaticProps } from "next";
import { CustomButton } from "../components/CustomButton";
import { ExternalLink } from "../components/ExternalLink";
import { SEO } from "../components/SEO";

export default function WhoIAm() {
  return (
    <main>
      <SEO title="Who I Am" />

      <TransitionSection gradientDirection="normal" isBellowHero={false} />

      <FadeInWhenVisible>
        <Section title="Who I Am">
          <VStack spacing="3rem" w="100%" alignItems="start">
            <Paragraph>
              I’m Wilson. With over 5 years of professional experience, I am a Full Stack Developer with a strong background in Front End (UI/UX) and Geographic Information Systems (GIS). I've built scalable, data-driven solutions - ranging from small applications to enterprise platforms serving over a million users - that are intuitive, accessible, and high-performing. 
          </Paragraph>
            <Paragraph>
              Worked in all stages of software development, including planning, designing, building, testing, and deployment.
          </Paragraph>
            <Paragraph>
              Technology and sectors that I have developed solutions for: Healthcare, Services, Quality Assurance (Data Visualization Tools), Geographic Information Systems (GIS), Higher Education, Logistics, and Environmental Science;
          </Paragraph>
            <ExternalLink href="https://www.linkedin.com/in/wilsonfsouza/?locale=en_US">
              <CustomButton>See Resume</CustomButton>
            </ExternalLink>
          </VStack>
        </Section>
      </FadeInWhenVisible>

      <Section title="Skills">
        <Wrap
          w="100%"
          spacing={{ base: "1.25rem", sm: "1.875rem", md: "2.125rem" }}
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
        >
          {skills.map(skill => (
            <WrapItem key={skill.title}>
              <FadeInWhenVisible>
                <MiniCard icon={skill.icon} title={skill.title} />
              </FadeInWhenVisible>
            </WrapItem>
          ))}
        </Wrap>
      </Section>

      <TransitionSection gradientDirection="upsidedown" />
    </main>
  )
}

const ONE_DAY = 60 * 60 * 24;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: ONE_DAY
  }
}


