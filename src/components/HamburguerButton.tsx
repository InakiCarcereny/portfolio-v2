import { Cross } from "@/icons/Cross";
import { Menu } from "@/icons/Menu";
import { useState } from "react";

import { navItems } from "@/lib/NavItems";
import { ToggleTheme } from "./ToggleTheme";

export function HamburgerButton() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <button
        aria-label="Open hamburger menu"
        onClick={toggleMenu}
        className="px-2 py-1 rounded-[4px] border border-black dark:border-zinc-100 block md:hidden"
      >
        <Menu className="h-6 w-6 text-black dark:text-white" />
      </button>

      {open && (
        <aside className="flex flex-col fixed right-0 top-0 z-50 w-[250px] h-screen bg-white dark:bg-[#1c1c1c] px-4 pt-8">
          <header className="flex items-center justify-between w-full">
            <h3 className="text-black dark:text-white font-bold">Menu</h3>
            <button aria-label="Close hamburger menu" onClick={toggleMenu}>
              <Cross className="h-8 w-8 text-black dark:text-white" />
            </button>
          </header>
          <section className="flex flex-col gap-4">
            <ul className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={`#${item.label}`}
                    className="text-black dark:text-white font-semibold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="/assets/cv.pdf"
              download="inaki-CV"
              className="flex items-center justify-center px-4 py-1 border border-black dark:border-white rounded-[4px] text-black dark:text-white font-semibold dark:hover:bg-white hover:bg-black dark:hover:text-black hover:text-white duration-200 text-sm"
            >
              Download CV
            </a>

            <div className="flex items-center justify-between">
              <span className="font-semibold text-black dark:text-white">
                Toggle Theme
              </span>
              <ToggleTheme />
            </div>
          </section>
        </aside>
      )}
    </>
  );
}
