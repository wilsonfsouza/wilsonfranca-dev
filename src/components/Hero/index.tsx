import { Button, Flex, Heading, VStack, Text, Box, HStack, IconButton, Divider } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function Hero() {
    return (
        <Flex
            as="section"
            h={`calc(100vh - 9rem)`}
            w="100%"
            bgImage="url('/hero-min.png') "
            backgroundBlendMode="screen"
            backgroundSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            position="relative"
            _before={{
                content: '""',
                position: 'absolute',
                top: "0",
                right: "0",
                bottom: "0",
                left: "0",
                backgroundImage: 'linear-gradient(180deg, #110E11 0%, rgba(34, 30, 38, 0) 100%)',
            }}
            justifyContent="flex-start"
            alignItems="center"
            px="2.6875rem"
        >
            <VStack zIndex="1" flex="1" mx="auto" maxWidth={1480} alignItems="start" h="100%" justifyContent="space-between">
                <VStack
                    spacing="10"
                    alignItems={["center", "start"]}
                    m="auto 0"
                    textAlign={["center", "left"]}
                >
                    <VStack
                        spacing="2"
                        alignItems={["center", "start"]}
                        m="auto 0"
                        textAlign={["center", "left"]}>
                        <Heading fontWeight="bold" fontSize={["2.5rem", "3rem", "4.5rem"]}>
                            Think<Box as="span" color="pink.600">. </Box>
                            Plan<Box as="span" color="pink.600">. </Box>
                            Innovate<Box as="span" color="pink.600">.</Box>
                        </Heading>
                        <Text fontWeight="light" fontSize={["1.25rem", "1.75rem", "2.25rem"]} maxWidth={["15.875rem", "24.875rem", "31.875rem"]}>I’m a Sofware Developer based in Redding, CA</Text>
                    </VStack>

                    <Button
                        variant="unstyled"
                        bg="pink.600"
                        _hover={{ filter: 'brightness(0.95)' }}
                        w={["12.5rem", "15.625rem"]}
                        h="3.125rem"
                        fontSize="1rem"
                        fontWeight="medium"
                    >Check My Projects</Button>
                </VStack>

                <HStack spacing={["1.5rem", "2.8125rem"]} w="100%" alignItems="center" justifyContent="center" pb="3.625rem">
                    <Divider orientation="horizontal" height="2px" minWidth="10px" flex="1" color="gray.500" />

                    <IconButton aria-label="GitHub" as={FaGithub} variant="unstyled" color="gray.500" fontSize={36} />
                    <IconButton aria-label="LinkedIn" as={FaLinkedin} variant="unstyled" color="gray.500" fontSize={36} />
                </HStack>
            </VStack>


        </Flex>
    )
}