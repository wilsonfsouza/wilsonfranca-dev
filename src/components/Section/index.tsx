import { Button, Flex, FlexProps, HStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { SectionTitle } from "./SectionTitle";

interface SectionProps extends FlexProps {
    children: ReactNode;
    title: string;
    hasBackButton?: boolean;
    goBack?: () => void;
}

export function Section({ title, children, hasBackButton = false, goBack, ...rest }: SectionProps) {
    return (
        <Flex
            as="section"
            px="2.6875rem"
            w="100%"
            justifyContent="flex-start"
            alignItems="center"
            {...rest}
        >
            <Flex
                h="100%"
                w="100%"
                mx="auto"
                maxWidth={1480}
                direction="column"
            >
                <HStack justifyContent="space-between" alignItems="center">
                    <SectionTitle content={title} />
                    {hasBackButton && (
                        <Button variant="unstyled" fontFamily="Roboto Slab" fontSize="2rem" fontWeight="light" _hover={{ textDecoration: 'underline', color: 'pink.600' }} onClick={goBack}>Back</Button>
                    )}
                </HStack>
                <Flex
                    as="div"
                    marginTop={["3.125rem", "4.75rem", "6.375rem"]}
                    marginBottom={["4.625rem", "7.625rem", "10.625rem"]}
                >
                    {children}
                </Flex>
            </Flex>
        </Flex>
    )
}