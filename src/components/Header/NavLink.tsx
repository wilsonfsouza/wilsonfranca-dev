import { forwardRef, Link, LinkProps } from '@chakra-ui/react';

interface NavLinkProps extends LinkProps {
    children: string;
}

export const NavLink = forwardRef<NavLinkProps, "a">((props, ref) => {
    return (
        <Link
            _hover={{
                textDecoration: 'none',
                color: "#FFF"
            }}
            ref={ref}
            {...props}
        >
            {props.children}
        </Link>
    )
});