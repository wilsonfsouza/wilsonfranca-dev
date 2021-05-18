import { Box } from '@chakra-ui/layout';
import { motion } from 'framer-motion';
import NextLink from 'next/link';

interface ProjectCardProps {
    href: string;
    imgSrc: string;
    layoutId: string;
}

export function ProjectCard({ href, imgSrc, layoutId }: ProjectCardProps) {
    return (
        <NextLink href={href}>
            <Box
                as={motion.div}
                layoutId={layoutId}
                backgroundImage={`url(${imgSrc})`}
                backgroundPosition='bottom'
                backgroundSize='cover'
                backgroundRepeat='no-repeat'
                width='100%'
                height='23.75rem'
                borderRadius='0.625rem'
                cursor={'pointer'}
            />
        </NextLink>
    );
}