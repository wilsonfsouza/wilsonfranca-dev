import { Heading, VStack } from "@chakra-ui/react";
import { NavList } from "../Header/NavList";

export function FooterNavList() {
  return (
    <VStack alignItems="flex-start">
      <Heading fontSize="1.125rem" fontWeight="bold">
        MENU
      </Heading>
      <NavList direction="column" gap="0" />
    </VStack>
  );
}
