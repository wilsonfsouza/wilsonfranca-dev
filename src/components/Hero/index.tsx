import { Flex, Heading, VStack, Text, Box, HStack, IconButton, Divider, Link } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { CustomButton } from '../CustomButton';
import { ExternalLink } from '../ExternalLink';

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

                    <CustomButton>Check My Projects</CustomButton>

                </VStack>

                <HStack spacing={["1.5rem", "2.8125rem"]} w="100%" alignItems="center" justifyContent="center" pb="3.625rem">
                    <Divider orientation="horizontal" height="2px" minWidth="10px" flex="1" color="gray.500" />

                    <ExternalLink href="https://github.com/wilsonfsouza">
                        <FaGithub fontSize={36} />
                    </ExternalLink>

                    <ExternalLink href="https://www.linkedin.com/in/wilsonfsouza/?locale=en_US">
                        <FaLinkedin fontSize={36} />
                    </ExternalLink>
                </HStack>
            </VStack>


        </Flex>
    )
}