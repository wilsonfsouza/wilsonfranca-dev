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
                <Image w={["11.875rem", "15.875rem", "23.275rem"]} src="/logo.svg" alt="wilsonfranca.dev" />

                <Flex as="div" align="center" style={{ marginLeft: "auto" }}>
                    <NavBar />
                </Flex>
            </HStack>
        </Flex>
    )
}