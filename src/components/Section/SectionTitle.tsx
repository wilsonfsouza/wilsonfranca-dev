import { Heading, useBreakpointValue } from "@chakra-ui/react";

interface SectionTitleProps {
    content: string;
}

export function SectionTitle({ content }: SectionTitleProps) {
    const isMobile = useBreakpointValue({
        base: true,
        md: false
    })

    if (isMobile) {
        return (
            <Heading
                fontSize={{ base: "2rem", sm: "2.5rem" }}
                position="relative"
                height="fit-content"
                _after={{
                    content: '""',
                    position: 'absolute',
                    height: '2px',
                    width: '3.375rem',
                    background: 'pink.600',
                    left: '0',
                    bottom: '-0.6875rem'
                }}
            >{content}</Heading>
        );
    }

    return (
        <Heading
            fontSize={{ md: "3.5rem" }}
            position="relative"
            height="fit-content"
            _after={{
                content: '""',
                position: 'absolute',
                height: '2px',
                width: '6.375rem',
                background: 'pink.600',
                left: '0',
                bottom: '-0.6875rem'
            }}
        >{content}</Heading>
    );
}