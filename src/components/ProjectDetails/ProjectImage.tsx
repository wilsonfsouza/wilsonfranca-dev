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
            backgroundPosition='center'
            backgroundSize='cover'
            backgroundRepeat='no-repeat'
            width='100%'
            height={['15rem', '20rem', '30rem']}
            borderRadius='0.625rem'
        />
    );
}