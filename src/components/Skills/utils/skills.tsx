import {
  SiAmazonaws,
  SiAzuredevops,
  SiDocker,
  SiFigma,
  SiGit,
  SiGithubactions,
  SiGooglecloud,
  SiJavascript,
  SiJest,
  SiMaterialUi,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiNextDotJs,
  SiNodeDotJs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiWebpack,
} from "react-icons/si";

export const skillsRow1 = [
  {
    icon: SiTypescript,
    title: "TypeScript",
  },
  {
    icon: SiJavascript,
    title: "JavaScript",
  },
  {
    icon: SiReact,
    title: "React",
  },
  {
    icon: SiNextDotJs,
    title: "Next.js",
  },
  {
    icon: SiNodeDotJs,
    title: "Node.js",
  },
  {
    icon: SiPython,
    title: "Python",
  },
  {
    icon: SiFigma,
    title: "Figma",
  },
  {
    icon: SiGit,
    title: "Git",
  },
];

export const skillsRow2 = [
  {
    icon: SiMongodb,
    title: "MongoDB",
  },
  {
    icon: SiPostgresql,
    title: "PostgreSQL",
  },
  {
    icon: SiSass,
    title: "SASS",
  },
  {
    icon: SiDocker,
    title: "Docker",
  },
  {
    icon: SiJest,
    title: "Jest",
  },
  {
    icon: SiTailwindcss,
    title: "Tailwind CSS",
  },
  {
    icon: SiTerraform,
    title: "Terraform",
  },
  {
    icon: SiRedux,
    title: "Redux",
  },
];

export const skillsRow3 = [
  {
    icon: SiWebpack,
    title: "Webpack",
  },
  {
    icon: SiGithubactions,
    title: "CI/CD",
  },
  {
    icon: SiAzuredevops,
    title: "Azure",
  },
  {
    icon: SiAmazonaws,
    title: "AWS",
  },
  {
    icon: SiGooglecloud,
    title: "GCP",
  },
  {
    icon: SiMaterialUi,
    title: "MUI",
  },
  {
    icon: SiMicrosoftsqlserver,
    title: "MS SQL",
  },
];

export type ISkills = typeof skillsRow3;
