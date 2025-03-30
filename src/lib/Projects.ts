import AstroIcon from '@/icons/AstroIcon.astro';
import Express from '@/icons/Express.astro';
import Js from '@/icons/Js.astro';
import Mongo from '@/icons/Mongo.astro';
import Next from '@/icons/Next.astro';
import React from '@/icons/React.astro';
import Redux from '@/icons/Redux.astro';
import Tailwind from '@/icons/Tailwind.astro';
import Ts from '@/icons/Ts.astro';
import Zustand from '@/icons/Zustand.astro';

const TAGS = {
  REACT: {
    name: 'React',
    bg: 'bg-blue-400',
    icon: React,
  },
  NEXTJS: {
    name: 'Next.js',
    bg: 'bg-zinc-800',
    icon: Next,
  },
  ASTRO: {
    name: 'Astro',
    bg: 'bg-orange-500',
    icon: AstroIcon,
  },
  TAILWIND: {
    name: 'Tailwind',
    bg: 'bg-cyan-800',
    icon: Tailwind,
  },
  TS: {
    name: 'TypeScript',
    bg: 'bg-blue-600',
    icon: Ts,
  },
  REDUX: {
    name: 'Redux',
    bg: 'bg-violet-400',
    icon: Redux,
  },
  ZUSTAND: {
    name: 'Zustand',
    bg: 'bg-orange-300',
    icon: Zustand,
  },
  MONGO: {
    name: 'MongoDB',
    bg: 'bg-green-900',
    icon: Mongo,
  },
  EXPRESS: {
    name: 'Express',
    bg: 'bg-zinc-800',
    icon: Express,
  },
  JS: {
    name: 'JavaScript',
    bg: 'bg-orange-300',
    icon: Js,
  },
};

export const MyProjects = [
  {
    name: 'Discord clone',
    description:
      'Discord Clone TS is a web application that replicates the core features of Discord, such as server creation, channels, and real-time messaging, built with TypeScript and modern technologies.',
    image: '/assets/discord-clone.webp',
    code: 'https://github.com/InakiCarcereny/discord-clone-ts',
    tags: [
      TAGS.REACT,
      TAGS.NEXTJS,
      TAGS.TAILWIND,
      TAGS.TS,
      TAGS.MONGO,
      TAGS.EXPRESS,
    ],
  },
  {
    name: 'Shop cart',
    description:
      'Shop Store Zustand is a demo application showcasing a modern approach to building responsive and efficient e-commerce frontends.',
    image: '/assets/shop-cart.webp',
    code: 'https://github.com/InakiCarcereny/shop-store-zustand',
    tags: [TAGS.REACT, TAGS.NEXTJS, TAGS.TAILWIND, TAGS.ZUSTAND, TAGS.TS],
  },
  {
    name: 'Music player',
    description:
      'A full music aplication, you can create playlists, add songs to your favorites, meet the song of the day, search albums, see your recent songs, and obviusly play all of the songs.',
    image: '/assets/music-player.webp',
    code: 'https://github.com/InakiCarcereny/musicPlayer-app',
    tags: [TAGS.REACT, TAGS.NEXTJS, TAGS.TAILWIND, TAGS.REDUX, TAGS.JS],
  },
  {
    name: 'Dashboard',
    description:
      'Dashboard-TS is a project built with TypeScript that provides a modern and scalable solution for data management and interfaces. This repository features the implementation of an interactive dashboard, designed to be intuitive and highly customizable for business applications.',
    image: '/assets/dashboard.webp',
    code: 'https://github.com/InakiCarcereny/dashboard-ts',
    tags: [
      TAGS.REACT,
      TAGS.NEXTJS,
      TAGS.TAILWIND,
      TAGS.TS,
      TAGS.EXPRESS,
      TAGS.MONGO,
    ],
  },
];
