import { Button, ButtonProps } from "@chakra-ui/button";
import { ReactNode } from "react";

interface CustomButtonProps extends ButtonProps {
    children: ReactNode;
}

export function CustomButton({ children, ...rest }: CustomButtonProps) {
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