import { Badge, Box, Card, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextLink from "next/link";

interface ProjectCardProps {
  href: string;
  imgSrc: string;
  layoutId: string;
  title: string;
  description: string;
  technologies: string[];
}

export function ProjectCard({
  href,
  imgSrc,
  layoutId,
  title,
  description,
  technologies,
}: ProjectCardProps) {
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
        style={{ height: "100%" }}
      >
        <Card.Root
          overflow="hidden"
          borderRadius="0.625rem"
          bgColor="gray.700"
          borderColor="gray.700"
          height={"100%"}
        >
          <Image
            src={imgSrc}
            aspectRatio={"golden"}
            alt="Green double couch with wooden legs"
            objectFit="cover"
            backgroundPosition={"revert"}
          />
          <Box
            bgImage={`linear-gradient(
            95.99deg,
            rgba(149, 62, 94, 0.7) 7.66%,
            rgba(193, 71, 108, 0.7) 98.16%
          )`}
            w="full"
            h="2"
          />

          <Box
            padding="1.5rem"
            display={"flex"}
            flexGrow={1}
            flexDirection={"column"}
          >
            <Card.Body gap={{ base: "1rem", lg: "1.5rem" }}>
              <Card.Title
                color="white"
                fontWeight="medium"
                fontSize={{ base: "1rem", lg: "1.125rem" }}
                lineHeight="100%"
                letterSpacing="0.05em"
                textTransform="uppercase"
              >
                {title}
              </Card.Title>
              <Card.Description
                color="white"
                fontWeight="light"
                fontSize={{ base: "0.875rem", lg: "1rem" }}
                lineHeight="140%"
                letterSpacing="0.04em"
              >
                {description}
              </Card.Description>
            </Card.Body>

            {technologies && technologies.length > 0 && (
              <Card.Footer gap="3" flexWrap="wrap" mt={"auto"}>
                {technologies.map((tech) => (
                  <Badge
                    key={tech}
                    size="lg"
                    variant="surface"
                    colorPalette={"pink"}
                    bgColor={"pink.900"}
                    color={"pink.100"}
                  >
                    {tech}
                  </Badge>
                ))}
              </Card.Footer>
            )}
          </Box>
        </Card.Root>

        {/* <VStack
          bg="gray.100"
          borderRadius="0.625rem"
          overflow="hidden"
          border="1px solid"
          borderColor="gray.200"
          _dark={{
            bg: "gray.700",
            borderColor: "gray.600",
          }}
          gap={4}
          align="start"
          cursor={"pointer"}
          tabIndex={0}
        >
          <Box
            backgroundImage={`url(${imgSrc})`}
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            width="100%"
            height={{ base: "10.75rem", sm: "13.75rem" }}
          />
          <VStack p={4} align="start" gap={2}>
            <Text as="h3" fontSize="xl" fontWeight="bold">
              {title}
            </Text>
            <Text fontSize="md">{description}</Text>

            <HStack gap={2} wrap="wrap">
              {technologies.map((tech) => (
                <Tag.Root
                  key={tech}
                  size="sm"
                  variant="solid"
                  colorPalette="gray"
                >
                  <Tag.Label>{tech}</Tag.Label>
                </Tag.Root>
              ))}
            </HStack>
          </VStack>
        </VStack> */}
      </motion.div>
    </NextLink>
  );
}
