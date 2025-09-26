import { Box } from "@chakra-ui/react";

interface ProjectImageProps {
  imageSrc: string;
}

export function ProjectImage({ imageSrc }: ProjectImageProps) {
  return (
    <Box
      backgroundImage={`url(${imageSrc})`}
      backgroundPosition="bottom"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      width="100%"
      height={{ base: "15rem", sm: "20rem", md: "30rem", lg: "40rem" }}
      borderRadius="0.625rem"
    />
  );
}
