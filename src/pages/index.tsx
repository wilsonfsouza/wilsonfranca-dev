import { SimpleGrid, Box, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import { FaCode, FaChartBar, FaUserAstronaut } from 'react-icons/fa';
import { Hero } from "../components/Hero";
import { TransitionSection } from "../components/TransitionSection";
import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { CustomButton } from "../components/CustomButton";
import { ProjectCard } from "../components/ProjectCard";
import { FadeInWhenVisible } from "../components/FadeInWhenVisible";
import { useRouter } from "next/router";
import { useCallback } from "react";

export default function Home() {
  const router = useRouter();

  const redirectToPortfolio = useCallback(() => {
    router.push('/portfolio');
  }, [router]);

  return (
    <>
      <Hero />
      <TransitionSection gradientDirection="normal" isBellowHero={true} />
      <Section title="What I Do">
        <Wrap
          w="100%"
          spacing="2.125rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <WrapItem>
            <FadeInWhenVisible>
              <Card
                icon={FaCode}
                title="Design + Development"
                description="Modern experiences optimized for performance, search engines, and converting users to customers."
              />
            </FadeInWhenVisible>
          </WrapItem>
          <WrapItem>
            <FadeInWhenVisible>
              <Card
                icon={FaChartBar}
                title="Data Analysis"
                description="Modern experiences optimized for performance, search engines, and converting users to customers."
              />
            </FadeInWhenVisible>
          </WrapItem>
          <WrapItem>
            <FadeInWhenVisible>
              <Card
                icon={FaUserAstronaut}
                title="Friendly Interfaces"
                description="Friendly and accessible interfaces focused on user experience that adapts to all devices."
              />
            </FadeInWhenVisible>
          </WrapItem>
        </Wrap>

      </Section>
      <Section title="Featured Projects">
        <VStack spacing="3rem" w="100%">
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="2rem" w="100%">
            <FadeInWhenVisible>
              <ProjectCard href="/portfolio/smartit" imgSrc="/portfolio/smartit.png" layoutId="smartit" />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <ProjectCard href="/portfolio/gobarber" imgSrc="/portfolio/gobarber.png" layoutId="gobarber" />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <ProjectCard href="/portfolio/digiWallet" imgSrc="/portfolio/digiWallet.png" layoutId="digiWallet" />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <ProjectCard href="/portfolio/gobarber" imgSrc="/portfolio/gobarber.png" layoutId="gobarber" />
            </FadeInWhenVisible>
          </SimpleGrid>
          <CustomButton onClick={redirectToPortfolio}>See All</CustomButton>
        </VStack>
      </Section>

      <TransitionSection gradientDirection="upsidedown" />
    </>
  )
}
