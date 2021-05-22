import { Box } from '@chakra-ui/react';
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
                height={{ base: '10.75rem', sm: '23.75rem' }}
                borderRadius='0.625rem'
                cursor={'pointer'}
                transition="transform .2s"
                _hover={{
                    transform: 'scale(1.035)'
                }}
                _focus={{
                    transform: 'scale(1.035)'
                }}
                tabIndex={0}
            />
        </NextLink>
    );
}