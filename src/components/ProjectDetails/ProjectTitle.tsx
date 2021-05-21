import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ProjectTitleProps {
    children: ReactNode;
}

export function ProjectTitle({ children }: ProjectTitleProps) {
    return (
        <Text fontWeight="medium" fontSize={{ base: "1.125rem", sm: "1.6875rem", md: "2.25rem" }}>{children}</Text>
    );
}