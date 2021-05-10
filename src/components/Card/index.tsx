import { Flex, Heading, Text, VStack, Icon } from "@chakra-ui/react";
import { IconBaseProps } from 'react-icons';

interface CardProps {
    title: string;
    description: string;
    icon: React.ComponentType<IconBaseProps>;
}

export function Card({ title, description, icon: CustomIcon }: CardProps) {
    return (
        <VStack
            spacing={["1rem", "1.5rem"]}
            bgColor="gray.700"
            w={["16.75rem", "21.875rem"]}
            h={["17.25rem", "28.0625rem"]}
            alignItems="center"
            justifyContent="center"
            borderRadius="0.625rem"
            padding="1.5rem"
        >
            <Flex
                w={["6.25rem", "9.375rem", "10.9375rem", "12.5rem"]}
                h={["6.25rem", "9.375rem", "10.9375rem", "12.5rem"]}
                borderRadius="50%"
                alignItems="center"
                justifyContent="center"
                background="linear-gradient(136.01deg, #1E1C27 15.64%, rgba(30, 28, 39, 0.38) 83.84%)"
            >
                <Icon as={CustomIcon} fontSize={["3.125rem", "4.6875rem", "5.5625rem", "6.25rem"]} />
            </Flex>

            <Heading
                fontWeight="medium"
                fontSize={["1rem", "1.125rem"]}
                lineHeight="100%"
                letterSpacing="0.05em"
                textTransform="uppercase"
                textAlign="center"
            >
                {title}
            </Heading>

            <Text
                fontWeight="light"
                fontSize={["0.875rem", "1rem"]}
                lineHeight="140%"
                letterSpacing="0.04em"
                maxWidth={250}
                textAlign="center"
            >
                {description}
            </Text>
        </VStack>
    );
}