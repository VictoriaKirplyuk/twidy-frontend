import { MainLayout } from "app/layouts/mainLayout/MainLayout";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "shared/providers";

export function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <MainLayout />
    </div>
  );
}
