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
            spacing="1.5rem"
            bgColor="gray.700"
            w="21.875rem"
            h="28.0625rem"
            alignItems="center"
            justifyContent="center"
            borderRadius="0.625rem"
        >
            <Flex
                w="12.5rem"
                h="12.5rem"
                borderRadius="6.25rem"
                alignItems="center"
                justifyContent="center"
                background="linear-gradient(136.01deg, #1E1C27 15.64%, rgba(30, 28, 39, 0.38) 83.84%)"
            >
                <Icon as={CustomIcon} fontSize={100} />
            </Flex>

            <Heading
                fontWeight="medium"
                fontSize="1.125rem"
                lineHeight="100%"
                letterSpacing="0.05em"
                textTransform="uppercase"
            >
                {title}
            </Heading>

            <Text
                fontWeight="light"
                fontSize="1rem"
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