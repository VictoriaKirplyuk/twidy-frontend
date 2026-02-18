import { useContext } from "react";
import Test from "./Test";
import {
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
  Themes,
} from "../theme/ThemeContext";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const nextTheme = theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;
    setTheme(nextTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, nextTheme);
  };

  return (
    <div className={`app ${theme}`}>
      <button type="button" onClick={toggleTheme}>
        Change theme
      </button>
      <Test />
    </div>
  );
}

export default App;
