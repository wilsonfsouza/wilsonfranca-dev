import { SimpleGrid, VStack } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { getPrismicClient } from "../../services/prismic";
import Prismic from '@prismicio/client';

import { TransitionSection } from "../../components/TransitionSection";
import { Section } from "../../components/Section";
import { ProjectCard } from "../../components/ProjectCard";
import { FadeInWhenVisible } from "../../components/FadeInWhenVisible";
import { SEO } from "../../components/SEO";

type Project = {
    slug: string;
    thumbnailUrl: string;
}

interface ProjectsProps {
    projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
    return (
        <main>
            <SEO title="Projects" />

            <TransitionSection gradientDirection="normal" isBellowHero={false} />

            <Section title="Projects">
                <VStack spacing="3rem" w="100%">
                    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="2rem" w="100%">
                        {projects.map(project => (
                            <FadeInWhenVisible key={project.slug}>
                                <ProjectCard href={`/projects/${project.slug}`} imgSrc={project.thumbnailUrl} layoutId={project.slug} />
                            </FadeInWhenVisible>
                        ))}
                    </SimpleGrid>
                </VStack>
            </Section>

            <TransitionSection gradientDirection="upsidedown" />
        </main>
    )
}

const ONE_DAY = 60 * 60 * 24;

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient();

    const response = await prismic.query([
        Prismic.Predicates.at('document.type', 'project')
    ], {
        fetch: ['project.thumbnail'],
        pageSize: 20,
        orderings: '[document.last_publication_date desc]',
    });

    if (!response) {
        return {
            props: {
                projects: []
            },
            revalidate: ONE_DAY
        }
    }

    const projects = response.results.map(project => {
        return {
            slug: project.uid,
            thumbnailUrl: project.data.thumbnail.url,
        }
    });

    return {
        props: {
            projects
        },
        revalidate: ONE_DAY
    }
}