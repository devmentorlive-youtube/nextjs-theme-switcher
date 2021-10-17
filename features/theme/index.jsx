import NextHead from "next/head";
import { useState, useEffect, createContext, useContext } from "react";

const ThemeContext = createContext({
  setTheme: () => {},
  theme: "light",
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getThemeFromStorage());
  const themes = ["light", "dark"];

  useEffect(() => {
    persistTheme();
    updateDOM();
  }, [theme]);

  useEffect(() => {
    getStoredTheme();
  }, []);

  function updateDOM() {
    if (typeof document === "undefined") return;
    const d = document.documentElement;
    d.classList.remove(...themes);
    d.classList.add(getThemeFromStorage() || theme);
  }

  function getThemeFromStorage() {
    if (typeof localStorage === "undefined") return;
    return localStorage.getItem("theme") || undefined;
  }

  function persistTheme() {
    if (theme) localStorage.setItem("theme", theme);
  }

  function getStoredTheme() {
    const storedTheme = localStorage.getItem("theme") || undefined;
    if (storedTheme) setTheme(storedTheme);
  }

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <NextHead>
        <script
          key="next-theme-script"
          dangerouslySetInnerHTML={{
            __html: `!function(){${updateDOM()}}()`,
          }}
        />
      </NextHead>
      {children}
    </ThemeContext.Provider>
  );
}
