import { VStack, Stack } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { CustomButton } from "../../components/CustomButton";
import { FadeInWhenVisible } from "../../components/FadeInWhenVisible";
import { ProjectDetails } from "../../components/ProjectDetails";
import { ProjectImage } from "../../components/ProjectDetails/ProjectImage";
import { Section } from "../../components/Section";
import { TransitionSection } from "../../components/TransitionSection";

type Project = {
    slug: string;
    title: string;
    technologies: string;
    description: string;
}

interface ProjectPreviewProps {
    project: Project;
}

export default function ProjectPreview({ project }: ProjectPreviewProps) {
    const router = useRouter();

    const handleBack = useCallback(() => {
        router.back();
    }, [router]);

    return (
        <>
            <TransitionSection gradientDirection="normal" isBellowHero={false} />
            <FadeInWhenVisible>
                <Section title={project.title} hasBackButton={true} goBack={handleBack}>
                    <VStack spacing={["3.375rem", "4.875rem", "6.375rem"]}>
                        <VStack spacing="2rem" alignItems="flex-start">
                            <ProjectImage layoutId={project.slug} imageSrc={`/projects/${project.slug}.png`} />

                            <ProjectDetails title="Technologies:">
                                {project.technologies}
                            </ProjectDetails>

                            <ProjectDetails title="Description:">
                                {project.description}
                            </ProjectDetails>
                        </VStack>

                        <Stack direction={{ base: "column", lg: "row" }} spacing="1.5rem" alignSelf="center">
                            <CustomButton>Live</CustomButton>
                            <CustomButton isPrimary={false}>Code</CustomButton>
                        </Stack>
                    </VStack>
                </Section>
            </FadeInWhenVisible>
            <TransitionSection gradientDirection="upsidedown" isBellowHero={false} />
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking',
    }
}

const ONE_DAY = 60 * 60 * 24;

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params;

    console.log(slug);

    const project = {
        slug,
        title: "Smart.it",
        technologies: "Next.js, Styled-components, TypeScript.",
        description: "Smart.it is a web application that combines a gamified experience of the pomodoro technique with healthy exercises between short breaks of work/study sessions. Keep up with your productivity without sacrificing your health. Smart.it is the dream application of chiropractors and eye doctors for their patients."
    }

    return {
        props: {
            project
        },
        revalidate: ONE_DAY,
    }
}