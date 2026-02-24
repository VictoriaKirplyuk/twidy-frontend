import { ReactNode, useMemo, useState } from "react";
import {
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
  Themes,
} from "shared/config/theme/ThemeContext";

interface IThemeProvider {
  children: ReactNode;
}

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes) || Themes.LIGHT;

function ThemeProvider({ children }: IThemeProvider) {
  const [theme, setTheme] = useState(defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return <ThemeContext value={defaultProps}>{children}</ThemeContext>;
}

export default ThemeProvider;
