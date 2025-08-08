import { List, ListItem } from "@chakra-ui/react";
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
  <List
    listStyleType="none"
    display="flex"
    alignItems={"center"}
    justifyContent={"center"}
    animation={animation}
    gridGap="1rem"
    aria-hidden={isDuplicated}
  >
    {skills.map((skill, index) => (
      <ListItem key={`${skill.title}-${index}`}>
        <MiniCard icon={skill.icon} title={skill.title} />
      </ListItem>
    ))}
  </List>
);
