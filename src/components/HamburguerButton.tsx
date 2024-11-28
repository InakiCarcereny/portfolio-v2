import { Cross } from "@/icons/Cross";
import { Menu } from "@/icons/Menu";
import { useState } from "react";

export function HamburgerButton() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="px-2 py-1 rounded-[4px] border border-black dark:border-zinc-100 block md:hidden"
      >
        <Menu className="h-6 w-6 text-black dark:text-white" />
      </button>

      {open && (
        <aside className="fixed right-0 top-0 z-50 w-[250px] h-screen bg-white">
          <header className="flex items-center justify-between px-4 py-8 w-full">
            <h2 className="text-black dark:text-white font-bold">Menu</h2>
            <button onClick={toggleMenu}>
              <Cross className="h-8 w-8 text-black dark:text-white" />
            </button>
          </header>
        </aside>
      )}
    </>
  );
}
