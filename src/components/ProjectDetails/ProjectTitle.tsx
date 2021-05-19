import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ProjectTitleProps {
    children: ReactNode;
}

export function ProjectTitle({ children }: ProjectTitleProps) {
    return (
        <Text fontWeight="medium" fontSize={["1.125rem", "1.6875rem", "2.25rem"]}>{children}</Text>
    );
}