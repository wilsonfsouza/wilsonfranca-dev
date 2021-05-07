import {
    Drawer,
    Icon,
    useBreakpointValue,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    DrawerHeader,
    DrawerBody,
    useDisclosure,
    IconButton
} from '@chakra-ui/react';

import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

import { BiMenuAltRight } from 'react-icons/bi';
import { NavList } from './NavList';

export function NavBar() {
    const navBarButtonRef = useRef(null);

    const isDrawerNavBar = useBreakpointValue({
        base: true,
        lg: false
    });

    const { isOpen, onOpen, onClose } = useDisclosure();

    const router = useRouter();

    useEffect(() => {
        onClose()
    }, [router.asPath])

    if (isDrawerNavBar) {
        return (
            <>
                <IconButton
                    ref={navBarButtonRef}
                    aria-label="Open Navigation Menu"
                    icon={<Icon as={BiMenuAltRight} fontSize={32} />}
                    variant="unstyled"
                    _hover={{
                        color: "pink.600"
                    }}
                    _active={{
                        backgroundColor: "transparent"
                    }}
                    onClick={onOpen}
                />

                <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                    <DrawerOverlay>
                        <DrawerContent bg="gray.900" p="4">
                            <DrawerCloseButton mt="6" />
                            <DrawerHeader fontFamily="Roboto Slab" fontWeight="bold">Menu</DrawerHeader>
                            <DrawerBody>
                                <NavList direction="column" />
                            </DrawerBody>
                        </DrawerContent>
                    </DrawerOverlay>
                </Drawer>
            </>
        )
    }

    return (
        <NavList />
    );
}