import LinkedIn from "@/icons/LinkedIn.astro";
import GitHub from "@/icons/GitHub.astro";
import X from "@/icons/X.astro";
import Instagram from "@/icons/Instagram.astro";

export const contactButtons = [
  {
    icon: LinkedIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/i%C3%B1aki-carcereny-77b555316/",
  },
  {
    icon: GitHub,
    label: "GitHub",
    href: "https://github.com/InakiCarcereny",
  },
  {
    icon: X,
    label: "X",
    href: "https://x.com/Inaki_Dev",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/inaki.carce/",
  },
] as const;
