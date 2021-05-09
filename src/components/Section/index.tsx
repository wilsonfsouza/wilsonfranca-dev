import { Flex, FlexProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { SectionTitle } from "./SectionTitle";

interface SectionProps extends FlexProps {
    children: ReactNode;
    title: string;
}

export function Section({ title, children, ...rest }: SectionProps) {
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
                <SectionTitle content={title} />
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