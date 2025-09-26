import { Stack, VStack } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { RichText } from "prismic-dom";
import { useCallback } from "react";
import { getPrismicClient } from "../../services/prismic";

import { CustomButton } from "../../components/CustomButton";
import { ExternalLink } from "../../components/ExternalLink";
import { FadeInWhenVisible } from "../../components/FadeInWhenVisible";
import { ProjectDetails } from "../../components/ProjectDetails";
import { ProjectImage } from "../../components/ProjectDetails/ProjectImage";
import { Section } from "../../components/Section";
import { SEO } from "../../components/SEO";
import { TransitionSection } from "../../components/TransitionSection";

type Project = {
  slug: string;
  title: string;
  thumbnailUrl: string;
  technologies: string;
  description: string;
  websiteUrl: string;
  githubRepository: string;
};

interface ProjectPreviewProps {
  project: Project;
}

export default function ProjectPreview({ project }: ProjectPreviewProps) {
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <main>
      <SEO title={project.title} />
      <TransitionSection gradientDirection="normal" isBellowHero={false} />
      <FadeInWhenVisible>
        <Section title={project.title} hasBackButton={true} goBack={handleBack}>
          <VStack gap={["3.375rem", "4.875rem", "6.375rem"]}>
            <VStack gap="2rem" alignItems="flex-start">
              <ProjectImage
                layoutId={project.slug}
                imageSrc={project.thumbnailUrl}
              />

              <ProjectDetails title="Technologies:">
                {project.technologies}
              </ProjectDetails>

              <ProjectDetails title="Description:">
                {project.description}
              </ProjectDetails>
            </VStack>

            <Stack
              direction={{ base: "column", lg: "row" }}
              gap="1.5rem"
              alignSelf="center"
            >
              {project.websiteUrl && (
                <ExternalLink href={project.websiteUrl}>
                  <CustomButton>Live</CustomButton>
                </ExternalLink>
              )}
              {project.githubRepository && (
                <ExternalLink href={project.githubRepository}>
                  <CustomButton isPrimary={false}>Code</CustomButton>
                </ExternalLink>
              )}
            </Stack>
          </VStack>
        </Section>
      </FadeInWhenVisible>
      <TransitionSection gradientDirection="upsidedown" isBellowHero={false} />
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

const ONE_DAY = 60 * 60 * 24;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const prismic = getPrismicClient();

  const response = await prismic.getByUID("project", String(slug), {});

  if (!response) {
    return {
      props: {
        project: {},
      },
    };
  }

  const project = {
    slug,
    title: RichText.asText(response.data.title),
    thumbnailUrl: response.data.thumbnail.url,
    technologies: RichText.asText(response.data.technologies),
    description: RichText.asText(response.data.description),
    websiteUrl: response.data.website_url?.url ?? null,
    githubRepository: response.data.github_repository?.url ?? null,
  };

  return {
    props: {
      project,
    },
    revalidate: ONE_DAY,
  };
};
