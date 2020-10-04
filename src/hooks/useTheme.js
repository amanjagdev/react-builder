import { useState } from "react";
import { LIGHT, DARK } from "../constants/constants";

export function useTheme(savedTheme) {
  const [theme, setTheme] = useState(savedTheme);
  const toggleTheme = () => {
    const themeToSave = theme === DARK ? LIGHT : DARK;
    localStorage.setItem("theme", themeToSave);
    setTheme(themeToSave);
  };
  return [theme, toggleTheme];
}
