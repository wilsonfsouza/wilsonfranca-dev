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
                    <NextImage height={30} width={159} src="/logo-full.svg" alt="wilfranca" onClick={onClickFunct} style={{ cursor: 'pointer', objectFit: 'contain' }} priority />
                ) : (
                    <NextImage height={39} width={205} src="/logo-full.svg" alt="wilfranca" onClick={onClickFunct} style={{ cursor: 'pointer', objectFit: 'contain' }} priority />
                )}
            </>
        );
    }
    return (
        <>
            {isMobile ? (
                <NextImage height={30} width={159} src="/logo-full.svg" alt="wilfranca" style={{ objectFit: 'contain' }} priority />
            ) : (
                <NextImage height={39} width={205} src="/logo-full.svg" alt="wilfranca" style={{ objectFit: 'contain' }} priority />
            )}
        </>
    );
}