import {
  Flex,
  keyframes,
  usePrefersReducedMotion,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { FadeInWhenVisible } from "../FadeInWhenVisible";
import { Section } from "../Section";
import { AnimatedSkills } from "./AnimatedSkills";
import { AnimatedSkillsRow } from "./AnimatedSkills/AnimatedSkillsRow";
import { MiniCard } from "./MiniCard";
import { skillsRow1, skillsRow2, skillsRow3 } from "./utils/skills";

const slideLeft = keyframes`
  to { transform: translateX(calc(-100% - 1rem)); }
`;

const slideRight = keyframes`
  from { transform: translateX(calc(-100% - 1rem)); }

`;

export const Skills = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    const skills = [...skillsRow1, ...skillsRow2, ...skillsRow3];

    return (
      <Section title="Skills">
        <Wrap
          w="100%"
          spacing={{ base: "1.25rem", sm: "1.875rem", md: "2.125rem" }}
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
        >
          {skills.map((skill) => (
            <WrapItem key={skill.title}>
              <FadeInWhenVisible>
                <MiniCard icon={skill.icon} title={skill.title} />
              </FadeInWhenVisible>
            </WrapItem>
          ))}
        </Wrap>
      </Section>
    );
  }

  const animationFirstRow = `${slideLeft} 30s linear infinite`;
  const animationSecondRow = `${slideRight} 30s linear infinite`;
  const animationThirdRow = `${slideLeft} 30s linear infinite`;

  return (
    <Section title="Skills">
      <Flex paddingBlock={"0.5rem"} flexDirection="column" overflow={"hidden"}>
        <FadeInWhenVisible>
          <AnimatedSkillsRow>
            <AnimatedSkills skills={skillsRow1} animation={animationFirstRow} />
            <AnimatedSkills
              skills={skillsRow1}
              animation={animationFirstRow}
              isDuplicated
            />
          </AnimatedSkillsRow>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <AnimatedSkillsRow>
            <AnimatedSkills
              skills={skillsRow2}
              animation={animationSecondRow}
            />
            <AnimatedSkills
              skills={skillsRow2}
              animation={animationSecondRow}
              isDuplicated
            />
          </AnimatedSkillsRow>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <AnimatedSkillsRow>
            <AnimatedSkills skills={skillsRow3} animation={animationThirdRow} />
            <AnimatedSkills
              skills={skillsRow3}
              animation={animationThirdRow}
              isDuplicated
            />
          </AnimatedSkillsRow>
        </FadeInWhenVisible>
      </Flex>
    </Section>
  );
};
