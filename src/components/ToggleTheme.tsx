import { Moon } from "@/icons/Moon";
import { Sun } from "@/icons/Sun";
import { useState } from "react";

export function ToggleTheme() {
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

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? (
        <Moon className="h-6 w-6" />
      ) : (
        <Sun className="h-6 w-6" />
      )}
    </button>
  );
}
