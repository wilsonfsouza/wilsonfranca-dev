import { SimpleGrid, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import { FaCode, FaChartBar, FaUserAstronaut } from 'react-icons/fa';
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { getPrismicClient } from "../services/prismic";
import Prismic from '@prismicio/client';

import { Hero } from "../components/Hero";
import { TransitionSection } from "../components/TransitionSection";
import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { CustomButton } from "../components/CustomButton";
import { ProjectCard } from "../components/ProjectCard";
import { FadeInWhenVisible } from "../components/FadeInWhenVisible";
import { SEO } from "../components/SEO";

type Project = {
  slug: string;
  thumbnailUrl: string;
}

interface HomeProps {
  projects: Project[];
}

export default function Home({ projects }: HomeProps) {
  const router = useRouter();

  const redirectToPortfolio = useCallback(() => {
    router.push('/projects');
  }, [router]);

  return (
    <main>
      <SEO title="Home" />
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
        <VStack spacing="3rem" w="100%">
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="2rem" w="100%">
            {projects.map(project => (
              <FadeInWhenVisible key={project.slug}>
                <ProjectCard href={`/projects/${project.slug}`} imgSrc={project.thumbnailUrl} layoutId={project.slug} />
              </FadeInWhenVisible>
            ))}
          </SimpleGrid>
          <CustomButton onClick={redirectToPortfolio}>See All</CustomButton>
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
    Prismic.Predicates.at('document.type', 'project'),
    Prismic.Predicates.at('document.tags', ['featured'])
  ], {
    fetch: ['project.thumbnail'],
    pageSize: 4,
    orderings: '[document.last_publication_date desc]'
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
