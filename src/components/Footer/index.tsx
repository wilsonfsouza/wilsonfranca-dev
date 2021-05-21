import { Flex, VStack, Text } from '@chakra-ui/react';
import { SocialMediaBar } from '../SocialMediaBar';
import { FooterContent } from './FooterContent';
import { LogoDivider } from './LogoDivider';

export function Footer() {
    return (
        <Flex
            as="footer"
            w="100%"
            align="center"
            backgroundColor="gray.900"
            px="2.6875rem"
            py="2.1875rem"
        >
            <VStack
                as="div"
                w="100%"
                mx="auto"
                my="0"
                maxWidth={1480}
            >
                <LogoDivider />
                <FooterContent />

                <SocialMediaBar justifyContent="space-between" pb="0">
                    <Text fontWeight="light" fontSize={{ base: "0.875rem", lg: "1rem" }}>Copyright © 2021 - Wilson Franca de Souza</Text>
                </SocialMediaBar>
            </VStack>
        </Flex>
    );
}