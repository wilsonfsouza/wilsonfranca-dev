import { Stack } from "@chakra-ui/react";
import { Hero } from "../components/Hero";
import { Section } from "../components/Section";
import { TransitionSection } from "../components/TransitionSection";
import { FaCode, FaChartBar, FaUserAstronaut } from 'react-icons/fa';
import { Card } from "../components/Card";

export default function Home() {
  return (
    <>
      <Hero />
      <TransitionSection gradientDirection="normal" isBellowHero={true} />
      <Section title="What I Do">
        <Stack
          direction={["column", "column", "row", "row"]}
          w="100%"
          spacing="2.125rem"
          alignItems="center"
          justifyContent="space-around"
        >
          <Card
            icon={FaCode}
            title="Design + Development"
            description="Modern experiences optimized for performance, search engines, and converting users to customers."
          />

          <Card
            icon={FaChartBar}
            title="Data Analysis"
            description="Modern experiences optimized for performance, search engines, and converting users to customers."
          />

          <Card
            icon={FaUserAstronaut}
            title="Friendly Interfaces"
            description="Friendly and accessible interfaces focused on user experience that adapts to all devices."
          />
        </Stack>
      </Section>

      <TransitionSection gradientDirection="upsidedown" />
    </>
  )
}
