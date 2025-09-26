import { Flex, FlexProps, HStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { SectionTitle } from "./SectionTitle";

interface SectionProps extends FlexProps {
  children: ReactNode;
  title: string;
  goBack?: () => void;
}

export function Section({ title, children, goBack, ...rest }: SectionProps) {
  return (
    <Flex
      as="section"
      px="2.6875rem"
      w="100%"
      justifyContent="flex-start"
      alignItems="center"
      {...rest}
    >
      <Flex h="100%" w="100%" mx="auto" maxWidth={1480} direction="column">
        <HStack justifyContent="space-between" alignItems="center">
          <SectionTitle content={title} />
        </HStack>
        <Flex
          as="div"
          marginTop={{ base: "3.125rem", sm: "4.75rem", md: "6.375rem" }}
          marginBottom={{ base: "4.625rem", sm: "7.625rem", md: "10.625rem" }}
        >
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
}
