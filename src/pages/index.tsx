import { Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
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


      <TransitionSection gradientDirection="upsidedown" />
    </>
  )
}
