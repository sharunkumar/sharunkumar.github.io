export interface Version {
  id: string;
  index: number;
  name: string;
  tagline: string;
  aesthetic: string;
  port: number;
  url: string;
  accent: string;
}

export const versions: Version[] = [
  {
    id: "aurora",
    index: 1,
    name: "Aurora",
    tagline: "Cinematic dark with a spotlight that follows you",
    aesthetic: "Cinematic / Glassmorphism",
    port: 4321,
    url: "http://localhost:4321",
    accent: "#ff4040",
  },
  {
    id: "terminal",
    index: 2,
    name: "Terminal",
    tagline: "A bootable, typeable developer console",
    aesthetic: "Terminal / TUI",
    port: 4322,
    url: "http://localhost:4322",
    accent: "#ffb000",
  },
  {
    id: "editorial",
    index: 3,
    name: "Editorial",
    tagline: "Swiss print magazine, set in ink",
    aesthetic: "Editorial / Print",
    port: 4323,
    url: "http://localhost:4323",
    accent: "#f15a36",
  },
  {
    id: "monolith",
    index: 4,
    name: "Monolith",
    tagline: "Loud, raw, unapologetic neo-brutalism",
    aesthetic: "Neo-brutalist",
    port: 4324,
    url: "http://localhost:4324",
    accent: "#2563eb",
  },
];

export function versionById(id: string): Version | undefined {
  return versions.find((version) => version.id === id);
}
