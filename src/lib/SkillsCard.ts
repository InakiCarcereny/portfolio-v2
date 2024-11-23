import React from "@/icons/React.astro";
import Next from "@/icons/Next.astro";
import Astro from "@/icons/AstroIcon.astro";
import Tailwind from "@/icons/Tailwind.astro";
import Ts from "@/icons/Ts.astro";
import Js from "@/icons/Js.astro";
import Css from "@/icons/Css.astro";
import Html from "@/icons/Html.astro";
import Redux from "@/icons/Redux.astro";
import Zustand from "@/icons/Zustand.astro";
import Git from "@/icons/Git.astro";
import GitHub from "@/icons/GitHub.astro";

export const skillsCards = [
  {
    title: "React",
    icon: React,
    color: "text-cyan-500",
  },
  {
    title: "Next.js",
    icon: Next,
    color: "text-white",
  },
  {
    title: "Astro",
    icon: Astro,
    color: "text-orange-500",
  },
  {
    title: "Tailwind",
    icon: Tailwind,
    color: "text-cyan-500",
  },
  {
    title: "TypeScript",
    icon: Ts,
    color: "text-blue-500",
  },
  {
    title: "JavaScript",
    icon: Js,
    color: "text-yellow-500",
  },
  {
    title: "CSS",
    icon: Css,
    color: "text-purple-500",
  },
  {
    title: "HTML",
    icon: Html,
    color: "text-orange-500",
  },
  {
    title: "Redux",
    icon: Redux,
    color: "text-violet-500",
  },
  {
    title: "Zustand",
    icon: Zustand,
    color: "text-orange-300",
  },
  {
    title: "Git",
    icon: Git,
    color: "text-red-400",
  },
  {
    title: "GitHub",
    icon: GitHub,
    color: "text-white",
  },
] as const;
