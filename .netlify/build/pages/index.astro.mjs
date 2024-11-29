import { c as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, b as createAstro, d as renderComponent, a as addAttribute, e as renderHead, f as renderSlot } from '../chunks/astro/server_CKFZCLmU.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                                 */
import { clsx } from 'clsx';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as React$1 from 'react';
import { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
export { renderers } from '../renderers.mjs';

const $$Astro$l = createAstro();
const $$Universe = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Universe;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"${spreadAttributes(props)}> <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M7.027 11.477a5 5 0 1 0 5.496-4.45a4.95 4.95 0 0 0-3.088.681"></path> <path d="M5.636 5.636a9 9 0 1 0 3.555-2.188"></path> <path d="M17 5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m-6 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m-3 4a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></path> </g> </svg>`;
}, "D:/Users/I\xF1aki/Desktop/Dev/portfolio-v2/src/icons/Universe.astro", void 0);

function React(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 128 128",
      ...props,
      children: /* @__PURE__ */ jsxs("g", { fill: "#61dafb", children: [
        /* @__PURE__ */ jsx("circle", { cx: 64, cy: 64, r: 11.4 }),
        /* @__PURE__ */ jsx("path", { d: "M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3c.6-2.4 1.1-4.8 1.5-7.1c2.1-13.2-.2-22.5-6.6-26.1c-1.9-1.1-4-1.6-6.4-1.6c-7 0-15.9 5.2-24.9 13.9c-9-8.7-17.9-13.9-24.9-13.9c-2.4 0-4.5.5-6.4 1.6c-6.4 3.7-8.7 13-6.6 26.1c.4 2.3.9 4.7 1.5 7.1c-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3c-.6 2.4-1.1 4.8-1.5 7.1c-2.1 13.2.2 22.5 6.6 26.1c1.9 1.1 4 1.6 6.4 1.6c7.1 0 16-5.2 24.9-13.9c9 8.7 17.9 13.9 24.9 13.9c2.4 0 4.5-.5 6.4-1.6c6.4-3.7 8.7-13 6.6-26.1c-.4-2.3-.9-4.7-1.5-7.1c2.4-.7 4.7-1.4 6.9-2.3c12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8M92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3c-.3 2.1-.8 4.3-1.4 6.6c-5.2-1.2-10.7-2-16.5-2.5c-3.4-4.8-6.9-9.1-10.4-13c7.4-7.3 14.9-12.3 21-12.3c1.3 0 2.5.3 3.5.9M81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6c-3.7.3-7.4.4-11.2.4c-3.9 0-7.6-.1-11.2-.4q-3.3-4.8-6-9.6c-1.9-3.3-3.7-6.7-5.3-10c1.6-3.3 3.4-6.7 5.3-10c1.8-3.2 3.9-6.4 6.1-9.6c3.7-.3 7.4-.4 11.2-.4c3.9 0 7.6.1 11.2.4q3.3 4.8 6 9.6c1.9 3.3 3.7 6.7 5.3 10c-1.7 3.3-3.4 6.6-5.3 10m8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3c-3.4.8-7 1.4-10.8 1.9c1.2-1.9 2.5-3.9 3.6-6c1.2-2.1 2.3-4.2 3.4-6.2M64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3c2.3.1 4.6.2 6.9.2s4.6-.1 6.9-.2c-2.2 2.9-4.5 5.7-6.9 8.3m-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9c1.1-3.3 2.3-6.8 3.8-10.3c1.1 2 2.2 4.1 3.4 6.1c1.2 2.2 2.4 4.1 3.6 6.1m-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3c3.4-.8 7-1.4 10.8-1.9c-1.2 1.9-2.5 3.9-3.6 6c-1.2 2.1-2.3 4.2-3.4 6.2M64 30.2c2.4 2.6 4.7 5.4 6.9 8.3c-2.3-.1-4.6-.2-6.9-.2s-4.6.1-6.9.2c2.2-2.9 4.5-5.7 6.9-8.3m22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9c-1.1 3.3-2.3 6.8-3.8 10.3c-1.1-2.1-2.2-4.2-3.4-6.2M31.7 35c-1.7-10.5-.3-17.9 3.8-20.3c1-.6 2.2-.9 3.5-.9c6 0 13.5 4.9 21 12.3c-3.5 3.8-7 8.2-10.4 13c-5.8.5-11.3 1.4-16.5 2.5c-.6-2.3-1-4.5-1.4-6.6M7 64c0-4.7 5.7-9.7 15.7-13.4c2-.8 4.2-1.5 6.4-2.1c1.6 5 3.6 10.3 6 15.6c-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64m28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3c.3-2.1.8-4.3 1.4-6.6c5.2 1.2 10.7 2 16.5 2.5c3.4 4.8 6.9 9.1 10.4 13c-7.4 7.3-14.9 12.3-21 12.3c-1.3 0-2.5-.3-3.5-.9M96.3 93c1.7 10.5.3 17.9-3.8 20.3c-1 .6-2.2.9-3.5.9c-6 0-13.5-4.9-21-12.3c3.5-3.8 7-8.2 10.4-13c5.8-.5 11.3-1.4 16.5-2.5c.6 2.3 1 4.5 1.4 6.6m9-15.6c-2 .8-4.2 1.5-6.4 2.1c-1.6-5-3.6-10.3-6-15.6c2.4-5.3 4.5-10.5 6-15.5c13.8 4 22.1 10 22.1 15.6c0 4.7-5.8 9.7-15.7 13.4" })
      ] })
    }
  );
}

function Next(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 256 256",
      ...props,
      children: [
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "logosNextjsIcon0",
              x1: "55.633%",
              x2: "83.228%",
              y1: "56.385%",
              y2: "96.08%",
              children: [
                /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#fff" }),
                /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#fff", stopOpacity: 0 })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "logosNextjsIcon1",
              x1: "50%",
              x2: "49.953%",
              y1: "0%",
              y2: "73.438%",
              children: [
                /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#fff" }),
                /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#fff", stopOpacity: 0 })
              ]
            }
          ),
          /* @__PURE__ */ jsx("circle", { id: "logosNextjsIcon2", cx: 128, cy: 128, r: 128 })
        ] }),
        /* @__PURE__ */ jsx("mask", { id: "logosNextjsIcon3", fill: "#fff", children: /* @__PURE__ */ jsx("use", { href: "#logosNextjsIcon2" }) }),
        /* @__PURE__ */ jsxs("g", { mask: "url(#logosNextjsIcon3)", children: [
          /* @__PURE__ */ jsx("circle", { cx: 128, cy: 128, r: 128 }),
          /* @__PURE__ */ jsx(
            "path",
            {
              fill: "url(#logosNextjsIcon0)",
              d: "M212.634 224.028L98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128 128 0 0 0 13.524-10.418"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              fill: "url(#logosNextjsIcon1)",
              d: "M163.556 76.8h17.067v102.4h-17.067z"
            }
          )
        ] })
      ]
    }
  );
}

function Astro(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 32 32",
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "url(#vscodeIconsFileTypeAstro0)",
            d: "M11.025 20.499c-.532 1.75-.154 4.184 1.105 5.331v-.042l.042-.112c.154-.741.756-1.203 1.526-1.175c.713.014 1.12.392 1.217 1.217c.042.308.042.616.056.938v.098c0 .7.196 1.371.588 1.959c.35.56.84.993 1.497 1.287l-.028-.056l-.028-.112c-.49-1.469-.14-2.49 1.147-3.358l.392-.266l.868-.573a4.25 4.25 0 0 0 1.791-3.037c.07-.532 0-1.05-.154-1.553l-.21.14c-1.945 1.035-4.17 1.4-6.325.98c-1.301-.197-2.56-.56-3.498-1.652z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#fff",
            d: "M4.925 20.191s3.736-1.82 7.486-1.82l2.84-8.759c.098-.42.406-.7.756-.7s.644.28.756.714l2.826 8.746c4.45 0 7.487 1.82 7.487 1.82L20.709 2.84c-.168-.518-.49-.84-.896-.84h-7.612c-.406 0-.7.322-.896.84z"
          }
        ),
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs(
          "linearGradient",
          {
            id: "vscodeIconsFileTypeAstro0",
            x1: 8.19,
            x2: 16.91,
            y1: 23,
            y2: 18.89,
            gradientTransform: "translate(-.673 -2.198)scale(1.3993)",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ jsx("stop", { offset: 0, stopColor: "#d83333" }),
              /* @__PURE__ */ jsx("stop", { offset: 1, stopColor: "#f041ff" })
            ]
          }
        ) })
      ]
    }
  );
}

function Tailwind(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 32 32",
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "#44a8b3",
          d: "M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1m-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1"
        }
      )
    }
  );
}

function Ts(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 128 128",
      ...props,
      children: [
        /* @__PURE__ */ jsx("path", { fill: "#fff", d: "M22.67 47h99.67v73.67H22.67z" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#007acc",
            d: "M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 0 1 7.82 4.5a20.6 20.6 0 0 1 3 4c0 .16-5.4 3.81-8.69 5.85c-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 0 0-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.6 4.6 0 0 0 .54 2.34c.83 1.73 2.38 2.76 7.24 4.86c8.95 3.85 12.78 6.39 15.16 10c2.66 4 3.25 10.46 1.45 15.24c-2 5.2-6.9 8.73-13.83 9.9a38.3 38.3 0 0 1-9.52-.1a23 23 0 0 1-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9 9 0 0 1 1.15-.73L82 101l3.59-2.08l.75 1.11a16.8 16.8 0 0 0 4.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 0 0 .69-6.92c-1-1.39-3-2.56-8.59-5c-6.45-2.78-9.23-4.5-11.77-7.24a16.5 16.5 0 0 1-3.43-6.25a25 25 0 0 1-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.7 31.7 0 0 1 9.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49 49 0 0 1 .12-5.17C29.08 59 39 59 51 59h21.83z"
          }
        )
      ]
    }
  );
}

function Js(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 32 32",
      ...props,
      children: [
        /* @__PURE__ */ jsx("path", { fill: "#f5de19", d: "M2 2h28v28H2z" }),
        /* @__PURE__ */ jsx("path", { d: "M20.809 23.875a2.87 2.87 0 0 0 2.6 1.6c1.09 0 1.787-.545 1.787-1.3c0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964c0-1.973 1.5-3.476 3.853-3.476a3.89 3.89 0 0 1 3.742 2.107L25 18.128A1.79 1.79 0 0 0 23.311 17a1.145 1.145 0 0 0-1.259 1.128c0 .789.489 1.109 1.618 1.6l.658.282c2.236.959 3.5 1.936 3.5 4.133c0 2.369-1.861 3.667-4.36 3.667a5.06 5.06 0 0 1-4.795-2.691Zm-9.295.228c.413.733.789 1.353 1.693 1.353c.864 0 1.41-.338 1.41-1.653v-8.947h2.631v8.982c0 2.724-1.6 3.964-3.929 3.964a4.085 4.085 0 0 1-3.947-2.4Z" })
      ]
    }
  );
}

function Css(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "0.88em",
      height: "1em",
      viewBox: "0 0 448 512",
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          d: "M376.3 32H0v376.3c0 19 7.6 37.2 21 50.7s31.7 21 50.7 21h304.6c19 0 37.2-7.6 50.7-21s21-31.7 21-50.7V103.7c0-19-7.6-37.2-21-50.7s-31.7-21-50.7-21m-43.9 399.4q-11.55-12.75-12-36.6h31.3c.2 14.1 5.1 21.1 14.8 21.1c4.9 0 8.4-1.6 10.5-4.7c2-3.1 3-8 3-14.8c0-5.4-1.3-9.9-4-13.4c-3.5-4.2-8.1-7.5-13.2-9.5l-11.6-5.5c-10.3-4.9-17.8-10.8-22.5-17.6c-4.5-6.8-6.7-16.3-6.7-28.4c0-13.6 4-24.6 11.8-33.1c8.1-8.5 19.1-12.7 33.2-12.7c13.6 0 24.1 4.2 31.5 12.5c7.5 8.4 11.5 20.3 11.8 35.9h-30.1c.2-5.1-.9-10.2-3-14.8c-1.7-3.4-5-5.1-10-5.1c-8.8 0-13.2 5.2-13.2 15.7c0 5.3 1.1 9.4 3.2 12.6c3.1 3.5 7 6.2 11.4 7.8l11.1 4.9c11.5 5.3 19.7 11.7 24.8 19.4s7.6 18 7.6 31c0 15.5-4 27.4-12.3 35.7c-8.2 8.3-19.5 12.5-34.1 12.5s-25.6-4.2-33.4-12.7zm-101 0q-11.55-12.75-12-36.6h31.3c.2 14.1 5.1 21.1 14.8 21.1c4.9 0 8.4-1.6 10.4-4.7s3-8 3-14.8c0-5.4-1.3-9.9-3.9-13.4c-3.5-4.2-8.1-7.5-13.2-9.5l-11.6-5.5c-10.3-4.9-17.8-10.8-22.5-17.6c-4.5-6.8-6.7-16.3-6.7-28.4c0-13.6 4-24.6 11.8-33.1c8.1-8.5 19.1-12.7 33.2-12.7c13.6 0 24.1 4.2 31.4 12.5c7.6 8.4 11.5 20.3 11.9 35.9h-30.1c.2-5.1-.9-10.2-3-14.8c-1.7-3.4-5-5.1-10-5.1c-8.8 0-13.2 5.2-13.2 15.7c0 5.3 1.1 9.4 3.2 12.6c3.1 3.5 7 6.2 11.4 7.8l11.1 4.9c11.5 5.3 19.7 11.7 24.8 19.4s7.6 18 7.6 31q0 23.25-12.3 35.7c-12.3 12.45-19.5 12.5-34.1 12.5s-25.6-4.2-33.4-12.7zm-105.6 1.1c-8.4-7.7-12.5-19.2-12.5-34.5v-75.4c0-15.2 4.4-26.7 13.2-34.6c8.9-7.8 20.7-11.8 35.2-11.8c14.1 0 25.2 4 33.4 12c8.3 8 12.5 20 12.5 35.9v6h-33.1v-5.8c0-6.1-1.3-10.7-4-13.6c-1.1-1.5-2.6-2.7-4.3-3.5s-3.5-1.2-5.4-1.1c-5.4 0-9.2 1.8-11.4 5.6c-2.3 5.2-3.3 10.8-3 16.4v65.5c0 13.7 4.8 20.6 14.4 20.8q6.75 0 10.2-4.8c2.5-4.1 3.7-8.8 3.5-13.6v-4.9h33.1v5.1c0 10.6-2.1 19.5-6.2 26.6c-4 6.9-9.9 12.5-17.1 16c-7.7 3.7-16.1 5.5-24.6 5.3c-14.2 0-25.5-3.9-33.8-11.6z"
        }
      )
    }
  );
}

function Html(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 32 32",
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#e44f26",
            d: "M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30z"
          }
        ),
        /* @__PURE__ */ jsx("path", { fill: "#f1662a", d: "m16 27.858l8.17-2.265l1.922-21.532H16z" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#ebebeb",
            d: "M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83l.759 8.517H16zm0 8.027l-.014.004l-3.442-.929l-.22-2.465H9.221l.433 4.852l6.332 1.758l.014-.004z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#fff",
            d: "M15.989 13.407v3.091h3.806l-.358 4.009l-3.448.93v3.216l6.337-1.757l.046-.522l.726-8.137l.076-.83zm0-6.256v3.091h7.466l.062-.694l.141-1.567l.074-.83z"
          }
        )
      ]
    }
  );
}

function Redux(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 128 128",
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "#764abc",
          d: "M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.7 39.7 0 0 1-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0 0 10 81.1c-4.4 8.64-3.91 17.27 1.3 25.25c3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0 0 26.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 0 1-2.61-6A9.12 9.12 0 0 1 87.37 70h.34a9.15 9.15 0 0 1 1 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58c-4.4 8.63-16 17.27-31.6 17.27a50.5 50.5 0 0 1-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.5 41.5 0 0 0 16 3.42c10.1 0 17.75-4.72 22.31-13.35c2.93-5.7 3.1-12.38.33-19.22a43.6 43.6 0 0 0-17.27-20.85a62 62 0 0 0-34.74-10.59h-2.93a9.21 9.21 0 0 1-8 5.54h-.31a9.13 9.13 0 0 1-.3-18.25h.33a9 9 0 0 1 8 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48m-82.75 23a7.3 7.3 0 0 1 1.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07c-2.44-.81-6-2-8.14-2.44c-.53-8.63-7.82-30.13-25.09-29.81c-6.19.17-15.31 3.1-20 9.12a43.7 43.7 0 0 0-9.64 25.25a59.6 59.6 0 0 0 8.47 36.16a2.75 2.75 0 0 1 1.14-.16h.32a9.121 9.121 0 0 1 .33 18.24h-.33a9.16 9.16 0 0 1-9.12-8.79z"
        }
      )
    }
  );
}

function Bear(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 128 128",
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#855b52",
            d: "M63.29 9.93c14.92.22 16.4 3.61 20.77 3.73c6.32.18 15.98-11.97 29.07-.99c12.9 10.82 2.39 27.8 2.39 27.8s7.18 12.72 8.02 32.1c.61 14.03-4.79 31.49-29 41.39c-22.29 9.12-55.55 7.3-75.88-8.31C2.9 93.56 4.01 75.92 4.44 69.91c1.13-15.77 8.02-28.44 8.02-28.44s-10.19-20.15 2.25-29.7c13.66-10.49 23.38 1.86 29 1.41c4.09-.34 5.43-3.46 19.58-3.25"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#b99277",
            d: "M35.98 20.77c-.19-1.11-7.43-8.29-14.92-.99c-5.77 5.63 0 15.42.99 14.64c.76-.6 3.56-4.21 6.83-7.32c3.35-3.19 7.17-5.9 7.1-6.33m56.52.07c-.05.62 3.81 2.95 7.32 6.26c3.55 3.35 6.75 7.67 7.32 7.6c1.13-.14 5.98-9.64-.35-14.99s-14.15-.7-14.29 1.13"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#f2a258",
            d: "M64.51 60.38c14.64 0 23.42 16.52 22.9 26.84c-.47 9.39-5.82 17.18-23.84 17.08c-18.02-.09-22.59-8.36-22.9-17.18c-.28-7.88 5.35-26.74 23.84-26.74"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#171716",
            d: "M92.92 59.7c.33 4.16-1.9 7.95-6.17 7.63c-4.12-.32-7.13-3.66-7.13-7.84s2.22-7.14 5.56-7.6c4.08-.57 7.27 1.9 7.74 7.81"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#2f3030",
            d: "M74.55 76.99c-.34 4.16-3.1 8.61-11.12 8.33c-6.73-.24-9.9-4.72-10-8.89c-.14-5.89 3-8.06 10.61-8.17c8.68-.11 10.98 3.01 10.51 8.73"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#171716",
            d: "M48.37 61.25c-.43 4.15-4.33 7.06-7.98 6.17c-4.01-.98-5.81-5.2-4.97-9.29c.75-3.66 3.96-6.51 7.6-6.1c3.8.42 5.89 3.99 5.35 9.22"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#2f3030",
            d: "M63.99 95.04c5.49 0 8.49-3.03 9.34-3.87s1.99-2.28 3.75-.84c1.5 1.22.02 3.12-.66 3.85c-1.22 1.31-4.9 5.31-12.93 4.95c-7.88-.35-10.91-3.92-11.76-4.76c-.84-.84-2.25-3-.66-4.22c1.91-1.46 2.53.19 4.5 1.78s3.21 3.11 8.42 3.11"
          }
        )
      ]
    }
  );
}

function Git(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 32 32",
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#dd4c35",
            d: "M29.472 14.753L17.247 2.528a1.8 1.8 0 0 0-2.55 0l-2.539 2.539l3.22 3.22a2.141 2.141 0 0 1 2.712 2.73l3.1 3.1a2.143 2.143 0 1 1-1.285 1.21l-2.895-2.895v7.617a2.141 2.141 0 1 1-1.764-.062V12.3a2.146 2.146 0 0 1-1.165-2.814l-3.17-3.172L2.528 14.7a1.8 1.8 0 0 0 0 2.551l12.225 12.221a1.8 1.8 0 0 0 2.55 0L29.472 17.3a1.8 1.8 0 0 0 0-2.551"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#fff",
            d: "m12.158 5.067l3.22 3.22a2.141 2.141 0 0 1 2.712 2.73l3.1 3.1a2.143 2.143 0 1 1-1.285 1.21l-2.895-2.895v7.617a2.141 2.141 0 1 1-1.764-.062V12.3a2.146 2.146 0 0 1-1.165-2.814l-3.17-3.172"
          }
        )
      ]
    }
  );
}

function Github(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          d: "M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
        }
      )
    }
  );
}

function Vite(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 32 32",
      ...props,
      children: /* @__PURE__ */ jsxs("g", { fill: "none", children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "url(#vscodeIconsFileTypeVite0)",
            d: "m29.884 6.146l-13.142 23.5a.714.714 0 0 1-1.244.005L2.096 6.148a.714.714 0 0 1 .746-1.057l13.156 2.352a.7.7 0 0 0 .253 0l12.881-2.348a.714.714 0 0 1 .752 1.05z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "url(#vscodeIconsFileTypeVite1)",
            d: "M22.264 2.007L12.54 3.912a.36.36 0 0 0-.288.33l-.598 10.104a.357.357 0 0 0 .437.369l2.707-.625a.357.357 0 0 1 .43.42l-.804 3.939a.357.357 0 0 0 .454.413l1.672-.508a.357.357 0 0 1 .454.414l-1.279 6.187c-.08.387.435.598.65.267l.143-.222l7.925-15.815a.357.357 0 0 0-.387-.51l-2.787.537a.357.357 0 0 1-.41-.45l1.818-6.306a.357.357 0 0 0-.412-.45"
          }
        ),
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "vscodeIconsFileTypeVite0",
              x1: 6,
              x2: 235,
              y1: 33,
              y2: 344,
              gradientTransform: "translate(1.34 1.894)scale(.07142)",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("stop", { stopColor: "#41d1ff" }),
                /* @__PURE__ */ jsx("stop", { offset: 1, stopColor: "#bd34fe" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "vscodeIconsFileTypeVite1",
              x1: 194.651,
              x2: 236.076,
              y1: 8.818,
              y2: 292.989,
              gradientTransform: "translate(1.34 1.894)scale(.07142)",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("stop", { stopColor: "#ffea83" }),
                /* @__PURE__ */ jsx("stop", { offset: 0.083, stopColor: "#ffdd35" }),
                /* @__PURE__ */ jsx("stop", { offset: 1, stopColor: "#ffa800" })
              ]
            }
          )
        ] })
      ] })
    }
  );
}

function Reactrouter(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 128 128",
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#f44250",
            d: "M99.04 50.315c-3.646-1.148-5.528-.761-9.351-1.18c-5.91-.645-8.265-2.959-9.264-8.913c-.559-3.324.101-8.191-1.326-11.204c-2.729-5.746-9.115-8.323-15.53-6.852c-5.417 1.244-9.924 6.666-10.174 12.232c-.285 6.355 3.33 11.778 9.537 13.65c2.95.89 6.083 1.338 9.163 1.565c5.649.413 6.083 3.558 7.61 6.147c.964 1.632 1.897 3.24 1.897 8.107s-.939 6.474-1.896 8.106c-1.528 2.583-3.413 4.275-9.062 4.693c-3.08.228-6.22.676-9.162 1.567c-6.208 1.877-9.823 7.293-9.538 13.649c.25 5.566 4.757 10.988 10.174 12.232c6.415 1.476 12.801-1.106 15.53-6.852c1.433-3.013 2.218-6.427 2.777-9.75c1.005-5.955 3.36-8.269 9.264-8.915c3.823-.418 7.78 0 11.363-2.038c3.785-2.77 7.168-6.93 7.168-12.692c0-5.764-3.645-11.806-9.18-13.552"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#121212",
            d: "M38.4 77.373c-7.45 0-13.528-6.098-13.528-13.575s6.077-13.574 13.527-13.574s13.528 6.098 13.528 13.574c0 7.47-6.083 13.575-13.528 13.575zM13.48 104.96C6.04 104.942-.018 98.82 0 91.337c.018-7.47 6.119-13.55 13.575-13.526c7.444.018 13.503 6.14 13.48 13.622c-.018 7.464-6.12 13.545-13.575 13.527m100.512 0c-7.462.041-13.586-6.015-13.629-13.473c-.041-7.488 5.994-13.634 13.426-13.676c7.462-.042 13.587 6.014 13.629 13.472c.041 7.482-5.994 13.635-13.426 13.677"
          }
        )
      ]
    }
  );
}

function Jest(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 32 32",
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#c63d14",
            d: "M27.089 15.786a2.606 2.606 0 0 0-2.606-2.606a3 3 0 0 0-.274.014l3.58-10.558H12.576l3.575 10.549c-.052 0-.105-.005-.158-.005a2.606 2.606 0 0 0-.791 5.09a11.4 11.4 0 0 1-2.049 2.579A10.4 10.4 0 0 1 9.5 23.116a3.323 3.323 0 0 1-1.665-4.23q.117-.27.229-.544a2.607 2.607 0 1 0-2.09-.4a20 20 0 0 0-1.889 4.787c-.354 2.135 0 4.4 1.845 5.681c4.3 2.981 8.969-1.848 13.891-3.061c1.784-.44 3.742-.369 5.313-1.279a4.45 4.45 0 0 0 2.179-3.088a4.64 4.64 0 0 0-.831-3.522a2.6 2.6 0 0 0 .606-1.671ZM18.6 15.8v-.009a2.6 2.6 0 0 0-1.256-2.23L20.188 7.8l2.85 5.814a2.6 2.6 0 0 0-1.161 2.169v.057z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#fff",
            d: "M27.726 15.786a3.25 3.25 0 0 0-2.643-3.186L28.677 2H11.689l3.6 10.621a3.241 3.241 0 0 0-1 5.918a11 11 0 0 1-1.568 1.846a9.8 9.8 0 0 1-3.16 2.03a2.656 2.656 0 0 1-1.134-3.28l.04-.093l.074-.175a3.245 3.245 0 1 0-3.34-.754q-.163.346-.339.706a14 14 0 0 0-1.4 3.8c-.465 2.8.285 5.043 2.111 6.308A5.75 5.75 0 0 0 8.934 30c2.132 0 4.289-1.071 6.4-2.119a23.7 23.7 0 0 1 4.642-1.918c.577-.142 1.171-.228 1.8-.319a10 10 0 0 0 3.68-1.028a5.09 5.09 0 0 0 2.487-3.53a5.26 5.26 0 0 0-.691-3.613a3.2 3.2 0 0 0 .475-1.688Zm-1.273 0a1.97 1.97 0 1 1-1.97-1.97a1.97 1.97 0 0 1 1.97 1.97M26.9 3.273l-3.174 9.36a3 3 0 0 0-.4.125l-3.135-6.4l-3.145 6.362a3 3 0 0 0-.419-.114l-3.163-9.333ZM15.993 13.816a1.97 1.97 0 1 1-1.97 1.97a1.97 1.97 0 0 1 1.97-1.97m-8.522.019A1.97 1.97 0 1 1 5.5 15.8a1.97 1.97 0 0 1 1.97-1.97Zm19.217 7.034a3.82 3.82 0 0 1-1.871 2.646a8.9 8.9 0 0 1-3.223.869c-.632.091-1.285.185-1.924.343a24.6 24.6 0 0 0-4.9 2.013c-3.164 1.571-5.9 2.928-8.472 1.143c-1.887-1.308-1.8-3.728-1.58-5.054A12.8 12.8 0 0 1 6 19.376l.27-.559a3.2 3.2 0 0 0 .838.21a3.965 3.965 0 0 0 2.1 4.655l.245.126l.259-.092a11 11 0 0 0 3.875-2.4a12 12 0 0 0 1.918-2.319a3.241 3.241 0 0 0 2.64-5.627l2.038-4.121l2.059 4.2a3.24 3.24 0 0 0 4.088 5a3.96 3.96 0 0 1 .355 2.422Z"
          }
        )
      ]
    }
  );
}

const skillsCards = [
  {
    title: "HTML",
    icon: Html({ className: "h-10 w-10" })
  },
  {
    title: "CSS",
    icon: Css({ className: "h-10 w-10 text-purple-900" })
  },
  {
    title: "JavaScript",
    icon: Js({ className: "h-10 w-10" })
  },
  {
    title: "Tailwind",
    icon: Tailwind({ className: "h-10 w-10" })
  },
  {
    title: "React",
    icon: React({ className: "h-10 w-10" })
  },
  {
    title: "TypeScript",
    icon: Ts({ className: "h-10 w-10" })
  },
  {
    title: "Next.js",
    icon: Next({ className: "h-10 w-10" })
  },
  {
    title: "Astro",
    icon: Astro({ className: "h-10 w-10" })
  },
  {
    title: "Redux",
    icon: Redux({ className: "h-10 w-10" })
  },
  {
    title: "Zustand",
    icon: Bear({ className: "h-10 w-10" })
  },
  {
    title: "Vite",
    icon: Vite({ className: "h-10 w-10" })
  },
  {
    title: "React Router",
    icon: Reactrouter({ className: "h-10 w-10" })
  },
  {
    title: "Git",
    icon: Git({ className: "h-10 w-10" })
  },
  {
    title: "GitHub",
    icon: Github({ className: "h-10 w-10" })
  },
  {
    title: "Jest",
    icon: Jest({ className: "h-10 w-10" })
  }
];

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React$1.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

const CarouselContext = React$1.createContext(null);
function useCarousel() {
  const context = React$1.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = React$1.forwardRef(
  ({
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className,
    children,
    ...props
  }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React$1.useState(false);
    const [canScrollNext, setCanScrollNext] = React$1.useState(false);
    const onSelect = React$1.useCallback((api2) => {
      if (!api2) {
        return;
      }
      setCanScrollPrev(api2.canScrollPrev());
      setCanScrollNext(api2.canScrollNext());
    }, []);
    const scrollPrev = React$1.useCallback(() => {
      api?.scrollPrev();
    }, [api]);
    const scrollNext = React$1.useCallback(() => {
      api?.scrollNext();
    }, [api]);
    const handleKeyDown = React$1.useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );
    React$1.useEffect(() => {
      if (!api || !setApi) {
        return;
      }
      setApi(api);
    }, [api, setApi]);
    React$1.useEffect(() => {
      if (!api) {
        return;
      }
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);
    return /* @__PURE__ */ jsx(
      CarouselContext.Provider,
      {
        value: {
          carouselRef,
          api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext
        },
        children: /* @__PURE__ */ jsx(
          "div",
          {
            ref,
            onKeyDownCapture: handleKeyDown,
            className: cn("relative", className),
            role: "region",
            "aria-roledescription": "carousel",
            ...props,
            children
          }
        )
      }
    );
  }
);
Carousel.displayName = "Carousel";
const CarouselContent = React$1.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(
        "flex",
        orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        className
      ),
      ...props
    }
  ) });
});
CarouselContent.displayName = "CarouselContent";
const CarouselItem = React$1.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      role: "group",
      "aria-roledescription": "slide",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      ),
      ...props
    }
  );
});
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = React$1.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollPrev,
      onClick: scrollPrev,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = React$1.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollNext,
      onClick: scrollNext,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
CarouselNext.displayName = "CarouselNext";

function CarouselSpacing() {
  return /* @__PURE__ */ jsxs(Carousel, { className: "w-full max-w-full", children: [
    /* @__PURE__ */ jsx(CarouselContent, { className: "-ml-4", children: skillsCards.map(({ title, icon }) => /* @__PURE__ */ jsx(
      CarouselItem,
      {
        className: "xl:basis-1/5 basis-1/3 shadow-sm",
        children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 items-center justify-center bg-zinc-100 dark:bg-[#222222] rounded-[4px] p-4 h-[200px]", children: [
          /* @__PURE__ */ jsx("span", { children: icon }),
          /* @__PURE__ */ jsx("p", { className: "md:text-xl text-sm font-semibold text-black dark:text-white", children: title })
        ] })
      },
      title
    )) }),
    /* @__PURE__ */ jsx(CarouselPrevious, { className: "hidden lg:flex" }),
    /* @__PURE__ */ jsx(CarouselNext, { className: "hidden lg:flex" })
  ] });
}

const $$Skills = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="Skills" class="mx-auto max-w-[1650px] w-full h-full mt-28 flex flex-col items-center justify-center px-4 2xl:px-0"> <header class="mb-8 flex items-center gap-4"> ${renderComponent($$result, "Universe", $$Universe, { "class:list": ["md:h-10 md:w-10 h-8 w-8 text-black dark:text-white"] })} <h3 class="md:text-5xl text-2xl font-semibold text-black dark:text-white">
Skills
</h3> </header> ${renderComponent($$result, "CarouselSpacing", CarouselSpacing, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/CarrouselSpacing", "client:component-export": "CarouselSpacing" })} </section>`;
}, "D:/Users/I\xF1aki/Desktop/Dev/portfolio-v2/src/components/Skills.astro", void 0);

const $$Astro$k = createAstro();
const $$LinkedIn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$LinkedIn;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"${spreadAttributes(props)}> <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path> </svg>`;
}, "D:/Users/I\xF1aki/Desktop/Dev/portfolio-v2/src/icons/LinkedIn.astro", void 0);

const $$Astro$j = createAstro();
const $$GitHub = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$GitHub;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"${spreadAttributes(props)}> <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path> </svg>`;
}, "D:/Users/I\xF1aki/Desktop/Dev/portfolio-v2/src/icons/GitHub.astro", void 0);

const $$Astro$i = createAstro();
const $$X = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$X;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"${spreadAttributes(props)}> <path fill="currentColor" d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"></path> </svg>`;
}, "D:/Users/I\xF1aki/Desktop/Dev/portfolio-v2/src/icons/X.astro", void 0);

const $$Astro$h = createAstro();
const $$Instagram = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Instagram;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"${spreadAttributes(props)}> <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path> </svg>`;
}, "D:/Users/I\xF1aki/Desktop/Dev/portfolio-v2/src/icons/Instagram.astro", void 0);

const contactButtons = [
  {
    icon: $$LinkedIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/i%C3%B1aki-carcereny-77b555316/"
  },
  {
    icon: $$GitHub,
    label: "GitHub",
    href: "https://github.com/InakiCarcereny"
  },
  {
    icon: $$X,
    label: "X",
    href: "https://x.com/Inaki_Dev"
  },
  {
    icon: $$Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/inaki.carce/"
  }
];

const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="About" class="flex flex-col gap-16 items-center justify-center max-w-[950px] mx-auto px-5"> <header class="flex flex-col gap-4 items-center"> <h1 class="md:text-6xl text-4xl font-extrabold bg-gradient-to-b from-blue-400 via-blue-600 to-blue-800 bg-clip-text text-transparent text-center leading-tight drop-shadow-md text-pretty relative z-10">
Hi! My name is Inaki Carcereny and I am a Frontend Developer.
</h1> <p class="md:text-base text-sm text-center font-medium text-gray-700 leading-relaxed max-w-3xl mx-auto dark:text-white">
I am 19 years old and after a year in engineering,
<strong class="font-semibold text-blue-600 hover:text-blue-700 transition-colors">
I discovered my true passion in self-taught web development,
        specializing in Front-End.
</strong>
I focus on creating responsive and attractive interfaces, with unique designs
      focused on the user experience.
<strong class="font-semibold text-blue-600 hover:text-blue-700 transition-colors">
My goal is to provide clean, scalable and reusable code, always applying
        best practices.
</strong>
I am constantly learning to continue improving and provide innovative solutions
      in the world of web development.
</p> </header> <img src="/assets/hero-banner.webp" alt="banner" class="w-full h-auto"> <div class="flex flex-col gap-4 max-w-[450px] w-full"> <ul class="flex items-center justify-around"> ${contactButtons.map(({ icon: Icon, label, href }) => renderTemplate`<a rel="noopener noreferrer"${addAttribute(href, "href")}${addAttribute(`Go to ${label}`, "aria-label")} class="flex items-center gap-2 font-semibold text-black dark:text-white"> ${renderComponent($$result, "Icon", Icon, { "class:list": ["h-5 w-5 text-black dark:text-white"] })} <p class="md:text-base text-sm">${label}</p> </a>`)} </ul> <a href="#Projects" class="flex justify-center items-center text-white bg-black dark:bg-white dark:text-black rounded-[4px] px-4 py-1 font-semibold md:text-base text-sm">
Read More
</a> </div> </section>`;
}, "D:/Users/I\xF1aki/Desktop/Dev/portfolio-v2/src/components/HeroSection.astro", void 0);

const $$Astro$g = createAstro();
const $$Rocket = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Rocket;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 56 56"${spreadAttributes(props)}> <path fill="currentColor" fill-rule="evenodd" d="M47.88 4.863a2 2 0 0 1 1.67 2.148l-.019.148Q48.203 15.294 46 20.547q-2 4.767-6.78 11.267l-.782 1.051l-.405.534a11 11 0 0 0-2.2 5.604Q35.417 43.3 34 45.154q-5.12 5.643-9.514 7.369a1 1 0 0 1-1.362-1.014l.765-9.175a1 1 0 0 0-.97-1.083l-.116.004q-2.388.215-4.803-1.9q-2.127-1.862-2.251-3.755l-.008-.223a1 1 0 0 0-1.263-.962l-7.467 2.036a1 1 0 0 1-1.218-1.26l.04-.11l.399-.89l.387-.849l.376-.807l.365-.765l.355-.724l.173-.346l.337-.661l.327-.62l.16-.294l.31-.556l.3-.515q.22-.37.428-.694l.272-.41q.533-.78.978-1.225q1.659-1.66 6.483-3.062a10 10 0 0 0 4.402-2.656q.45-.467.892-.914l.874-.876a90 90 0 0 1 2.102-2.018l.809-.74l.79-.7q3.122-2.724 5.648-4.205q1.357-.795 3.156-1.62l.821-.368l.427-.185l.887-.372q.454-.187.93-.375l.975-.378l1.017-.38l1.062-.384l1.105-.386l1.148-.39l.59-.195l1.215-.394l.623-.198a2 2 0 0 1 .924-.066M15 39q.551.002 1.068.114q-1.18.571-1.494 3.994l-.025.303a1 1 0 0 0 1.08 1.074q3.669-.31 4.258-1.547q.112.515.113 1.062q0 2.76-4 4l-4.307.434a1 1 0 0 1-1.096-1.087L11 43q1.239-4 4-4m20.5-23a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9"></path> </svg>`;
}, "D:/Users/I\xF1aki/Desktop/Dev/portfolio-v2/src/icons/Rocket.astro", void 0);

const $$Astro$f = createAstro();
const $$AstroIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$AstroIcon;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"${spreadAttributes(props)}> <path fill="url(#vscodeIconsFileTypeAstro0)" d="M11.025 20.499c-.532 1.75-.154 4.184 1.105 5.331v-.042l.042-.112c.154-.741.756-1.203 1.526-1.175c.713.014 1.12.392 1.217 1.217c.042.308.042.616.056.938v.098c0 .7.196 1.371.588 1.959c.35.56.84.993 1.497 1.287l-.028-.056l-.028-.112c-.49-1.469-.14-2.49 1.147-3.358l.392-.266l.868-.573a4.25 4.25 0 0 0 1.791-3.037c.07-.532 0-1.05-.154-1.553l-.21.14c-1.945 1.035-4.17 1.4-6.325.98c-1.301-.197-2.56-.56-3.498-1.652z"></path> <path fill="#fff" d="M4.925 20.191s3.736-1.82 7.486-1.82l2.84-8.759c.098-.42.406-.7.756-.7s.644.28.756.714l2.826 8.746c4.45 0 7.487 1.82 7.487 1.82L20.709 2.84c-.168-.518-.49-.84-.896-.84h-7.612c-.406 0-.7.322-.896.84z"></path> <defs> <linearGradient id="vscodeIconsFileTypeAstro0" x1="8.19" x2="16.91" y1="23" y2="18.89" gradientTransform="translate(-.673 -2.198)scale(1.3993)" gradientUnits="userSpaceOnUse"> <stop offset="0" stop-color="#d83333"></stop> <stop offset="1" stop-color="#f041ff"></stop> </linearGradient> </defs> </svg>`;
}, "D:/Users/I\xF1aki/Desktop/Dev/portfolio-v2/src/icons/AstroIcon.astro", void 0);

const $$Astro$e = createAstro();
const $$Express = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Express;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"${spreadAttributes(props)}> <path fill="currentColor" d="M24 18.588a1.53 1.53 0 0 1-1.895-.72l-3.45-4.771l-.5-.667l-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92l-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83l3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27c1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.08 4.08 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.42 5.42 0 0 1-2.589 3.957a6.27 6.27 0 0 1-7.306-.933a6.58 6.58 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88 88 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278c-2.882-.04-4.944 2.094-5.071 5.264z"></path> </svg>`;
}, "D:/Users/I\xF1aki/Desktop/Dev/portfolio-v2/src/icons/Express.astro", void 0);

const $$Astro$d = createAstro();
const $$Js = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Js;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"${spreadAttributes(props)}> <path fill="#f5de19" d="M2 2h28v28H2z"></path> <path d="M20.809 23.875a2.87 2.87 0 0 0 2.6 1.6c1.09 0 1.787-.545 1.787-1.3c0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964c0-1.973 1.5-3.476 3.853-3.476a3.89 3.89 0 0 1 3.742 2.107L25 18.128A1.79 1.79 0 0 0 23.311 17a1.145 1.145 0 0 0-1.259 1.128c0 .789.489 1.109 1.618 1.6l.658.282c2.236.959 3.5 1.936 3.5 4.133c0 2.369-1.861 3.667-4.36 3.667a5.06 5.06 0 0 1-4.795-2.691Zm-9.295.228c.413.733.789 1.353 1.693 1.353c.864 0 1.41-.338 1.41-1.653v-8.947h2.631v8.982c0 2.724-1.6 3.964-3.929 3.964a4.085 4.085 0 0 1-3.947-2.4Z"></path> </svg>`;
}, "D:/Users/I\xF1aki/Desktop/Dev/portfolio-v2/src/icons/Js.astro", void 0);

const $$Astro$c = createAstro();
const $$Mongo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Mongo;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"${spreadAttributes(props)}> <defs> <linearGradient id="vscodeIconsFileTypeMongo0" x1="-645.732" x2="-654.59" y1="839.188" y2="839.25" gradientTransform="matrix(-.977 -.323 -.29 .877 -375.944 -928.287)" gradientUnits="userSpaceOnUse"> <stop offset=".231" stop-color="#999875"></stop> <stop offset=".563" stop-color="#9b9977"></stop> <stop offset=".683" stop-color="#a09f7e"></stop> <stop offset=".768" stop-color="#a9a889"></stop> <stop offset=".837" stop-color="#b7b69a"></stop> <stop offset=".896" stop-color="#c9c7b0"></stop> <stop offset=".948" stop-color="#deddcb"></stop> <stop offset=".994" stop-color="#f8f6eb"></stop> <stop offset="1" stop-color="#fbf9ef"></stop> </linearGradient> <linearGradient id="vscodeIconsFileTypeMongo1" x1="-644.287" x2="-657.028" y1="823.405" y2="845.476" gradientTransform="matrix(-.977 -.323 -.29 .877 -375.944 -928.287)" gradientUnits="userSpaceOnUse"> <stop offset="0" stop-color="#48a547"></stop> <stop offset="1" stop-color="#3f9143"></stop> </linearGradient> <linearGradient id="vscodeIconsFileTypeMongo2" x1="-643.386" x2="-652.418" y1="839.485" y2="833.417" gradientTransform="matrix(-.977 -.323 -.29 .877 -375.944 -928.287)" gradientUnits="userSpaceOnUse"> <stop offset="0" stop-color="#41a247"></stop> <stop offset=".352" stop-color="#4ba74b"></stop> <stop offset=".956" stop-color="#67b554"></stop> <stop offset="1" stop-color="#69b655"></stop> </linearGradient> </defs> <path fill="url(#vscodeIconsFileTypeMongo0)" d="m16.62 30l-.751-.249s.1-3.8-1.275-4.067c-.9-1.048.133-44.741 3.423-.149a2.7 2.7 0 0 0-1.333 1.523A14 14 0 0 0 16.62 30"></path> <path fill="url(#vscodeIconsFileTypeMongo1)" d="M17.026 26.329a13.22 13.22 0 0 0 5-13.225c-1.47-6.485-4.951-8.617-5.326-9.431a10 10 0 0 1-.825-1.6l.277 18.069s-.574 5.522.874 6.187"></path> <path fill="url(#vscodeIconsFileTypeMongo2)" d="M15.487 26.569S9.366 22.4 9.72 15.025a15.54 15.54 0 0 1 5.519-11.648A1.73 1.73 0 0 0 15.846 2c.381.82.319 12.243.359 13.579c.155 5.197-.289 10.009-.718 10.99"></path> </svg>`;
}, "D:/Users/I\xF1aki/Desktop/Dev/portfolio-v2/src/icons/Mongo.astro", void 0);

const $$Astro$b = createAstro();
const $$Next = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Next;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"${spreadAttributes(props)}> <circle cx="64" cy="64" r="64"></circle> <path fill="url(#deviconNextjs0)" d="M106.317 112.014L49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64 64 0 0 0 6.763-5.209"></path> <path fill="url(#deviconNextjs1)" d="M81.778 38.4h8.533v51.2h-8.533z"></path> <defs> <linearGradient id="deviconNextjs0" x1="109" x2="144.5" y1="116.5" y2="160.5" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse"> <stop stop-color="#fff"></stop> <stop offset="1" stop-color="#fff" stop-opacity="0"></stop> </linearGradient> <linearGradient id="deviconNextjs1" x1="121" x2="120.799" y1="54" y2="106.875" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse"> <stop stop-color="#fff"></stop> <stop offset="1" stop-color="#fff" stop-opacity="0"></stop> </linearGradient> </defs> </svg>`;
}, "D:/Users/I\xF1aki/Desktop/Dev/portfolio-v2/src/icons/Next.astro", void 0);

const $$Astro$a = createAstro();
const $$React = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$React;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"${spreadAttributes(props)}> <g fill="#61dafb"> <circle cx="64" cy="64" r="11.4"></circle> <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3c.6-2.4 1.1-4.8 1.5-7.1c2.1-13.2-.2-22.5-6.6-26.1c-1.9-1.1-4-1.6-6.4-1.6c-7 0-15.9 5.2-24.9 13.9c-9-8.7-17.9-13.9-24.9-13.9c-2.4 0-4.5.5-6.4 1.6c-6.4 3.7-8.7 13-6.6 26.1c.4 2.3.9 4.7 1.5 7.1c-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3c-.6 2.4-1.1 4.8-1.5 7.1c-2.1 13.2.2 22.5 6.6 26.1c1.9 1.1 4 1.6 6.4 1.6c7.1 0 16-5.2 24.9-13.9c9 8.7 17.9 13.9 24.9 13.9c2.4 0 4.5-.5 6.4-1.6c6.4-3.7 8.7-13 6.6-26.1c-.4-2.3-.9-4.7-1.5-7.1c2.4-.7 4.7-1.4 6.9-2.3c12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8M92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3c-.3 2.1-.8 4.3-1.4 6.6c-5.2-1.2-10.7-2-16.5-2.5c-3.4-4.8-6.9-9.1-10.4-13c7.4-7.3 14.9-12.3 21-12.3c1.3 0 2.5.3 3.5.9M81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6c-3.7.3-7.4.4-11.2.4c-3.9 0-7.6-.1-11.2-.4q-3.3-4.8-6-9.6c-1.9-3.3-3.7-6.7-5.3-10c1.6-3.3 3.4-6.7 5.3-10c1.8-3.2 3.9-6.4 6.1-9.6c3.7-.3 7.4-.4 11.2-.4c3.9 0 7.6.1 11.2.4q3.3 4.8 6 9.6c1.9 3.3 3.7 6.7 5.3 10c-1.7 3.3-3.4 6.6-5.3 10m8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3c-3.4.8-7 1.4-10.8 1.9c1.2-1.9 2.5-3.9 3.6-6c1.2-2.1 2.3-4.2 3.4-6.2M64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3c2.3.1 4.6.2 6.9.2s4.6-.1 6.9-.2c-2.2 2.9-4.5 5.7-6.9 8.3m-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9c1.1-3.3 2.3-6.8 3.8-10.3c1.1 2 2.2 4.1 3.4 6.1c1.2 2.2 2.4 4.1 3.6 6.1m-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3c3.4-.8 7-1.4 10.8-1.9c-1.2 1.9-2.5 3.9-3.6 6c-1.2 2.1-2.3 4.2-3.4 6.2M64 30.2c2.4 2.6 4.7 5.4 6.9 8.3c-2.3-.1-4.6-.2-6.9-.2s-4.6.1-6.9.2c2.2-2.9 4.5-5.7 6.9-8.3m22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9c-1.1 3.3-2.3 6.8-3.8 10.3c-1.1-2.1-2.2-4.2-3.4-6.2M31.7 35c-1.7-10.5-.3-17.9 3.8-20.3c1-.6 2.2-.9 3.5-.9c6 0 13.5 4.9 21 12.3c-3.5 3.8-7 8.2-10.4 13c-5.8.5-11.3 1.4-16.5 2.5c-.6-2.3-1-4.5-1.4-6.6M7 64c0-4.7 5.7-9.7 15.7-13.4c2-.8 4.2-1.5 6.4-2.1c1.6 5 3.6 10.3 6 15.6c-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64m28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3c.3-2.1.8-4.3 1.4-6.6c5.2 1.2 10.7 2 16.5 2.5c3.4 4.8 6.9 9.1 10.4 13c-7.4 7.3-14.9 12.3-21 12.3c-1.3 0-2.5-.3-3.5-.9M96.3 93c1.7 10.5.3 17.9-3.8 20.3c-1 .6-2.2.9-3.5.9c-6 0-13.5-4.9-21-12.3c3.5-3.8 7-8.2 10.4-13c5.8-.5 11.3-1.4 16.5-2.5c.6 2.3 1 4.5 1.4 6.6m9-15.6c-2 .8-4.2 1.5-6.4 2.1c-1.6-5-3.6-10.3-6-15.6c2.4-5.3 4.5-10.5 6-15.5c13.8 4 22.1 10 22.1 15.6c0 4.7-5.8 9.7-15.7 13.4"></path> </g> </svg>`;
}, "D:/Users/I\xF1aki/Desktop/Dev/portfolio-v2/src/icons/React.astro", void 0);

const $$Astro$9 = createAstro();
const $$Redux = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Redux;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"${spreadAttributes(props)}> <path fill="#764abc" d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.7 39.7 0 0 1-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0 0 10 81.1c-4.4 8.64-3.91 17.27 1.3 25.25c3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0 0 26.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 0 1-2.61-6A9.12 9.12 0 0 1 87.37 70h.34a9.15 9.15 0 0 1 1 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58c-4.4 8.63-16 17.27-31.6 17.27a50.5 50.5 0 0 1-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.5 41.5 0 0 0 16 3.42c10.1 0 17.75-4.72 22.31-13.35c2.93-5.7 3.1-12.38.33-19.22a43.6 43.6 0 0 0-17.27-20.85a62 62 0 0 0-34.74-10.59h-2.93a9.21 9.21 0 0 1-8 5.54h-.31a9.13 9.13 0 0 1-.3-18.25h.33a9 9 0 0 1 8 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48m-82.75 23a7.3 7.3 0 0 1 1.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07c-2.44-.81-6-2-8.14-2.44c-.53-8.63-7.82-30.13-25.09-29.81c-6.19.17-15.31 3.1-20 9.12a43.7 43.7 0 0 0-9.64 25.25a59.6 59.6 0 0 0 8.47 36.16a2.75 2.75 0 0 1 1.14-.16h.32a9.121 9.121 0 0 1 .33 18.24h-.33a9.16 9.16 0 0 1-9.12-8.79z"></path> </svg>`;
}, "D:/Users/I\xF1aki/Desktop/Dev/portfolio-v2/src/icons/Redux.astro", void 0);

const $$Astro$8 = createAstro();
const $$Tailwind = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Tailwind;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"${spreadAttributes(props)}> <path fill="#44a8b3" d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1m-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1"></path> </svg>`;
}, "D:/Users/I\xF1aki/Desktop/Dev/portfolio-v2/src/icons/Tailwind.astro", void 0);

const $$Astro$7 = createAstro();
const $$Ts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Ts;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"${spreadAttributes(props)}> <rect width="28" height="28" x="2" y="2" fill="#3178c6" rx="1.312"></rect> <path fill="#fff" fill-rule="evenodd" d="M18.245 23.759v3.068a6.5 6.5 0 0 0 1.764.575a11.6 11.6 0 0 0 2.146.192a10 10 0 0 0 2.088-.211a5.1 5.1 0 0 0 1.735-.7a3.54 3.54 0 0 0 1.181-1.266a4.47 4.47 0 0 0 .186-3.394a3.4 3.4 0 0 0-.717-1.117a5.2 5.2 0 0 0-1.123-.877a12 12 0 0 0-1.477-.734q-.6-.249-1.08-.484a5.5 5.5 0 0 1-.813-.479a2.1 2.1 0 0 1-.516-.518a1.1 1.1 0 0 1-.181-.618a1.04 1.04 0 0 1 .162-.571a1.4 1.4 0 0 1 .459-.436a2.4 2.4 0 0 1 .726-.283a4.2 4.2 0 0 1 .956-.1a6 6 0 0 1 .808.058a6 6 0 0 1 .856.177a6 6 0 0 1 .836.3a4.7 4.7 0 0 1 .751.422V13.9a7.5 7.5 0 0 0-1.525-.4a12.4 12.4 0 0 0-1.9-.129a8.8 8.8 0 0 0-2.064.235a5.2 5.2 0 0 0-1.716.733a3.66 3.66 0 0 0-1.171 1.271a3.73 3.73 0 0 0-.431 1.845a3.6 3.6 0 0 0 .789 2.34a6 6 0 0 0 2.395 1.639q.63.26 1.175.509a6.5 6.5 0 0 1 .942.517a2.5 2.5 0 0 1 .626.585a1.2 1.2 0 0 1 .23.719a1.1 1.1 0 0 1-.144.552a1.3 1.3 0 0 1-.435.441a2.4 2.4 0 0 1-.726.292a4.4 4.4 0 0 1-1.018.105a5.8 5.8 0 0 1-1.969-.35a5.9 5.9 0 0 1-1.805-1.045m-5.154-7.638h4v-2.527H5.938v2.527H9.92v11.254h3.171Z"></path> </svg>`;
}, "D:/Users/I\xF1aki/Desktop/Dev/portfolio-v2/src/icons/Ts.astro", void 0);

const $$Astro$6 = createAstro();
const $$Zustand = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Zustand;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"${spreadAttributes(props)}> <path fill="#855b52" d="M63.29 9.93c14.92.22 16.4 3.61 20.77 3.73c6.32.18 15.98-11.97 29.07-.99c12.9 10.82 2.39 27.8 2.39 27.8s7.18 12.72 8.02 32.1c.61 14.03-4.79 31.49-29 41.39c-22.29 9.12-55.55 7.3-75.88-8.31C2.9 93.56 4.01 75.92 4.44 69.91c1.13-15.77 8.02-28.44 8.02-28.44s-10.19-20.15 2.25-29.7c13.66-10.49 23.38 1.86 29 1.41c4.09-.34 5.43-3.46 19.58-3.25"></path> <path fill="#b99277" d="M35.98 20.77c-.19-1.11-7.43-8.29-14.92-.99c-5.77 5.63 0 15.42.99 14.64c.76-.6 3.56-4.21 6.83-7.32c3.35-3.19 7.17-5.9 7.1-6.33m56.52.07c-.05.62 3.81 2.95 7.32 6.26c3.55 3.35 6.75 7.67 7.32 7.6c1.13-.14 5.98-9.64-.35-14.99s-14.15-.7-14.29 1.13"></path> <path fill="#f2a258" d="M64.51 60.38c14.64 0 23.42 16.52 22.9 26.84c-.47 9.39-5.82 17.18-23.84 17.08c-18.02-.09-22.59-8.36-22.9-17.18c-.28-7.88 5.35-26.74 23.84-26.74"></path> <path fill="#171716" d="M92.92 59.7c.33 4.16-1.9 7.95-6.17 7.63c-4.12-.32-7.13-3.66-7.13-7.84s2.22-7.14 5.56-7.6c4.08-.57 7.27 1.9 7.74 7.81"></path> <path fill="#2f3030" d="M74.55 76.99c-.34 4.16-3.1 8.61-11.12 8.33c-6.73-.24-9.9-4.72-10-8.89c-.14-5.89 3-8.06 10.61-8.17c8.68-.11 10.98 3.01 10.51 8.73"></path> <path fill="#171716" d="M48.37 61.25c-.43 4.15-4.33 7.06-7.98 6.17c-4.01-.98-5.81-5.2-4.97-9.29c.75-3.66 3.96-6.51 7.6-6.1c3.8.42 5.89 3.99 5.35 9.22"></path> <path fill="#2f3030" d="M63.99 95.04c5.49 0 8.49-3.03 9.34-3.87s1.99-2.28 3.75-.84c1.5 1.22.02 3.12-.66 3.85c-1.22 1.31-4.9 5.31-12.93 4.95c-7.88-.35-10.91-3.92-11.76-4.76c-.84-.84-2.25-3-.66-4.22c1.91-1.46 2.53.19 4.5 1.78s3.21 3.11 8.42 3.11"></path> </svg>`;
}, "D:/Users/I\xF1aki/Desktop/Dev/portfolio-v2/src/icons/Zustand.astro", void 0);

const TAGS = {
  REACT: {
    name: "React",
    bg: "bg-blue-400",
    icon: $$React
  },
  NEXTJS: {
    name: "Next.js",
    bg: "bg-zinc-800",
    icon: $$Next
  },
  ASTRO: {
    name: "Astro",
    bg: "bg-orange-500",
    icon: $$AstroIcon
  },
  TAILWIND: {
    name: "Tailwind",
    bg: "bg-cyan-800",
    icon: $$Tailwind
  },
  TS: {
    name: "TypeScript",
    bg: "bg-blue-600",
    icon: $$Ts
  },
  REDUX: {
    name: "Redux",
    bg: "bg-violet-400",
    icon: $$Redux
  },
  ZUSTAND: {
    name: "Zustand",
    bg: "bg-orange-300",
    icon: $$Zustand
  },
  MONGO: {
    name: "MongoDB",
    bg: "bg-green-900",
    icon: $$Mongo
  },
  EXPRESS: {
    name: "Express",
    bg: "bg-zinc-800",
    icon: $$Express
  },
  JS: {
    name: "JavaScript",
    bg: "bg-orange-300",
    icon: $$Js
  }
};
const MyProjects = [
  {
    name: "Discord clone",
    description: "Discord Clone TS is a web application that replicates the core features of Discord, such as server creation, channels, and real-time messaging, built with TypeScript and modern technologies.",
    image: "/assets/discord-clone.webp",
    code: "https://github.com/InakiCarcereny/discord-clone-ts",
    tags: [
      TAGS.REACT,
      TAGS.NEXTJS,
      TAGS.TAILWIND,
      TAGS.TS,
      TAGS.MONGO,
      TAGS.EXPRESS
    ]
  },
  {
    name: "Shop cart",
    description: "Shop Store Zustand is a demo application showcasing a modern approach to building responsive and efficient e-commerce frontends.",
    image: "/assets/dashboard.webp",
    code: "https://github.com/InakiCarcereny/shop-store-zustand",
    tags: [TAGS.REACT, TAGS.NEXTJS, TAGS.TAILWIND, TAGS.ZUSTAND, TAGS.TS]
  },
  {
    name: "Music player",
    description: "A full music aplication, you can create playlists, add songs to your favorites, meet the song of the day, search albums, see your recent songs, and obviusly play all of the songs.",
    image: "/assets/music-player.webp",
    code: "https://github.com/InakiCarcereny/musicPlayer-app",
    tags: [TAGS.REACT, TAGS.NEXTJS, TAGS.TAILWIND, TAGS.REDUX, TAGS.JS]
  },
  {
    name: "Dashboard",
    description: "Dashboard-TS is a project built with TypeScript that provides a modern and scalable solution for data management and interfaces. This repository features the implementation of an interactive dashboard, designed to be intuitive and highly customizable for business applications.",
    image: "/assets/dashboard.webp",
    code: "https://github.com/InakiCarcereny/dashboard-ts",
    tags: [
      TAGS.REACT,
      TAGS.NEXTJS,
      TAGS.TAILWIND,
      TAGS.TS,
      TAGS.EXPRESS,
      TAGS.MONGO
    ]
  }
];

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="Projects" class="mx-auto bg-zinc-100 dark:bg-[#222222] w-full h-full mt-28"> <div class="mx-auto max-w-[1650px] w-full h-full py-10 px-4 2xl:px-0"> <header class="flex items-center gap-2 mb-8"> ${renderComponent($$result, "Rocket", $$Rocket, { "class:list": ["md:h-10 md:w-10 h-8 w-8 text-black dark:text-white"] })} <h3 class="md:text-5xl text-2xl font-semibold text-black dark:text-white">
Projects
</h3> </header> <ul class="grid grid-cols-2 gap-8"> ${MyProjects.map((project) => renderTemplate`<li class="flex flex-col xl:flex-row gap-6 min-h-[200px] max-w-[800px] w-full"> <img${addAttribute(project.image, "src")}${addAttribute(project.name, "alt")} class="w-auto h-[300px] rounded-[4px] hover:scale-95 duration-150"> <div class="flex flex-col justify-between h-full"> <div class="flex flex-col gap-4"> <span class="text-black dark:text-white font-semibold text-xl md:text-3xl"> ${project.name} </span> <ul class="flex items-center gap-2 flex-wrap"> ${project.tags.map((tag) => renderTemplate`<li${addAttribute(`${tag.bg} flex items-center gap-2 rounded-full px-2 py-1`, "class")}> ${renderComponent($$result, "tag.icon", tag.icon, { "class:list": ["h-4 w-4"] })} <span class="md:text-sm text-xs font-semibold text-white"> ${tag.name} </span> </li>`)} </ul> <p class="text-gray-700 dark:text-white md:text-sm text-xs font-semibold"> ${project.description} </p> </div> <a rel="noopener noreferrer"${addAttribute(project.code, "href")} aria-label="Go to project code" class="flex items-center justify-center gap-2 rounded-[4px] px-2 py-1 bg-white dark:bg-black max-w-[80px]"> ${renderComponent($$result, "GitHub", $$GitHub, { "class:list": ["h-6 w-6"] })} <span class="md:text-sm text-xs font-semibold">Code</span> </a> </div> </li>`)} </ul> </div> </section>`;
}, "D:/Users/I\xF1aki/Desktop/Dev/portfolio-v2/src/components/Projects.astro", void 0);

const $$Astro$5 = createAstro();
const $$Alien = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Alien;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"${spreadAttributes(props)}> <path fill="currentColor" d="M9 3h1c.55 0 1 .45 1 1v1.43c0 .31-.26.57-.57.57H9c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1m2.99 26.03H13c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1h-2.43c-.31 0-.57.26-.57.57v.44c0 1.1.89 1.99 1.99 1.99m6.01-2v1c0 .55.45 1 1 1h1.03c1.09 0 1.97-.88 1.97-1.97v-.46a.57.57 0 0 0-.57-.57H19c-.55 0-1 .45-1 1M24 5V4c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v1.43c0 .31.26.57.57.57H23c.55 0 1-.45 1-1m4 6.03c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1h-.43a.57.57 0 0 0-.57.57v.46c0 1.09-.88 1.97-1.97 1.97h-.46a.57.57 0 0 0-.57.57v4.44c0 1.1-.89 1.99-1.99 1.99h-.44a.57.57 0 0 1-.57-.57V22.6a.57.57 0 0 0-.57-.57H10.57a.57.57 0 0 0-.57.57v2.86c0 .31-.25.57-.57.57H9c-1.1 0-2-.9-2-2V19.6c0-.31-.26-.57-.57-.57H6c-1.1 0-2-.9-2-2v-.43c0-.31-.26-.57-.57-.57H3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h.03c.55 0 1 .45 1 1v1.43c0 .32.25.57.57.57l1.8-.01c.3-.01.56-.22.6-.51c.24-1.81 1.71-3.22 3.53-3.45c.27-.03.47-.28.47-.56V6.57c0-.31.26-.57.58-.57h.3C13.05 6 14 6.95 14 8.12v.34c0 .32.26.57.57.57h2.86c.31 0 .57-.25.57-.57v-.39C18 6.93 18.93 6 20.07 6h.36c.31 0 .57.26.57.57V8.5c0 .28.2.53.47.56c1.82.22 3.27 1.64 3.5 3.46c.04.3.3.51.6.51h1.86c.31 0 .57-.25.57-.57zM11 17a1 1 0 0 0 1-1.018v-1.964c0-.565-.446-1.018-1-1.018c-.555 0-1 .453-1 1.018v1.964c0 .565.445 1.018 1 1.018m9-1.018c0 .565.445 1.018 1 1.018s1-.463 1-1.018v-1.964c0-.565-.445-1.018-1-1.018s-1 .453-1 1.018z"></path> </svg>`;
}, "D:/Users/I\xF1aki/Desktop/Dev/portfolio-v2/src/icons/Alien.astro", void 0);

const $$Astro$4 = createAstro();
const $$Email = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Email;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"${spreadAttributes(props)}> <path fill="currentColor" d="M13 19c0-3.31 2.69-6 6-6c1.1 0 2.12.3 3 .81V6a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h9.09c-.05-.33-.09-.66-.09-1M4 8V6l8 5l8-5v2l-8 5zm16 7v3h3v2h-3v3h-2v-3h-3v-2h3v-3z"></path> </svg>`;
}, "D:/Users/I\xF1aki/Desktop/Dev/portfolio-v2/src/icons/Email.astro", void 0);

const contacts = [
  {
    label: "Email",
    icon: $$Email,
    href: "mailto:inakicarcereny.dev@gmail.com"
  },
  {
    label: "LinkedIn",
    icon: $$LinkedIn,
    href: "https://www.linkedin.com/in/i%C3%B1aki-carcereny-77b555316/"
  }
];

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="Contact" class="mx-auto bg-zinc-100 dark:bg-[#222222] w-full h-full mt-28 py-10"> <div class="flex flex-col mx-auto max-w-[1650px] w-full h-full py-10 px-4 xl:px-0"> <header class="flex items-center place-content-end gap-4 mb-8"> ${renderComponent($$result, "Alien", $$Alien, { "class:list": ["md:h-10 md:w-10 w-8 h-8 text-black dark:text-white"] })} <div class="flex flex-col gap-4"> <h3 class="md:text-5xl text-2xl font-semibold text-black dark:text-white">
Contact me
</h3> <p class="md:text-sm text-xs font-medium text-gray-700 leading-relaxed text-wrap dark:text-white md:max-w-[450px] max-w-[300px] w-full">
Feel free to reach out through any of these platforms. I'm always open
          to discussing new projects and opportunities.
</p> </div> </header> <div class="flex flex-col items-center justify-center gap-12 bg-white dark:bg-[#1c1c1c] max-w-[700px] mx-auto w-full rounded-[8px] h-[400px] border border-zinc-300 dark:border-black px-8 shadow-md"> <img src="/assets/inaki.webp" alt="pohoto of inaki" class="w-48 h-48 rounded-[4px] border dark:border-black border-zinc-300"> <ul class="flex flex-col gap-4 max-w-[400px] w-full"> ${contacts.map((contact) => renderTemplate`<li class="w-full"> <a${addAttribute(contact.href, "href")} rel="noopener noreferrer"${addAttribute(`Go to ${contact.label} page`, "aria-label")} class="flex items-center justify-center gap-4 font-semibold text-black dark:text-white bg-zinc-100 rounded-[4px] px-4 py-1 dark:bg-black w-full"> ${renderComponent($$result, "contact.icon", contact.icon, { "class:list": ["h-5 w-5 text-black dark:text-white"] })} <p class="font-semibold text-sm md:text-base text-black dark:text-white"> ${contact.label} </p> </a> </li>`)} </ul> </div> </div> </section>`;
}, "D:/Users/I\xF1aki/Desktop/Dev/portfolio-v2/src/components/Contact.astro", void 0);

const $$Astro$3 = createAstro();
const $$Duck = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Duck;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"${spreadAttributes(props)}> <path fill="currentColor" d="M8.5 5A1.5 1.5 0 0 0 7 6.5A1.5 1.5 0 0 0 8.5 8A1.5 1.5 0 0 0 10 6.5A1.5 1.5 0 0 0 8.5 5M10 2a5 5 0 0 1 5 5c0 1.7-.85 3.2-2.14 4.1c1.58.15 3.36.51 5.14 1.4c3 1.5 4-.5 4-.5s-1 9-7 9H9s-5 0-5-5c0-3 3-4 2-6c-4 0-4-3.5-4-3.5c1 .5 2.24.5 3 .15A5.02 5.02 0 0 1 10 2"></path> </svg>`;
}, "D:/Users/I\xF1aki/Desktop/Dev/portfolio-v2/src/icons/Duck.astro", void 0);

const $$Astro$2 = createAstro();
const $$Separator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Separator;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"${spreadAttributes(props)}> <path fill="currentColor" fill-rule="evenodd" d="M10 1a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1" clip-rule="evenodd"></path> </svg>`;
}, "D:/Users/I\xF1aki/Desktop/Dev/portfolio-v2/src/icons/Separator.astro", void 0);

const $$Astro$1 = createAstro();
const $$Item = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Item;
  const { label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <a class="text-black dark:text-white font-semibold"${addAttribute(`#${label}`, "href")}>${label}</a> </li>`;
}, "D:/Users/I\xF1aki/Desktop/Dev/portfolio-v2/src/components/Item.astro", void 0);

function Cross(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          d: "M16.066 8.995a.75.75 0 1 0-1.06-1.061L12 10.939L8.995 7.934a.75.75 0 1 0-1.06 1.06L10.938 12l-3.005 3.005a.75.75 0 0 0 1.06 1.06L12 13.06l3.005 3.006a.75.75 0 0 0 1.06-1.06L13.062 12z"
        }
      )
    }
  );
}

function Menu(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M19.75 12a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 .75-.75m0-5a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 .75-.75m0 10a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 .75-.75",
          clipRule: "evenodd"
        }
      )
    }
  );
}

const navItems = [
  {
    label: "About"
  },
  {
    label: "Projects"
  },
  {
    label: "Skills"
  },
  {
    label: "Contact"
  }
];

function Moon(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 128 128",
      ...props,
      children: [
        /* @__PURE__ */ jsx("circle", { cx: 64, cy: 64, r: 60, fill: "#22404c" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#1b2e35",
            d: "M64.01 8.91c-.07 1.36-3.5 2.08-7.48 2.28c-3.99.2-7.29-.2-7.59-1.53c-.29-1.32 2.83-3.14 7.19-3.37s7.96 1.26 7.88 2.62m55.36 50.56c-.01-.4.01-.8.08-1.21c1.22-7.23 1.8-14-6.32-18.14c-.89-.46-1.87-.83-2.55-1.57c-1.25-1.35-1.14-3.41-1.46-5.22c-.97-5.54-7.24-9.51-12.66-8.01c-1.78.49-3.64 1.47-5.35.8c-1.38-.54-2.16-1.97-2.94-3.23c-2.21-3.58-5.6-6.76-9.77-7.34c-4.17-.59-8.91 2.3-9.17 6.5c-.11 1.83.2 3.99 1.6 5.18c5.88 5.01 9.52 1.32 12.25 3.91c3.17 3.01-3.41 3.82-2.32 11.47c.55 3.82 4.34 7.4 8.19 7.08c1.71-.15 4.31-.24 5.26 1.19c.75 1.12.56 2.19.56 4.03c0 4.54.5 8.11 4.92 9.14c.57.13 1.19.2 1.72-.03c1.17-.51 1.16-2.08 1.08-3.36c-.35-5.62-4.31-6.76-5.03-9.85c-.91-3.94 4.47-9.27 8.87-7.78c3.5 1.19.65 5.25 3.21 9.94c1.69 3.11 5.01 4.54 6.24 7.08s.09 4.3.69 5.91c.93 2.52 2.41 2.56 3.24 1.67c.91-.97.61-2.96.39-4.12c-.24-1.35-.69-2.67-.73-4.04m-95.13 42.57c.11-.16.99-.39 2.01.57c1.02.95 4.03 3.79 5.23 4.88s.03 2.01-.97 1.83c-4.8-.84-7.42-5.61-6.27-7.28m17.8 12.38c.05-.19.79-.71 2.08-.19s5.12 2.11 6.63 2.7s.74 1.86-.25 2.06c-4.8.92-8.94-2.6-8.46-4.57m6.26-3.58c.6.47 1.21 1.21.93 1.91c-.26.64-1.08.81-1.77.83c-2.28.07-4.56-.51-6.55-1.6c-1.4-.77-5.07-3.14-4.55-5.13c.74-2.82 10.4 2.8 11.94 3.99M97.71 106c-.22-.13-.6-1.22.58-2.57s4.68-5.33 6.01-6.92s2.66-.18 2.52 1.09c-.7 6.11-6.79 9.73-9.11 8.4m11.3-11.81c-.2-.04-.77-.78-.21-2.12s2.23-5.29 2.85-6.84c.62-1.56 2-.82 2.21.2c1.02 4.86-2.73 9.19-4.85 8.76m-22.5-80.87c-.04.2-.79.79-2.12.27s-5.25-2.1-6.8-2.68s-.79-1.98.22-2.22c4.88-1.15 9.16 2.49 8.7 4.63m-30.04 2.15c-9.5-1.73-12.9 3.96-15.81 5.2c-2.32.98-3.92-.73-7.5 1.46c-4.94 3.01-3.07 5.19-3.52 7.74c-.46 2.55-3.19 3.64-5.19 3.83c-2.37.23-2.56-1.21-1.42-2.94c.63-.95 1.3-1.54 1.62-2.66c.37-1.3.17-2.7.89-3.9c1.13-1.88 3.77-2.14 5.4-3.6c1.18-1.06 1.75-2.69 3.01-3.66s2.9-1.32 4.47-1.6c3.2-.57 5.9-3.09 4.45-3.17c-1.46-.08-3.89-.55-5.93.95c-2.27 1.66-5.32 2.18-7.73 3.55c-2.7 1.55-4.12 4.92-4.94 5.83s-3.46 1-5.28 2.88C15.19 29.27 8.85 43.4 8.85 48.69c0 4.93 2.19 9.75 7.08 11.09c.74.2 1.53.43 2.01 1.03c1.1 1.37-1.65 5.49-2.07 7.15c-1.07 4.3.1 7.61 2 9.98c4.11 5.11 8.21 4.42 12.33 1.89c1-.62 1.86-1.49 2.97-1.9c2.34-.87 2.4.63 2.63 2.38c1.08 8.06 4.43 10.14 6.78 11.05c4.89 1.89 10.9.09 14.08-4.08s3.53-10.4.66-14.79c-4.38-6.7-13.03-7.07-14.78-10.82c-1.97-4.22 3.48-4.81 5.86-8.47c2.12-3.25 2.56-7.72.54-11.08c-1-1.66-2.66-3.32-2.24-5.21c.47-2.11 6.48-5.42 10.95-9.26c3.18-2.72 10.63-10.03-1.18-12.18M26.01 48.86c-.34.65-.85 1.3-1.58 1.41c-.69.1-1.35-.34-1.78-.89c-.68-.89-.88-2.14-.45-3.17c.51-1.24 2.25-2.23 3.6-1.65c.73.31.95 1.05.91 1.86c-.05.89-.4 1.86-.7 2.44m15.5 2.94c-.14.79-.39 1.55-.57 2.07c-.49 1.45-1.2 2.97-2.57 3.64c-.6.3-1.27.4-1.93.51c-1.37.21-3.08.28-3.79-.91c-.26-.43-.32-.95-.37-1.45c-.23-2.16-.34-4.67 1.25-6.14c1.14-1.06 2.42-.93 3.84-.94c.8 0 2.73-.26 3.41.18c.91.59.94 1.85.73 3.04"
          }
        )
      ]
    }
  );
}

function Sun(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 512 512",
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#ffc639",
            d: "m260.622 42.537l58.117-39.696c3.641-2.487 8.643-1.147 10.552 2.828l30.483 63.437a7.2 7.2 0 0 0 7.035 4.062l70.179-5.32c4.397-.333 8.058 3.328 7.725 7.725l-5.32 70.179a7.2 7.2 0 0 0 4.062 7.035l63.437 30.483c3.975 1.91 5.315 6.911 2.828 10.552l-39.696 58.117a7.2 7.2 0 0 0 0 8.123l39.696 58.117c2.487 3.641 1.147 8.643-2.828 10.552l-63.437 30.483a7.2 7.2 0 0 0-4.062 7.035l5.32 70.179c.333 4.397-3.328 8.058-7.725 7.725l-70.179-5.32a7.2 7.2 0 0 0-7.035 4.062l-30.483 63.437c-1.91 3.975-6.911 5.315-10.552 2.828l-58.117-39.696a7.2 7.2 0 0 0-8.123 0l-58.117 39.696c-3.641 2.487-8.643 1.147-10.552-2.828l-30.483-63.437a7.2 7.2 0 0 0-7.035-4.062l-70.179 5.32c-4.397.333-8.058-3.328-7.725-7.725l5.32-70.179a7.2 7.2 0 0 0-4.062-7.035L6.228 328.731c-3.975-1.91-5.315-6.911-2.828-10.552l39.696-58.117a7.2 7.2 0 0 0 0-8.123L3.401 193.821c-2.487-3.641-1.147-8.643 2.828-10.552l63.437-30.483a7.2 7.2 0 0 0 4.062-7.035l-5.32-70.179c-.333-4.397 3.328-8.058 7.725-7.725l70.179 5.32a7.2 7.2 0 0 0 7.035-4.062L183.83 5.668c1.91-3.975 6.911-5.315 10.552-2.828l58.117 39.696a7.2 7.2 0 0 0 8.123.001"
          }
        ),
        /* @__PURE__ */ jsx("circle", { cx: 256.56, cy: 256, r: 194.415, fill: "#ffe564" })
      ]
    }
  );
}

function ToggleTheme() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      document.body.classList.add("dark");
      document.body.style.transition = "background-color 0.3s ease-in-out";
      setTheme("dark");
    } else {
      document.body.classList.remove("dark");
      setTheme("light");
    }
  };
  return /* @__PURE__ */ jsx("button", { onClick: toggleTheme, children: theme === "light" ? /* @__PURE__ */ jsx(Moon, { className: "h-6 w-6" }) : /* @__PURE__ */ jsx(Sun, { className: "h-6 w-6" }) });
}

function HamburgerButton() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        "aria-label": "Open hamburger menu",
        onClick: toggleMenu,
        className: "px-2 py-1 rounded-[4px] border border-black dark:border-zinc-100 block md:hidden",
        children: /* @__PURE__ */ jsx(Menu, { className: "h-6 w-6 text-black dark:text-white" })
      }
    ),
    open && /* @__PURE__ */ jsxs("aside", { className: "flex flex-col fixed right-0 top-0 z-50 w-[250px] h-screen bg-white dark:bg-[#1c1c1c] px-4 pt-8", children: [
      /* @__PURE__ */ jsxs("header", { className: "flex items-center justify-between w-full", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-black dark:text-white font-bold", children: "Menu" }),
        /* @__PURE__ */ jsx("button", { "aria-label": "Close hamburger menu", onClick: toggleMenu, children: /* @__PURE__ */ jsx(Cross, { className: "h-8 w-8 text-black dark:text-white" }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-4 mt-8", children: navItems.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          "a",
          {
            href: `#${item.label}`,
            className: "text-black dark:text-white font-semibold",
            children: item.label
          }
        ) }, item.label)) }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/assets/cv.pdf",
            download: "inaki-CV",
            className: "flex items-center justify-center px-4 py-1 border border-black dark:border-white rounded-[4px] text-black dark:text-white font-semibold dark:hover:bg-white hover:bg-black dark:hover:text-black hover:text-white duration-200 text-sm",
            children: "Download CV"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-black dark:text-white", children: "Toggle Theme" }),
          /* @__PURE__ */ jsx(ToggleTheme, {})
        ] })
      ] })
    ] })
  ] });
}

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="w-full h-[70px] py-12 sticky top-0 z-[9999]"> <div class="mx-auto max-w-[1150px] w-full h-full flex items-center justify-between px-4 xl:px-0"> <h2 class="flex items-center gap-2 font-mono"> ${renderComponent($$result, "Duck", $$Duck, { "class:list": ["md:h-10 md:w-10 h-8 w-8 text-cyan-600"] })} <span class="text-black dark:text-white font-semibold text-lg md:text-3xl">InakiDev</span> </h2> <nav class="hidden md:flex"> <ul class="flex items-center gap-6"> ${navItems.map((item) => renderTemplate`${renderComponent($$result, "Item", $$Item, { "label": item.label })}`)} </ul> </nav> <div class="items-center gap-4 hidden md:flex"> <a href="/assets/inaki-carcereny-cv.pdf" download="inaki-carcereny-cv" class="px-4 py-1 border border-black dark:border-white rounded-[4px] text-black dark:text-white font-semibold dark:hover:bg-white hover:bg-black dark:hover:text-black hover:text-white duration-200">
Download CV
</a> ${renderComponent($$result, "Separator", $$Separator, { "class:list": ["h-6 w-6 dark:text-white text-black"] })} ${renderComponent($$result, "ToggleTheme", ToggleTheme, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ToggleTheme", "client:component-export": "ToggleTheme" })} </div> ${renderComponent($$result, "HamburgerButton", HamburgerButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/HamburguerButton", "client:component-export": "HamburgerButton" })} </div> </header> `;
}, "D:/Users/I\xF1aki/Desktop/Dev/portfolio-v2/src/components/Header.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="If you need a developer just go here"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/assets/favicon.svg"><title>${title}</title><meta property="twitter:title" content="Inaki Carcereny - Frontend Developer"><meta property="twitter:description" content="If you need a developer just go here"><meta property="og:image" content="/assets/og-image.webp"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description" content="If you need a developer just go here">${renderHead()}</head> <body class="flex flex-col gap-6 h-full w-full bg-white"> ${renderComponent($$result, "Header", $$Header, {})} <main class="h-full w-full"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "D:/Users/I\xF1aki/Desktop/Dev/portfolio-v2/src/layouts/Layout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Inaki Carcereny - Frontend Developer" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "Skills", $$Skills, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ` })}`;
}, "D:/Users/I\xF1aki/Desktop/Dev/portfolio-v2/src/pages/index.astro", void 0);

const $$file = "D:/Users/Iñaki/Desktop/Dev/portfolio-v2/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
