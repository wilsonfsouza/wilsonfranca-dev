import { Flex, VStack, HStack, Text } from '@chakra-ui/react';
import { FaPhone, FaMailBulk } from 'react-icons/fa';
import { SocialMediaBar } from '../SocialMediaBar';
import { CallToTalk } from './CallToTalk';
import { ContactInfoItem } from './ContactInfoItem';
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

                <HStack alignItems="start" justifyContent="center" spacing={["2.5rem", "5rem"]} width="100%">
                    <CallToTalk />
                    <FooterNavList />
                    <VStack alignItems="flex-start" spacing="1.5rem">
                        <ContactInfoItem icon={FaPhone}>
                            <Text fontFamily="Roboto Slab" fontSize="1.125rem" fontWeight="light">+1 (530) 782-0830</Text>
                        </ContactInfoItem>
                        <ContactInfoItem icon={FaMailBulk}>
                            <Text fontFamily="Roboto Slab" fontSize="1.125rem" fontWeight="bold">wilson.franca.92</Text>
                            <Text fontFamily="Roboto Slab" fontSize="1.125rem" fontWeight="light">@gmail.com</Text>
                        </ContactInfoItem>
                    </VStack>
                </HStack>

                <SocialMediaBar justifyContent="space-between">
                    <Text fontWeight="light" fontSize="1rem">Copyright © 2021 - Wilson Franca de Souza</Text>
                </SocialMediaBar>
            </VStack>
        </Flex>
    );
}