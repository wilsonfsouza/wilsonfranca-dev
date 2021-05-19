import { Box } from "@chakra-ui/layout";

interface TransitionSectionProps {
    gradientDirection: "normal" | "upsidedown"
    isBellowHero?: boolean;
}

export function TransitionSection({ gradientDirection, isBellowHero = false }: TransitionSectionProps) {
    if (isBellowHero && gradientDirection === "normal") {
        return (
            <Box
                h={["4.875rem", "7.875rem", "10.875rem"]}
                w="100%"
                background="linear-gradient(180deg, rgba(17, 14, 17, 0.55) 11.98%, rgba(34, 30, 38, 0) 100%)"
            />
        );
    }

    if (!isBellowHero && gradientDirection === "upsidedown") {
        return (
            <Box
                h={["4.875rem", "7.875rem", "10.875rem"]}
                w="100%"
                background="linear-gradient(180deg, #110E11 11.98%, rgba(34, 30, 38, 0) 100%)"
                transform={`rotate(180deg)`}
            />
        );
    }

    return (
        <Box
            h={["4.875rem", "7.875rem", "10.875rem"]}
            w="100%"
            background="linear-gradient(180deg, #110E11 11.98%, rgba(34, 30, 38, 0) 100%)"
        />
    );
}