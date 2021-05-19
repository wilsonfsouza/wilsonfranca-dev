import { Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ProjectContentProps {
    children: ReactNode;
}

export function ProjectContent({ children }: ProjectContentProps) {
    return (
        <Heading fontWeight="light" fontSize={["1rem", "1.375rem", "1.75rem"]}>{children}</Heading>
    );
}