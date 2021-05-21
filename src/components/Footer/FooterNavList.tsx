import { VStack, Heading } from "@chakra-ui/react";
import { NavList } from "../Header/NavList";

export function FooterNavList() {
    return (
        <VStack alignItems="flex-start">
            <Heading fontSize="1.125rem" fontWeight="bold">MENU</Heading>
            <NavList direction="column" spacing="0" />
        </VStack>
    );
}