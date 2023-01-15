import { useEffect, useState } from "react";

const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>();

  const toggleDarkMode = (): void => {
    const body = document.querySelector("body");
    if (isDarkMode) {
      body?.classList.remove("dark");
    } else if (!isDarkMode) {
      body?.classList.add("dark");
    }
    setIsDarkMode((prev) => !prev);
  };
  useEffect(() => {
    setIsDarkMode(
      document.querySelector("body")?.classList.contains("dark") as boolean
    );
  }, []);

  return { isDarkMode, toggleDarkMode };
};

export default useTheme;
