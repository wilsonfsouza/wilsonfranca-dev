import { HStack, Divider } from "@chakra-ui/react";
import { Logo } from "../Logo";

export function LogoDivider() {
    return (
        <HStack spacing={{ base: "1.5rem", lg: "2.8125rem" }} w="100%" alignItems="center" justifyContent="center" pb="3.625rem">
            <Logo />
            <Divider orientation="horizontal" height="2px" minWidth="10px" flex="1" color="gray.500" />
        </HStack>
    );
}