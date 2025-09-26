import { Flex, Heading, Icon, Text, VStack } from "@chakra-ui/react";
import { IconBaseProps } from "react-icons";

interface CardProps {
  title: string;
  description: string;
  icon: React.ComponentType<IconBaseProps>;
}

export function Card({ title, description, icon: CustomIcon }: CardProps) {
  return (
    <VStack
      gap={{ base: "1rem", lg: "1.5rem" }}
      bgColor="gray.700"
      w={{ base: "16.75rem", lg: "21.875rem" }}
      h={{ base: "17.25rem", lg: "28.0625rem" }}
      alignItems="center"
      justifyContent="center"
      borderRadius="0.625rem"
      padding="1.5rem"
    >
      <Flex
        w={{ base: "6.25rem", lg: "12.5rem" }}
        h={{ base: "6.25rem", lg: "12.5rem" }}
        borderRadius="50%"
        alignItems="center"
        justifyContent="center"
        background="linear-gradient(136.01deg, #1E1C27 15.64%, rgba(30, 28, 39, 0.38) 83.84%)"
      >
        <Icon as={CustomIcon} fontSize={{ base: "3.125rem", lg: "6.25rem" }} />
      </Flex>

      <Heading
        fontWeight="medium"
        fontSize={{ base: "1rem", lg: "1.125rem" }}
        lineHeight="100%"
        letterSpacing="0.05em"
        textTransform="uppercase"
        textAlign="center"
      >
        {title}
      </Heading>

      <Text
        fontWeight="light"
        fontSize={{ base: "0.875rem", lg: "1rem" }}
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
