import { useBreakpointValue } from "@chakra-ui/react";
import NextImage from "next/image";

interface LogoProps {
    isClickable?: boolean;
    onClickFunct?: () => void;
}

export function Logo({ onClickFunct, isClickable = false }: LogoProps) {
    const isMobile = useBreakpointValue({
        base: true,
        md: false
    });

    if (isClickable) {
        return (
            <>
                {isMobile ? (
                    <NextImage height={30} width={159} src="/logo-full.svg" alt="wilfranca" objectFit="contain" onClick={onClickFunct} css={{ cursor: 'pointer' }} />
                ) : (
                    <NextImage height={39} width={205} src="/logo-full.svg" alt="wilfranca" objectFit="contain" onClick={onClickFunct} css={{ cursor: 'pointer' }} />
                )}
            </>
        );
    }
    return (
        <>
            {isMobile ? (
                <NextImage height={30} width={159} src="/logo-full.svg" alt="wilfranca" objectFit="contain" />
            ) : (
                <NextImage height={39} width={205} src="/logo-full.svg" alt="wilfranca" objectFit="contain" />
            )}
        </>
    );
}