import Test from "pages/Test/ui/Test";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";

export function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button type="button" onClick={toggleTheme}>
        Change theme
      </button>
      <Test />
    </div>
  );
}
