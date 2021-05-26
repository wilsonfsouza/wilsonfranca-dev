import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface CustomButtonProps extends ButtonProps {
    children: ReactNode;
    isPrimary?: boolean;
}

export function CustomButton({ children, isPrimary = true, ...rest }: CustomButtonProps) {
    if (!isPrimary) {
        return (
            <Button
                variant="unstyled"
                bg="#99959185"
                color="white"
                _hover={{ filter: 'brightness(0.95)' }}
                w={{ base: "12.5rem", lg: "15.625rem" }}
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
            color="white"
            _hover={{ filter: 'brightness(0.95)' }}
            w={{ base: "12.5rem", lg: "15.625rem" }}
            h="3.125rem"
            fontSize="1rem"
            fontWeight="medium"
            {...rest}
        >
            {children}
        </Button>
    );
}