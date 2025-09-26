import { HStack, Separator } from "@chakra-ui/react";
import { Logo } from "../Logo";

export function LogoDivider() {
  return (
    <HStack
      gap={{ base: "1.5rem", lg: "2.8125rem" }}
      w="100%"
      alignItems="center"
      justifyContent="center"
      pb="3.625rem"
    >
      <Logo />
      <Separator
        orientation="horizontal"
        height="2px"
        minWidth="10px"
        flex="1"
        color="gray.500"
      />
    </HStack>
  );
}
