"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import ThemeSwitchIcon from "../ThemeSwitchIcon/ThemeSwitchIcon";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className={`w-fit absolute right-5 top-2 p-2 rounded-full hover:scale-110 active:scale-100 duration-200 bg-primary`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {/* {theme === "light" ? "Dark" : "Light"} */}
      <ThemeSwitchIcon />
    </button>
  );
};
