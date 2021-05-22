import { Stack, HStack, Icon, StackProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ExternalLink } from "../ExternalLink";

interface SocialMediaBarProps extends StackProps {
    children: ReactNode;
}

export function SocialMediaBar({ children, ...rest }: SocialMediaBarProps) {
    return (
        <Stack direction="row" spacing={{ base: "1.5rem", lg: "2.8125rem" }} w="100%" alignItems="center" justifyContent="center" pb="3.625rem" {...rest}>
            {children}
            <HStack spacing="1.5rem" alignItems="center" justifyContent="space-between">
                <ExternalLink href="https://github.com/wilsonfsouza">
                    <Icon as={FaGithub} fontSize="2.25rem" title="Github" />
                </ExternalLink>

                <ExternalLink href="https://www.linkedin.com/in/wilsonfsouza/?locale=en_US">
                    <Icon as={FaLinkedin} fontSize="2.25rem" title="Linkedin" />
                </ExternalLink>
            </HStack>
        </Stack>
    );
}