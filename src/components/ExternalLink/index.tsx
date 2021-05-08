import { Link, LinkProps } from "@chakra-ui/layout";
import { ReactNode } from "react";

interface ExternalLinkProps extends LinkProps {
    children: ReactNode;
}

export function ExternalLink({ children, ...rest }: ExternalLinkProps) {
    return (
        <Link
            color="gray.500"
            variant="unstyled"
            isExternal
            _hover={{
                textDecoration: 'none',
                color: "#FFF"
            }}
            {...rest}
        >
            {children}
        </Link>
    );
}