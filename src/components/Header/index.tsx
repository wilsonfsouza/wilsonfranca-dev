import { Flex, HStack, Image } from '@chakra-ui/react';
import { NavBar } from './NavBar';

export function Header() {
    return (
        <Flex
            as="header"
            w="100%"
            h="36"
            align="center"
            backgroundColor="gray.900"
            px="2.6875rem"
            py="2.1875rem"
        >
            <HStack
                as="div"
                w="100%"
                mx="auto"
                my="0"
                maxWidth={1480}
            >
                <Image w={["9.9375rem", "11.375rem", "12.8125rem"]} src="/logo-full.svg" alt="wilsonfranca.dev" />

                <Flex as="div" align="center" style={{ marginLeft: "auto" }}>
                    <NavBar />
                </Flex>
            </HStack>
        </Flex>
    )
}