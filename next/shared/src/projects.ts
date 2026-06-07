export interface Project {
  name: string;
  title: string;
  url: string;
  homepage?: string;
  description: string;
  languages: string[];
  stars: number;
}

export const projects: Project[] = [
  {
    name: "janitor",
    title: "Janitor",
    url: "https://github.com/sharunkumar/janitor",
    description:
      "A configurable program that automatically organises your downloads folder by rules you define.",
    languages: ["Rust"],
    stars: 7,
  },
  {
    name: "voyager",
    title: "Voyager",
    url: "https://github.com/sharunkumar/voyager",
    homepage: "https://vger.app",
    description:
      "A fork of aeharding/voyager, the beautiful mobile-first client for Lemmy, with a few custom changes.",
    languages: ["TypeScript", "Swift", "CSS"],
    stars: 2,
  },
  {
    name: "sharunkumar.github.io",
    title: "Portfolio",
    url: "https://github.com/sharunkumar/sharunkumar.github.io",
    homepage: "https://sharunkumar.com",
    description:
      "This very site \u2014 a content-driven portfolio generated from a single JSON resume.",
    languages: ["Astro", "TypeScript", "CSS"],
    stars: 2,
  },
  {
    name: "flyctl-bin",
    title: "flyctl-bin",
    url: "https://github.com/sharunkumar/flyctl-bin",
    homepage: "https://aur.archlinux.org/packages/flyctl-bin",
    description:
      "An Arch User Repository package providing prebuilt binaries for Fly.io's flyctl CLI.",
    languages: ["Shell"],
    stars: 0,
  },
  {
    name: "archlinux-docker-action",
    title: "Arch Linux Docker Action",
    url: "https://github.com/sharunkumar/archlinux-docker-action",
    description:
      "A reusable GitHub Action that runs your scripts inside an Arch Linux container in CI.",
    languages: ["Dockerfile", "Shell"],
    stars: 0,
  },
  {
    name: "AdventOfCode",
    title: "Advent of Code",
    url: "https://github.com/sharunkumar/AdventOfCode",
    description:
      "My ongoing solutions to the annual Advent of Code programming puzzles.",
    languages: ["TypeScript"],
    stars: 1,
  },
];

export function getProjects(): Project[] {
  return projects;
}
