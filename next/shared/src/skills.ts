import type { IconType } from "react-icons";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMsqlServer } from "react-icons/di";
import {
  FaCss3,
  FaDocker,
  FaFigma,
  FaGithub,
  FaGitlab,
  FaGolang,
  FaHtml5,
  FaJava,
  FaJenkins,
  FaNodeJs,
  FaPython,
  FaReact,
  FaRust,
  FaSass,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiGnubash,
  SiMongodb,
  SiNextdotjs,
  SiReactrouter,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { TbBrandCSharp, TbBrandPowershell } from "react-icons/tb";

export type SkillGroup = "Languages" | "Frameworks" | "Data" | "Tooling";

export interface Skill {
  name: string;
  Icon: IconType;
  group: SkillGroup;
}

export const skills: Skill[] = [
  { name: "TypeScript", Icon: SiTypescript, group: "Languages" },
  { name: "JavaScript", Icon: IoLogoJavascript, group: "Languages" },
  { name: "Golang", Icon: FaGolang, group: "Languages" },
  { name: "C#", Icon: TbBrandCSharp, group: "Languages" },
  { name: "Java", Icon: FaJava, group: "Languages" },
  { name: "Rust", Icon: FaRust, group: "Languages" },
  { name: "Python", Icon: FaPython, group: "Languages" },
  { name: "React", Icon: FaReact, group: "Frameworks" },
  { name: "Next.js", Icon: SiNextdotjs, group: "Frameworks" },
  { name: "Node.js", Icon: FaNodeJs, group: "Frameworks" },
  { name: "React Router", Icon: SiReactrouter, group: "Frameworks" },
  { name: "Tailwind", Icon: RiTailwindCssFill, group: "Frameworks" },
  { name: "HTML5", Icon: FaHtml5, group: "Frameworks" },
  { name: "CSS3", Icon: FaCss3, group: "Frameworks" },
  { name: "SASS", Icon: FaSass, group: "Frameworks" },
  { name: "SQL Server", Icon: DiMsqlServer, group: "Data" },
  { name: "PostgreSQL", Icon: BiLogoPostgresql, group: "Data" },
  { name: "MongoDB", Icon: SiMongodb, group: "Data" },
  { name: "Docker", Icon: FaDocker, group: "Tooling" },
  { name: "GitHub", Icon: FaGithub, group: "Tooling" },
  { name: "GitLab", Icon: FaGitlab, group: "Tooling" },
  { name: "Jenkins", Icon: FaJenkins, group: "Tooling" },
  { name: "Vite", Icon: SiVite, group: "Tooling" },
  { name: "Bash", Icon: SiGnubash, group: "Tooling" },
  { name: "PowerShell", Icon: TbBrandPowershell, group: "Tooling" },
  { name: "Figma", Icon: FaFigma, group: "Tooling" },
];

export const skillNames: string[] = skills.map((skill) => skill.name);

export const skillGroups: SkillGroup[] = [
  "Languages",
  "Frameworks",
  "Data",
  "Tooling",
];

export function skillsByGroup(group: SkillGroup): Skill[] {
  return skills.filter((skill) => skill.group === group);
}
