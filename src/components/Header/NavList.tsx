import { Stack, StackProps } from '@chakra-ui/react';

import { ActiveLink } from './ActiveLink';
import { NavLink } from './NavLink';

interface NavListProps extends StackProps {
    direction?: "row" | "column";
}

export function NavList({ direction = "row", ...rest }: NavListProps) {
    return (
        <Stack
            as="nav"
            spacing={{ base: "2", lg: "8" }}
            direction={direction}
            {...rest}
        >
            <ActiveLink href="/" activeClassName="active">
                <NavLink>HOME</NavLink>
            </ActiveLink>
            <ActiveLink href="/whoiam" activeClassName="active">
                <NavLink>WHO I AM</NavLink>
            </ActiveLink>
            <ActiveLink href="/projects" activeClassName="active">
                <NavLink>PROJECTS</NavLink>
            </ActiveLink>
            <ActiveLink href="/contact" activeClassName="active">
                <NavLink>CONTACT</NavLink>
            </ActiveLink>
        </Stack>
    );
}