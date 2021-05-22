import { Text } from "@chakra-ui/react";

interface ParagraphProps {
    children: string;
}

export function Paragraph({ children }: ParagraphProps) {
    return (
        <Text
            fontWeight="light"
            fontSize={{ base: "1rem", sm: "1.5rem", md: "1.875rem", lg: "2.25rem" }}
            letterSpacing={{ base: "0.1rem", sm: "0.15rem", md: "0.1875rem", lg: "0.225rem" }}
            maxWidth="90%"
        >
            {children}
        </Text>
    );
}