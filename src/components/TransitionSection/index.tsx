import { Box } from "@chakra-ui/react";

interface TransitionSectionProps {
    gradientDirection: "normal" | "upsidedown"
    isBellowHero?: boolean;
}

export function TransitionSection({ gradientDirection, isBellowHero = false }: TransitionSectionProps) {
    if (isBellowHero && gradientDirection === "normal") {
        return (
            <Box
                h={{ base: "4.875rem", sm: "7.875rem", md: "10.875rem" }}
                w="100%"
                background="linear-gradient(180deg, rgba(17, 14, 17, 0.55) 11.98%, rgba(34, 30, 38, 0) 100%)"
            />
        );
    }

    if (!isBellowHero && gradientDirection === "upsidedown") {
        return (
            <Box
                h={{ base: "4.875rem", sm: "7.875rem", md: "10.875rem" }}
                w="100%"
                background="linear-gradient(180deg, #110E11 11.98%, rgba(34, 30, 38, 0) 100%)"
                transform={`rotate(180deg)`}
            />
        );
    }

    return (
        <Box
            h={{ base: "4.875rem", sm: "7.875rem", md: "10.875rem" }}
            w="100%"
            background="linear-gradient(180deg, #110E11 11.98%, rgba(34, 30, 38, 0) 100%)"
        />
    );
}