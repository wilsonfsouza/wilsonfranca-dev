import { Stack, StackProps } from '@chakra-ui/react';

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
            <NavLink href="/" >HOME</NavLink>
            <NavLink href="/whoiam" >WHO I AM</NavLink>
            <NavLink href="/projects" >PROJECTS</NavLink>
            <NavLink href="/contact" >CONTACT</NavLink>
        </Stack>
    );
}