import { VStack, HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { CustomButton } from "../../components/CustomButton";
import { FadeInWhenVisible } from "../../components/FadeInWhenVisible";
import { ProjectDetails } from "../../components/ProjectDetails";
import { ProjectImage } from "../../components/ProjectDetails/ProjectImage";
import { Section } from "../../components/Section";
import { TransitionSection } from "../../components/TransitionSection";

export default function Smartit() {
    const router = useRouter();

    const handleBack = useCallback(() => {
        router.back();
    }, [router]);

    return (
        <>
            <TransitionSection gradientDirection="normal" isBellowHero={false} />
            <FadeInWhenVisible>
                <Section title="Smart.it" hasBackButton={true} goBack={handleBack}>
                    <VStack spacing="6.375rem">
                        <VStack spacing="2rem" alignItems="flex-start">
                            <ProjectImage layoutId="smartit" imageSrc="/projects/smartit.png" />

                            <ProjectDetails title="Technologies:">
                                Next.js, Styled-components, TypeScript.
                            </ProjectDetails>

                            <ProjectDetails title="Description:">
                                Smart.it is a web application that combines a gamified experience of the pomodoro technique with healthy exercises between short breaks of work/study sessions.
                                Keep up with your productivity without sacrificing your health. Smart.it is the dream application of chiropractors and eye doctors for their patients.
                            </ProjectDetails>
                        </VStack>
                        <HStack spacing="1.5rem" alignSelf="center">
                            <CustomButton>Live</CustomButton>
                            <CustomButton isPrimary={false}>Code</CustomButton>
                        </HStack>
                    </VStack>
                </Section>
            </FadeInWhenVisible>
            <TransitionSection gradientDirection="upsidedown" isBellowHero={false} />
        </>
    )
}
