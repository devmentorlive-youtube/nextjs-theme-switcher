import { Switch } from "@headlessui/react";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { useTheme } from "@/features/theme";
import { useState, useEffect } from "react";

export default function Header({}) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="bg-blue-700 w-screen py-4">
      <div className="container md:1/2 mx-auto flex items-center space-x-3 text-white">
        <Switch
          checked={theme === "dark"}
          onChange={() =>
            setTheme((prev) => (prev === "dark" ? "light" : "dark"))
          }
          className={`bg-blue-900 h-[24px] w-[40px] flex items-center rounded-full`}>
          <span className="sr-only">Use setting</span>
          {mounted && (
            <span
              aria-hidden="true"
              className={`${
                theme === "dark" ? "translate-x-[16px]" : "translate-x-[4px]"
              }
            h-[20px] w-[20px] rounded-full shadow-lg transform ring-0 transition ease-in-out duration-200`}>
              {theme === "dark" ? <MoonIcon /> : <SunIcon />}
            </span>
          )}
        </Switch>
      </div>
    </header>
  );
}
