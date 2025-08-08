import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface AnimatedSkillsRowProps {
  children: ReactNode;
}

export const AnimatedSkillsRow = ({ children }: AnimatedSkillsRowProps) => {
  return (
    <Box
      minWidth="100%"
      overflow="hidden"
      paddingBlock="0.5rem"
      display="flex"
      flexDirection="row"
      gridGap="1rem"
      alignItems="center"
      justifyContent="space-between"
      userSelect="none"
      _hover={{
        ul: {
          animationPlayState: "paused",
        },
      }}
    >
      {children}
    </Box>
  );
};
