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
import Vite from "@/icons/Vite.astro";
import ReactRouter from "@/icons/ReactRouter.astro";

export const skillsCards = [
  {
    title: "HTML",
    icon: Html,
  },
  {
    title: "CSS",
    icon: Css,
  },
  {
    title: "JavaScript",
    icon: Js,
  },
  {
    title: "Tailwind",
    icon: Tailwind,
  },
  {
    title: "React",
    icon: React,
  },
  {
    title: "TypeScript",
    icon: Ts,
  },
  {
    title: "Next.js",
    icon: Next,
  },
  {
    title: "Astro",
    icon: Astro,
  },
  {
    title: "Redux",
    icon: Redux,
  },
  {
    title: "Zustand",
    icon: Zustand,
  },
  {
    title: "Vite",
    icon: Vite,
  },
  {
    title: "React Router",
    icon: ReactRouter,
  },
  {
    title: "Git",
    icon: Git,
  },
  {
    title: "GitHub",
    icon: GitHub,
  },
] as const;
