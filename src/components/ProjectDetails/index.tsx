import { VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { ProjectContent } from "./ProjectContent";
import { ProjectTitle } from "./ProjectTitle";

interface ProjectDetailsProps {
    title: string;
    children: ReactNode;
}
export function ProjectDetails({ title, children }: ProjectDetailsProps) {
    return (
        <VStack spacing="1.5rem" alignItems="flex-start">
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectContent>{children}</ProjectContent>
        </VStack>
    );
}