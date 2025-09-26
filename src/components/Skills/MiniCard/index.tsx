import { Flex, Heading, HStack, Icon } from "@chakra-ui/react";
import { IconBaseProps } from "react-icons";

interface MiniCardProps {
  title: string;
  icon: React.ComponentType<IconBaseProps>;
}

export function MiniCard({ title, icon: CustomIcon }: MiniCardProps) {
  return (
    <HStack
      gap={{ base: "1rem", lg: "1.5rem" }}
      bgColor="gray.700"
      w={{ base: "16rem" }}
      h={{ base: "5rem" }}
      alignItems="center"
      justifyContent="start"
      borderRadius="0.625rem"
      padding="0.5rem 1.5rem"
    >
      <Flex
        w={{ base: "3rem" }}
        h={{ base: "3rem" }}
        borderRadius="50%"
        alignItems="center"
        justifyContent="center"
        background="linear-gradient(136.01deg, #1E1C27 15.64%, rgba(30, 28, 39, 0.38) 83.84%)"
      >
        <Icon
          as={CustomIcon}
          fontSize={{ base: "1.25rem" }}
          aria-label={title}
        />
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
    </HStack>
  );
}
