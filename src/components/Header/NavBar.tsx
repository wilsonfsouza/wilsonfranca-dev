import { HStack } from '@chakra-ui/react';
import { ActiveLink } from './ActiveLink';
import { NavLink } from './NavLink';

export function NavBar() {
    return (
        <HStack
            as="nav"
            spacing="8"
        >
            <ActiveLink href="/" activeClassName="active">
                <NavLink>HOME</NavLink>
            </ActiveLink>
            <ActiveLink href="/whoiam" activeClassName="active">
                <NavLink>WHO I AM</NavLink>
            </ActiveLink>
            <ActiveLink href="/portfolio" activeClassName="active">
                <NavLink>PORTFOLIO</NavLink>
            </ActiveLink>
            <ActiveLink href="/contact" activeClassName="active">
                <NavLink>CONTACT</NavLink>
            </ActiveLink>
        </HStack >
    );
}