import { Heading } from "@chakra-ui/react";

interface SectionTitleProps {
    content: string;
}

export function SectionTitle({ content }: SectionTitleProps) {
    return (
        <Heading
            fontSize={{ base: "2rem", sm: "3rem", md: "4rem" }}
            position="relative"
            height="fit-content"
            _after={{
                content: '""',
                position: 'absolute',
                height: '2px',
                width: '6.875rem',
                background: 'pink.600',
                left: '0',
                bottom: '-0.6875rem'
            }}
        >{content}</Heading>
    );
}