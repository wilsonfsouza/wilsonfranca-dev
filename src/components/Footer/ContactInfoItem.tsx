import { Stack, VStack, Icon } from "@chakra-ui/react";
import { ReactNode } from "react";
import { IconBaseProps } from "react-icons";

interface ContactInfoItemProps {
    icon: React.ComponentType<IconBaseProps>;
    children: ReactNode;
}

export function ContactInfoItem({ children, icon: CustomIcon }: ContactInfoItemProps) {
    return (
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center" justifyContent="center" spacing="1.5rem">
            <Icon as={CustomIcon} fontSize={{ base: "1.5rem", lg: "1.875rem" }} />
            <VStack alignItems="start" spacing="0">
                {children}
            </VStack>
        </Stack>
    );
}