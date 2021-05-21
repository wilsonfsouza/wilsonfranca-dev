import { HStack, useBreakpointValue } from "@chakra-ui/react";
import { CallToTalk } from "./CallToTalk";
import { ContactInfoList } from "./ContactInfoList";
import { FooterNavList } from "./FooterNavList";

export function FooterContent() {


    return (
        <HStack alignItems="start" justifyContent="center" spacing={{ base: "2.5rem", lg: "5rem" }} width="100%">
            <CallToTalk />
            <FooterNavList />
            <ContactInfoList />
        </HStack>
    );
}