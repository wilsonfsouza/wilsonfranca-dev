import { Wrap, WrapItem } from "@chakra-ui/react";
import { FadeInWhenVisible } from "../FadeInWhenVisible";
import { Section } from "../Section";
import { MiniCard } from "./MiniCard";
import { skillsRow1, skillsRow2, skillsRow3 } from "./utils/skills";

export const Skills = () => {
  const skills = [...skillsRow1, ...skillsRow2, ...skillsRow3];

  return (
    <Section title="Skills">
      <Wrap
        w="100%"
        gap={{ base: "1.25rem", sm: "1.875rem", md: "2.125rem" }}
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
};
