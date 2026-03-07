import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.scss";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  children: ReactNode;
}

export function Button(props: IButton) {
  const { type = "button", isLoading, children, ...rest } = props;

  return (
    /* eslint-disable react/button-has-type */
    <button className={styles.btn} type={type} disabled={isLoading} {...rest}>
      {isLoading ? "Loading..." : children}
    </button>
  );
}
