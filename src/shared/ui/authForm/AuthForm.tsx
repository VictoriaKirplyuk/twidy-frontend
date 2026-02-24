import Logo from "shared/logo/logo.svg";
import { ReactNode } from "react";
import styles from "./AuthForm.module.scss";

interface IAuthForm {
  title: string;
  message?: string;
  children?: ReactNode;
}

export function AuthForm({ title, message, children }: IAuthForm) {
  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <Logo
          className={styles.logo}
          width="50"
          height="50"
          viewBox="0 0 100 100"
        />
        <h5>{title}</h5>
      </div>
      <form>
        {message && <h4 className={styles.message}>{message}</h4>}
        {children}
      </form>
    </div>
  );
}
