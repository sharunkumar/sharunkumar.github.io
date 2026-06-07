import type { IconType } from "react-icons";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaThreads,
  FaXTwitter,
} from "react-icons/fa6";
import { SiBluesky } from "react-icons/si";
import { basics } from "./cv";

const NETWORK_ICONS: Record<string, IconType> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
  X: FaXTwitter,
  BlueSky: SiBluesky,
  Instagram: FaInstagram,
  Threads: FaThreads,
};

export interface Social {
  network: string;
  username: string;
  url: string;
  Icon: IconType;
}

export const socials: Social[] = basics.profiles.map((profile) => ({
  network: profile.network,
  username: profile.username,
  url: profile.url,
  Icon: NETWORK_ICONS[profile.network] ?? FaGithub,
}));

export const email = basics.email;
export const phone = basics.phone;

export const githubUsername =
  basics.profiles.find((profile) => profile.network === "GitHub")?.username ??
  "sharunkumar";

export function socialByNetwork(network: string): Social | undefined {
  return socials.find((social) => social.network === network);
}
