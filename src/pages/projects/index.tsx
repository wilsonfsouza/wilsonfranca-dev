import { SimpleGrid, VStack } from "@chakra-ui/react";
import { TransitionSection } from "../../components/TransitionSection";
import { Section } from "../../components/Section";
import { CustomButton } from "../../components/CustomButton";
import { ProjectCard } from "../../components/ProjectCard";
import { FadeInWhenVisible } from "../../components/FadeInWhenVisible";

export default function Home() {
    return (
        <>
            <TransitionSection gradientDirection="normal" isBellowHero={false} />

            <Section title="Projects">
                <VStack spacing="3rem" w="100%">
                    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="2rem" w="100%">
                        <FadeInWhenVisible>
                            <ProjectCard href="/projects/smartit" imgSrc="/projects/smartit.png" layoutId="smartit" />
                        </FadeInWhenVisible>
                        <FadeInWhenVisible>
                            <ProjectCard href="/projects/gobarber" imgSrc="/projects/gobarber.png" layoutId="gobarber" />
                        </FadeInWhenVisible>
                        <FadeInWhenVisible>
                            <ProjectCard href="/projects/digiWallet" imgSrc="/projects/digiWallet.png" layoutId="digiWallet" />
                        </FadeInWhenVisible>
                        <FadeInWhenVisible>
                            <ProjectCard href="/projects/gobarber" imgSrc="/projects/gobarber.png" layoutId="gobarber" />
                        </FadeInWhenVisible>
                    </SimpleGrid>
                    <CustomButton onClick={() => { }}>See more</CustomButton>
                </VStack>
            </Section>

            <TransitionSection gradientDirection="upsidedown" />
        </>
    )
}
