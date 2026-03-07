import Icon from "shared/ui/buttons/ChangeThemeButton/themeIcon.svg";
import { useTheme } from "shared/providers";
import styles from "./ThemeButton.module.scss";

export function ThemeButton() {
  const { toggleTheme } = useTheme();

  return (
    <button
      className={styles.themeButton}
      aria-label="сменить тему"
      onClick={toggleTheme}
      type="button"
    >
      <Icon className={styles.themeIcon} aria-hidden="true" focusable="false" />
    </button>
  );
}
