import { Stack } from '@chakra-ui/react';

import { ActiveLink } from './ActiveLink';
import { NavLink } from './NavLink';

interface NavListProps {
    direction?: "row" | "column";
}

export function NavList({ direction = "row" }: NavListProps) {
    return (
        <Stack
            as="nav"
            spacing={["2", "2", "2", "8"]}
            direction={direction}
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
        </Stack>
    );
}