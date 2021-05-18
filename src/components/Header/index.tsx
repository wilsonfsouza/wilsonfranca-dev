import { Flex, HStack } from '@chakra-ui/react';
import { Logo } from '../Logo';
import { NavBar } from './NavBar';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

export function Header() {
    const router = useRouter();

    const handleLogoRedirectToHome = useCallback(() => {
        router.push('/');
    }, [router]);

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

                <Logo isClickable={true} onClickFunct={handleLogoRedirectToHome} />

                <Flex as="div" align="center" style={{ marginLeft: "auto" }}>
                    <NavBar />
                </Flex>
            </HStack>
        </Flex>
    )
}