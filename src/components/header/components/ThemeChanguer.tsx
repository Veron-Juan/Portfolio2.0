"use client";
import { useTheme } from "next-themes";
import dark from "/public/dark.svg";
import light from "/public/light.svg";

import Image from "next/image";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const handleModeLight = () => {
    setTheme("light");
  };
  const handleModeDark = () => {
    setTheme("dark");
  };

  return (
    <>
    {theme === "dark" ? <div className="w-7 h-7 border-2 flex items-center justify-center rounded-md cursor-pointer">
          <Image src={light} alt="light" onClick={handleModeLight} />
        </div> : <div className="w-7 h-7 border-2 flex items-center justify-center rounded-md cursor-pointer">
          <Image src={dark} alt="dark" onClick={handleModeDark} />
        </div>}
    </>
  );
};

export default ThemeChanger;
