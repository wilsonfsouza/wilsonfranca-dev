import { Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ProjectContentProps {
    children: ReactNode;
}

export function ProjectContent({ children }: ProjectContentProps) {
    return (
        <Heading fontWeight="light" fontSize={{ base: "1rem", sm: "1.375rem", md: "1.75rem" }}>{children}</Heading>
    );
}