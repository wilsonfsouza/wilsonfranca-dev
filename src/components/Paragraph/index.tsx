import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ParagraphProps {
  children: ReactNode;
}

export function Paragraph({ children }: ParagraphProps) {
  return (
    <Text
      fontWeight="light"
      fontSize={{ base: "1rem", sm: "1.375rem", md: "1.75rem" }}
      letterSpacing={{
        base: "0.1rem",
        sm: "0.15rem",
        md: "0.1875rem",
        lg: "0.225rem",
      }}
    >
      {children}
    </Text>
  );
}
