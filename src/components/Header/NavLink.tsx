import NextLink, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

interface NavLinkProps extends LinkProps {
    children: string;
}

export const NavLink = ({children, ...props}: NavLinkProps) => {
    const router = useRouter();
    
    const color = router.asPath === props.href ? '#fff' : '#999591';
    
    return (
        <span style={{color, padding: '1rem 0'}}>
            <NextLink
                className="link"
                {...props}
            >
                {children}
            </NextLink>
        </span>
    )
};