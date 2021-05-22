import { Flex, Heading, VStack, Icon } from "@chakra-ui/react";
import { IconBaseProps } from 'react-icons';

interface MiniCardProps {
    title: string;
    icon: React.ComponentType<IconBaseProps>;
}

export function MiniCard({ title, icon: CustomIcon }: MiniCardProps) {
    return (
        <VStack
            spacing={{ base: "1rem", lg: "1.5rem" }}
            bgColor="gray.700"
            w={{ base: "6.5rem", sm: "10.75rem", md: "11rem" }}
            h={{ base: "8rem", sm: "10.75rem", md: "11rem" }}
            alignItems="center"
            justifyContent="center"
            borderRadius="0.625rem"
            padding="1.5rem"
        >
            <Flex
                w={{ base: "4rem", md: "5.5rem" }}
                h={{ base: "4rem", md: "5.5rem" }}
                borderRadius="50%"
                alignItems="center"
                justifyContent="center"
                background="linear-gradient(136.01deg, #1E1C27 15.64%, rgba(30, 28, 39, 0.38) 83.84%)"
            >
                <Icon as={CustomIcon} fontSize={{ base: "1.5rem", sm: "1.875rem", md: "2.5rem" }} title={title} />
            </Flex>

            <Heading
                fontWeight="medium"
                fontSize={{ base: "0.75rem", sm: "0.875rem", md: "1rem" }}
                lineHeight="100%"
                letterSpacing="0.05em"
                textTransform="uppercase"
                textAlign="center"
            >
                {title}
            </Heading>
        </VStack >
    );
}