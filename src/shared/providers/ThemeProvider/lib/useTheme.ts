import {
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
  Themes,
} from "shared/config/theme/ThemeContext";
import { useContext } from "react";

interface UseThemeResult {
  theme: Themes;
  toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const nextTheme = theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;
    setTheme(nextTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, nextTheme);
  };

  return { theme, toggleTheme };
};
