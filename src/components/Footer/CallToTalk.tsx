import { VStack, Text } from "@chakra-ui/react";

export function CallToTalk() {
    return (
        <VStack maxWidth="17.25rem" alignItems="flex-start">
            <Text fontSize={{ base: '1.5rem', md: "2.25rem" }} fontWeight="regular">Interested in collaboration?</Text>
            <Text fontSize={{ base: '1.125rem', md: "1.5rem" }} color="pink.600" fontWeight="regular">Let's Talk</Text>
        </VStack>
    );
}