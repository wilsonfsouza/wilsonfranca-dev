import { SimpleGrid, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import Prismic from "@prismicio/client";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { FaChartBar, FaCode, FaUserAstronaut } from "react-icons/fa";
import { getPrismicClient } from "../services/prismic";

import { RichText } from "prismic-dom";
import { Card } from "../components/Card";
import { CustomButton } from "../components/CustomButton";
import { FadeInWhenVisible } from "../components/FadeInWhenVisible";
import { Hero } from "../components/Hero";
import { ProjectCard } from "../components/ProjectCard";
import { Section } from "../components/Section";
import { SEO } from "../components/SEO";
import { TransitionSection } from "../components/TransitionSection";

type Project = {
  slug: string;
  thumbnailUrl: string;
  title: string;
  description: string;
  technologies: string[];
};

interface HomeProps {
  projects: Project[];
}

export default function Home({ projects }: HomeProps) {
  const router = useRouter();

  const redirectToPortfolio = useCallback(() => {
    router.push("/projects");
  }, [router]);

  return (
    <main>
      <SEO title="Home" />
      <Hero />
      <TransitionSection gradientDirection="normal" isBellowHero={true} />
      <Section title="What I Do">
        <Wrap
          w="100%"
          gap="2.125rem"
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
                description="Explore your data with automated processes and display it to your end-user to tell your story."
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
        <VStack gap="3rem" w="100%">
          <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }} gap="2rem" w="100%">
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
          <CustomButton onClick={redirectToPortfolio}>See All</CustomButton>
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
    [
      Prismic.Predicates.at("document.type", "project"),
      Prismic.Predicates.at("document.tags", ["featured"]),
    ],
    {
      fetch: [
        "project.thumbnail",
        "project.title",
        "project.short_description",
        "project.technologies_card_list",
      ],
      pageSize: 4,
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
