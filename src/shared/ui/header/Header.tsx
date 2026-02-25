import styles from "shared/ui/header/Header.module.scss";
import { ThemeButton } from "shared/ui/buttons/ChangeThemeButton/ThemeButton";

export function Header() {
  return (
    <header className={styles.header}>
      <ThemeButton />
    </header>
  );
}
