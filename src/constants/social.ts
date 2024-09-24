import {
  BiLinkExternal,
  BiLogoGithub,
  BiLogoLinkedinSquare
} from "react-icons/bi";
import { FaDev, FaProductHunt } from "react-icons/fa";

export const socialLinks = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/Victor1890",
    icon: BiLogoGithub,
    status: "social",
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/victor-j-rosario-v/",
    icon: BiLogoLinkedinSquare,
    status: "social",
  },
  {
    id: 3,
    name: "Daily.dev",
    url: "https://app.daily.dev/victor1890",
    icon: BiLinkExternal,
    status: "social",
  },
  {
    id: 4,
    name: "dev.to",
    url: "https://dev.to/victor1890",
    icon: FaDev,
    status: "social",
  },
  {
    id: 5,
    name: "Producthunt",
    url: "https://www.producthunt.com/@victor1890",
    icon: FaProductHunt,
    status: "social",
  },
];
