import Icon from "@chakra-ui/icon";
import { Stack, VStack } from "@chakra-ui/layout";
import { ReactNode } from "react";
import { IconBaseProps } from "react-icons";

interface ContactInfoItemProps {
    icon: React.ComponentType<IconBaseProps>;
    direction?: 'row' | 'column';
    children: ReactNode;
}

export function ContactInfoItem({ children, icon: CustomIcon, direction = 'row' }: ContactInfoItemProps) {
    return (
        <Stack direction={direction} alignItems="center" justifyContent="center" spacing="1.5rem">
            <Icon as={CustomIcon} fontSize="1.875rem" />
            <VStack alignItems="start" spacing="0">
                {children}
            </VStack>
        </Stack>
    );
}