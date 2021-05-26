import { Flex, Heading, VStack, Text, Box, Divider } from '@chakra-ui/react';
import { CustomButton } from '../CustomButton';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { SocialMediaBar } from '../SocialMediaBar';
import { FadeInWhenVisible } from '../FadeInWhenVisible';

export function Hero() {
    const router = useRouter();

    const redirectToProjects = useCallback(() => {
        router.push('/projects');
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
                background: 'linear-gradient(180deg, #110E11 0%, rgba(34, 30, 38, 0) 100%)',
            }}
        >
            <Flex
                zIndex="1"
                h="100%"
                w="100%"
                mx="auto"
                maxWidth={1480}
            >
                <VStack
                    flex="1"
                    alignItems="start"
                    h="100%"
                >
                    <VStack
                        spacing="10"
                        m="auto 0"
                        alignItems={{ base: "center", md: "start" }}
                        textAlign={{ base: "center", md: "left" }}
                    >
                        <VStack
                            spacing="2"
                            m="auto 0"
                            alignItems={{ base: "center", md: "start" }}
                            textAlign={{ base: "center", md: "left" }}
                        >
                            <FadeInWhenVisible>
                                <Heading fontWeight="bold" fontSize={{ base: "2.5rem", sm: "3rem", md: "4.5rem" }}>
                                    Think<Box as="span" color="pink.600">. </Box>
                                    Plan<Box as="span" color="pink.600">. </Box>
                                    Innovate<Box as="span" color="pink.600">.</Box>
                                </Heading>
                            </FadeInWhenVisible>
                            <FadeInWhenVisible>
                                <Text
                                    fontWeight="light"
                                    fontSize={{ base: "1.25rem", sm: "1.75rem", md: "2.25rem" }}
                                    maxWidth={{ base: "15.875rem", sm: "24.875rem", md: "31.875rem" }}
                                >
                                    I’m a Sofware Developer and UI/UX enthusiast
                                </Text></FadeInWhenVisible>
                        </VStack>
                        <FadeInWhenVisible>
                            <CustomButton onClick={redirectToProjects}>See my projects</CustomButton>
                        </FadeInWhenVisible>
                    </VStack>

                    <SocialMediaBar>
                        <Divider orientation="horizontal" height="2px" minWidth="10px" flex="1" color="gray.500" />
                    </SocialMediaBar>
                </VStack>
            </Flex>
        </Flex >
    )
}