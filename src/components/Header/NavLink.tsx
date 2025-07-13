import { Link, LinkProps } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface NavLinkProps extends LinkProps {
    children: string;
}

export const NavLink = ({children, ...props}: NavLinkProps) => {
    const router = useRouter();
    
    const color = router.asPath === props.href ? '#fff' : '#999591';
    
    return (
        <span style={{color, padding: '1rem 0'}}>
            <Link
                _hover={{
                    textDecoration: 'none',
                    color: "#FFF"
                }}
                {...props}
            >
                {children}
            </Link>
        </span>
    )
};