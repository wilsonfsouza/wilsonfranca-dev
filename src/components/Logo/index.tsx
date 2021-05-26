import { Image } from "@chakra-ui/react";

interface LogoProps {
    isClickable?: boolean;
    onClickFunct?: () => void;
}

export function Logo({ onClickFunct, isClickable = false }: LogoProps) {
    if (isClickable) {
        return (
            <Image h="auto" w={{ base: "9.9375rem", sm: "11.375rem", md: "12.8125rem" }} src="/logo-full.svg" fallbackSrc="/logo-full.svg" alt="wilfranca" onClick={onClickFunct} style={{ cursor: 'pointer' }} />
        );
    }
    return (
        <Image h="auto" w={{ base: "9.9375rem", sm: "11.375rem", md: "12.8125rem" }} src="/logo-full.svg" fallbackSrc="/logo-full.svg" alt="wilfranca" />
    );
}