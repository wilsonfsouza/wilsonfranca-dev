import { Button, ButtonProps } from "@chakra-ui/button";
import { ReactNode } from "react";
import { FaTruckMonster } from "react-icons/fa";

interface CustomButtonProps extends ButtonProps {
    children: ReactNode;
    isPrimary?: boolean;
}

export function CustomButton({ children, isPrimary = true, ...rest }: CustomButtonProps) {
    if (!isPrimary) {
        return (
            <Button
                variant="unstyled"
                bg="#999591"
                _hover={{ filter: 'brightness(0.95)' }}
                w={["12.5rem", "15.625rem"]}
                h="3.125rem"
                fontSize="1rem"
                fontWeight="medium"
                {...rest}
            >
                {children}
            </Button>
        );
    }
    return (
        <Button
            variant="unstyled"
            bg="pink.600"
            _hover={{ filter: 'brightness(0.95)' }}
            w={["12.5rem", "15.625rem"]}
            h="3.125rem"
            fontSize="1rem"
            fontWeight="medium"
            {...rest}
        >
            {children}
        </Button>
    );
}