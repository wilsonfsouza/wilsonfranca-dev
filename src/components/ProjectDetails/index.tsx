import { VStack } from "@chakra-ui/react";
import { Paragraph } from "../Paragraph";
import { ProjectTitle } from "./ProjectTitle";

interface ProjectDetailsProps {
  title: string;
  children: string;
}
export function ProjectDetails({ title, children }: ProjectDetailsProps) {
  return (
    <VStack gap="1.5rem" alignItems="flex-start">
      <ProjectTitle>{title}</ProjectTitle>
      <Paragraph>{children}</Paragraph>
    </VStack>
  );
}
