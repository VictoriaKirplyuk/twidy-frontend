import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "shared/providers";
import { AppRouter } from "app/router/AppRouter";

export function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <AppRouter />
    </div>
  );
}
