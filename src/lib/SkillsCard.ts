import { React } from "@/icons/React";
import { Next } from "@/icons/Next";
import { Astro } from "@/icons/Astro";
import { Tailwind } from "@/icons/Tailwind";
import { Ts } from "@/icons/Ts";
import { Js } from "@/icons/Js";
import { Css } from "@/icons/Css";
import { Html } from "@/icons/Html";
import { Redux } from "@/icons/Redux";
import { Bear } from "@/icons/Bear";
import { Git } from "@/icons/Git";
import { Github } from "@/icons/Github";
import { Vite } from "@/icons/Vite";
import { Reactrouter } from "@/icons/Reactrouter";

export const skillsCards = [
  {
    title: "HTML",
    icon: Html({ className: "h-10 w-10" }),
  },
  {
    title: "CSS",
    icon: Css({ className: "h-10 w-10 text-purple-900" }),
  },
  {
    title: "JavaScript",
    icon: Js({ className: "h-10 w-10" }),
  },
  {
    title: "Tailwind",
    icon: Tailwind({ className: "h-10 w-10" }),
  },
  {
    title: "React",
    icon: React({ className: "h-10 w-10" }),
  },
  {
    title: "TypeScript",
    icon: Ts({ className: "h-10 w-10" }),
  },
  {
    title: "Next.js",
    icon: Next({ className: "h-10 w-10" }),
  },
  {
    title: "Astro",
    icon: Astro({ className: "h-10 w-10" }),
  },
  {
    title: "Redux",
    icon: Redux({ className: "h-10 w-10" }),
  },
  {
    title: "Zustand",
    icon: Bear({ className: "h-10 w-10" }),
  },
  {
    title: "Vite",
    icon: Vite({ className: "h-10 w-10" }),
  },
  {
    title: "React Router",
    icon: Reactrouter({ className: "h-10 w-10" }),
  },
  {
    title: "Git",
    icon: Git({ className: "h-10 w-10" }),
  },
  {
    title: "GitHub",
    icon: Github({ className: "h-10 w-10" }),
  },
] as const;
