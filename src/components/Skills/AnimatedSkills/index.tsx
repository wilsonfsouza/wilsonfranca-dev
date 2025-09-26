import { List } from "@chakra-ui/react";
import { MiniCard } from "../MiniCard";
import { ISkills } from "../utils/skills";

interface AnimatedSkillsProps {
  skills: ISkills;
  animation: string;
  isDuplicated?: boolean;
}

export const AnimatedSkills = ({
  animation,
  skills,
  isDuplicated = false,
}: AnimatedSkillsProps) => (
  <List.Root
    listStyleType="none"
    display="flex"
    alignItems={"center"}
    justifyContent={"center"}
    animation={animation}
    gridGap="1rem"
    aria-hidden={isDuplicated}
  >
    {skills.map((skill, index) => (
      <List.Item key={`${skill.title}-${index}`}>
        <MiniCard icon={skill.icon} title={skill.title} />
      </List.Item>
    ))}
  </List.Root>
);
