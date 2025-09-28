import {
  Badge,
  Box,
  Flex,
  Heading,
  HStack,
  Separator,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { CustomButton } from "../CustomButton";
import { SocialMediaBar } from "../SocialMediaBar";

export function Hero() {
  const router = useRouter();

  const redirectToProjects = useCallback(() => {
    router.push("/projects");
  }, [router]);

  return (
    <Flex
      as="section"
      px="2.6875rem"
      w="100%"
      h={`calc(100vh - 9rem)`}
      justifyContent="flex-start"
      alignItems="center"
      bgImage="url('/hero-min.png') "
      backgroundBlendMode="screen"
      backgroundSize="cover"
      backgroundPosition="center"
      bgRepeat="no-repeat"
      position="relative"
      _before={{
        content: `""`,
        position: "absolute",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        background:
          "linear-gradient(180deg, {colors.gray.900} 0%, rgba(34, 30, 38, 0) 100%)",
      }}
    >
      <Flex zIndex="1" h="100%" w="100%" mx="auto" maxWidth={1480}>
        <VStack flex="1" alignItems={{ base: "center", md: "start" }} h="100%">
          <VStack
            gap="10"
            m="auto 0"
            alignItems={{ base: "center", md: "start" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <VStack
              gap="2"
              m="auto 0"
              alignItems={{ base: "center", md: "start" }}
              textAlign={{ base: "center", md: "left" }}
            >
              <HStack
                flexWrap="wrap"
                justifyContent={{ base: "center", md: "start" }}
              >
                <Badge
                  size={{ base: "md", md: "lg" }}
                  variant="outline"
                  colorPalette={"gray"}
                  color={"white"}
                >
                  Full Stack Engineer
                </Badge>
                <Badge
                  size={{ base: "md", md: "lg" }}
                  variant="outline"
                  colorPalette={"gray"}
                  color={"white"}
                >
                  Frontend Specialist
                </Badge>
              </HStack>

              <Heading
                fontWeight="bold"
                fontSize={{ base: "2.5rem", sm: "3rem", md: "4.5rem" }}
                lineHeight={{ base: "1.33", md: "1.2" }}
              >
                Think
                <Box as="span" color="pink.600">
                  .{" "}
                </Box>
                Plan
                <Box as="span" color="pink.600">
                  .{" "}
                </Box>
                Innovate
                <Box as="span" color="pink.600">
                  .
                </Box>
              </Heading>

              <Text
                fontWeight="light"
                fontSize={{ base: "1.25rem", sm: "1.75rem", md: "2.25rem" }}
                maxWidth={{
                  base: "23.875rem",
                  sm: "24.875rem",
                  md: "46rem",
                }}
                color="white"
              >
                I help you to create experiences that{" "}
                <Box as="span" color="pink.600">
                  maximize business value
                </Box>
                , just like I did with Northwell Health, FieldRoutes, and more.
              </Text>
            </VStack>
            <CustomButton onClick={redirectToProjects}>
              See my projects
            </CustomButton>
          </VStack>

          <SocialMediaBar>
            <Separator
              orientation="horizontal"
              height="2px"
              minWidth="10px"
              flex="1"
              color="gray.500"
            />
          </SocialMediaBar>
        </VStack>
      </Flex>
    </Flex>
  );
}
