import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface ProjectImageProps {
    layoutId: string;
    imageSrc: string;
}

export function ProjectImage({ layoutId, imageSrc }: ProjectImageProps) {
    return (
        <Box
            as={motion.div}
            layoutId={layoutId}
            backgroundImage={`url(${imageSrc})`}
            backgroundPosition='bottom'
            backgroundSize='cover'
            backgroundRepeat='no-repeat'
            width='100%'
            height={{ base: '15rem', sm: '20rem', md: '30rem', lg: '40rem' }}
            borderRadius='0.625rem'
        />
    );
}