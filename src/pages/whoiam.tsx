import { VStack, Wrap, WrapItem } from "@chakra-ui/react";

import { TransitionSection } from "../components/TransitionSection";
import { Section } from "../components/Section";
import { FadeInWhenVisible } from "../components/FadeInWhenVisible";
import { MiniCard } from "../components/MiniCard";
import { skills } from "../utils/skills";
import { Paragraph } from "../components/Paragraph";
import { GetStaticProps } from "next";


export default function WhoIAm() {
  return (
    <>
      <TransitionSection gradientDirection="normal" isBellowHero={false} />

      <FadeInWhenVisible>
        <Section title="Who I Am">
          <VStack spacing="3rem" w="100%" alignItems="start">
            <Paragraph>
              I’m Wilson. I’m a Software Developer and UI/UX enthusiast based in Redding, CA.
          </Paragraph>
            <Paragraph>
              My background is in Environmental Engineering. I have worked with Python in the Geographic Information Systems (GIS) field for 2 years before transitioning into web development.
          </Paragraph>
            <Paragraph>
              During the day, I am a Full-Stack Developer at the Spatial Studies Lab at Rice University. During the evenings, I spend time working on personal projects and volunteering at local non-profits.
          </Paragraph>
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
    </>
  )
}

const ONE_DAY = 60 * 60 * 24;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: ONE_DAY
  }
}


