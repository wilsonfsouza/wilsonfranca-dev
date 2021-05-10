import { Stack, SimpleGrid, Box, VStack } from "@chakra-ui/react";
import { FaCode, FaChartBar, FaUserAstronaut } from 'react-icons/fa';
import { Hero } from "../components/Hero";
import { TransitionSection } from "../components/TransitionSection";
import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { CustomButton } from "../components/CustomButton";

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
      <Section title="Featured Projects">
        <VStack spacing="3rem" w="100%">
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="2rem" w="100%">
            <Box bg="url('/projects/smartit.png')" bgPosition="bottom" bgSize="cover" bgRepeat="no-repeat" height="23.75rem" w="100%" borderRadius="0.625rem" />
            <Box bg="url('/projects/gobarber.png')" bgPosition="bottom" bgSize="cover" bgRepeat="no-repeat" height="23.75rem" w="100%" borderRadius="0.625rem" />
            <Box bg="url('/projects/digiWallet.png')" bgPosition="bottom" bgSize="cover" bgRepeat="no-repeat" height="23.75rem" w="100%" borderRadius="0.625rem" />
            <Box bg="url('/projects/gobarber.png')" bgPosition="bottom" bgSize="cover" bgRepeat="no-repeat" height="23.75rem" w="100%" borderRadius="0.625rem" />
          </SimpleGrid>
          <CustomButton>See All</CustomButton>
        </VStack>
      </Section>

      <TransitionSection gradientDirection="upsidedown" />
    </>
  )
}
