import { SimpleGrid, VStack } from "@chakra-ui/react";
import Prismic from "@prismicio/client";
import { GetStaticProps } from "next";
import { getPrismicClient } from "../../services/prismic";

import { RichText } from "prismic-dom";
import { FadeInWhenVisible } from "../../components/FadeInWhenVisible";
import { ProjectCard } from "../../components/ProjectCard";
import { Section } from "../../components/Section";
import { SEO } from "../../components/SEO";
import { TransitionSection } from "../../components/TransitionSection";

type Project = {
  slug: string;
  thumbnailUrl: string;
  title: string;
  description: string;
  technologies: string[];
};

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <main>
      <SEO title="Projects" />

      <TransitionSection gradientDirection="normal" isBellowHero={false} />

      <Section title="Projects">
        <VStack gap="3rem" w="100%">
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap="2rem" w="100%">
            {projects.map((project) => (
              <FadeInWhenVisible key={project.slug}>
                <ProjectCard
                  href={`/projects/${project.slug}`}
                  imgSrc={project.thumbnailUrl}
                  layoutId={project.slug}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                />
              </FadeInWhenVisible>
            ))}
          </SimpleGrid>
        </VStack>
      </Section>

      <TransitionSection gradientDirection="upsidedown" />
    </main>
  );
}

const ONE_HOUR = 60 * 60 * 1;

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.Predicates.at("document.type", "project")],
    {
      fetch: [
        "project.thumbnail",
        "project.title",
        "project.short_description",
        "project.technologies_card_list",
      ],
      pageSize: 20,
      orderings: "[my.project.date desc]",
    }
  );

  if (!response) {
    return {
      props: {
        projects: [],
      },
      revalidate: ONE_HOUR,
    };
  }

  const projects = response.results.map((project) => {
    const hasListOfTech = project.data.technologies_card_list.length > 0;
    const technologies = hasListOfTech
      ? project.data.technologies_card_list.map((stack) => stack.tech)
      : [];
    return {
      slug: project.uid,
      thumbnailUrl: project.data.thumbnail.url,
      title: RichText.asText(project.data.title),
      description: RichText.asText(project.data.short_description),
      technologies,
    };
  });

  return {
    props: {
      projects,
    },
    revalidate: ONE_HOUR,
  };
};
