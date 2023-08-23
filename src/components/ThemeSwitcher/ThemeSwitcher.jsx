"use client";
import { useState, useEffect } from "react";
import ThemeSwitchIcon from "../ThemeSwitchIcon/ThemeSwitchIcon";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className={`w-fit absolute z-[123] right-5 top-2 p-2 rounded-full hover:scale-110 active:scale-100 duration-200 bg-primary opacity-30 hover:opacity-100`}
    >
      {/* {theme === "light" ? "Dark" : "Light"} */}
      {/* <ThemeSwitchIcon isDark={theme === "dark" ? true : false} /> */}
      Light
    </button>
  );
};
