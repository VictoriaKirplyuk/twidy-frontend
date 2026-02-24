import { useTheme } from "shared/providers";
import styles from "shared/ui/header/Header.module.scss";

export function Header() {
  const { toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <button type="button" onClick={toggleTheme}>
        Change theme
      </button>
    </header>
  );
}
