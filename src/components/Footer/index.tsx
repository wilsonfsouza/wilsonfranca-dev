import { Flex, VStack, HStack, Text } from '@chakra-ui/react';
import { FaPhone, FaMailBulk } from 'react-icons/fa';
import { SocialMediaBar } from '../SocialMediaBar';
import { CallToTalk } from './CallToTalk';
import { ContactInfoItem } from './ContactInfoItem';
import { FooterContent } from './FooterContent';
import { FooterNavList } from './FooterNavList';
import { LogoDivider } from './LogoDivider';

export function Footer() {
    return (
        <Flex
            as="footer"
            w="100%"
            h="34rem"
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

                <SocialMediaBar justifyContent="space-between">
                    <Text fontWeight="light" fontSize={{ base: "0.875rem", lg: "1rem" }}>Copyright © 2021 - Wilson Franca de Souza</Text>
                </SocialMediaBar>
            </VStack>
        </Flex>
    );
}