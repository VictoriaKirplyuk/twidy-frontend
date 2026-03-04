import Logo from "shared/logo/logo.svg";
import { ReactNode } from "react";
import styles from "./FormCard.module.scss";

interface IAuthForm {
  title: string;
  message?: string;
  children: ReactNode;
}

export function FormCard({ title, message, children }: IAuthForm) {
  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <div className={styles.headerTitle}>
          <Logo
            className={styles.logo}
            width="50"
            height="50"
            viewBox="0 0 100 100"
          />
          <h2>{title}</h2>
        </div>
        {message && <h3 className={styles.headerMessage}>{message}</h3>}
      </div>
      {children}
    </div>
  );
}
