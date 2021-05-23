import { Stack, VStack, Icon, StackProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { IconBaseProps } from "react-icons";

interface ContactInfoItemProps extends StackProps {
    icon: React.ComponentType<IconBaseProps>;
    children: ReactNode;
}

export function ContactInfoItem({ children, icon: CustomIcon, ...rest }: ContactInfoItemProps) {
    return (
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center" justifyContent="center" spacing="1.5rem" {...rest}>
            <Icon as={CustomIcon} fontSize={{ base: "1.5rem", lg: "1.875rem" }} />
            <VStack alignItems="start" spacing="0">
                {children}
            </VStack>
        </Stack>
    );
}