import { Flex, Stack, useBreakpointValue } from "@chakra-ui/react";
import { CallToTalk } from "./CallToTalk";
import { ContactInfoList } from "./ContactInfoList";
import { FooterNavList } from "./FooterNavList";

export function FooterContent() {
  const isSmallerScreen = useBreakpointValue({
    base: true,
    md: false,
  });

  if (isSmallerScreen) {
    return (
      <Flex alignItems="center" justifyContent="center" pb="4rem">
        <Stack
          direction="column"
          alignItems="start"
          justifyContent="center"
          gap="2.25rem"
          width="100%"
        >
          <CallToTalk />
          <Stack
            direction="row"
            alignItems="start"
            justifyContent="space-between"
            gap="2.25rem"
            width="100%"
          >
            <FooterNavList />
            <ContactInfoList />
          </Stack>
        </Stack>
      </Flex>
    );
  }

  return (
    <Stack
      direction="row"
      alignItems="start"
      justifyContent="center"
      gap="5rem"
      width="100%"
    >
      <CallToTalk />
      <FooterNavList />
      <ContactInfoList />
    </Stack>
  );
}
