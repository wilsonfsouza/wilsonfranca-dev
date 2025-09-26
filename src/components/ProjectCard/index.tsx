import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextLink from "next/link";

interface ProjectCardProps {
  href: string;
  imgSrc: string;
  layoutId: string;
}

export function ProjectCard({ href, imgSrc, layoutId }: ProjectCardProps) {
  return (
    <NextLink href={href}>
      <motion.div
        whileHover={{
          scale: 1.035,
        }}
        whileFocus={{
          scale: 1.035,
        }}
        transition={{ duration: 0.2 }}
        layoutId={layoutId}
      >
        <Box
          backgroundImage={`url(${imgSrc})`}
          backgroundPosition="bottom"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          width="100%"
          height={{ base: "10.75rem", sm: "23.75rem" }}
          borderRadius="0.625rem"
          cursor={"pointer"}
          tabIndex={0}
        />
      </motion.div>
    </NextLink>
  );
}
