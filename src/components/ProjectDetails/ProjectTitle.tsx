import { Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ProjectTitleProps {
  children: ReactNode;
}

export function ProjectTitle({ children }: ProjectTitleProps) {
  return (
    <Heading
      fontWeight="medium"
      fontSize={{ base: "1.125rem", sm: "1.6875rem", md: "2.25rem" }}
      lineHeight={{ base: "2.24rem", md: "2.7rem" }}
    >
      {children}
    </Heading>
  );
}
