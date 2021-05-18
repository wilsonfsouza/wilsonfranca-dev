import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ProjectTitleProps {
    children: ReactNode;
}

export function ProjectTitle({ children }: ProjectTitleProps) {
    return (
        <Text fontWeight="medium" fontSize="2.25rem">{children}</Text>
    );
}