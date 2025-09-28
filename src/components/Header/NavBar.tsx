import {
  CloseButton,
  Drawer,
  Icon,
  IconButton,
  Portal,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";

import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { NavList } from "./NavList";

export function NavBar() {
  const navBarButtonRef = useRef(null);

  const isDrawerNavBar = useBreakpointValue({
    base: true,
    lg: false,
  });

  const { open, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  useEffect(() => {
    onClose();
  }, [router.asPath]);

  if (isDrawerNavBar) {
    return (
      <>
        <Drawer.Root
          placement="start"
          open={open}
          onOpenChange={(e) => !e.open && onClose()}
        >
          <IconButton
            ref={navBarButtonRef}
            aria-label="Open Navigation Menu"
            variant="plain"
            color="white"
            _hover={{
              color: "pink.600",
            }}
            _active={{
              backgroundColor: "transparent",
            }}
            onClick={onOpen}
          >
            <Icon as={BiMenuAltRight} fontSize={32} aria-label="menu" />
          </IconButton>

          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content bg="gray.900" p="4">
                <Drawer.Header fontFamily="Roboto Slab" fontWeight="bold">
                  <Drawer.Title>Menu</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                  <NavList direction="column" />
                </Drawer.Body>
                <Drawer.CloseTrigger asChild>
                  <CloseButton mt="6" />
                </Drawer.CloseTrigger>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>
      </>
    );
  }

  return <NavList />;
}
