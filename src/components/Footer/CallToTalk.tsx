import { VStack, Text } from "@chakra-ui/react";

export function CallToTalk() {
    return (
        <VStack maxWidth="17.25rem" alignItems="flex-start">
            <Text fontSize="2.25rem" fontWeight="regular">Interested in collaboration?</Text>
            <Text fontSize="1.5rem" color="pink.600" fontWeight="regular">Let's Talk</Text>
        </VStack>
    );
}