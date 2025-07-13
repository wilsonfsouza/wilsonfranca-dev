import NextLink, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { cloneElement, ReactElement } from 'react';


interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    activeClassName: string;
}

export function ActiveLink({ children, activeClassName, ...rest }: ActiveLinkProps) {
    const router = useRouter();

    const className = router.asPath === rest.href ? 'page' : undefined;
    const color = className ? '#fff' : '#999591';

    return (
        <NextLink {...rest} legacyBehavior passHref>
            {cloneElement(children, { color: color })}
        </NextLink>
    );
}